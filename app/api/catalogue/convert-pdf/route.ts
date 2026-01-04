import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { uploadToSupabase } from "@/lib/supabase"
import { prisma } from "@/lib/prisma"
import { PDFDocument } from "pdf-lib"

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)

        if (!session || (session.user as any)?.role !== "admin") {
            return NextResponse.json(
                { error: "Unauthorized - Admin access required" },
                { status: 403 }
            )
        }

        const body = await request.json()
        const { pdfUrl, catalogueId } = body

        if (!pdfUrl || !catalogueId) {
            return NextResponse.json(
                { error: "Missing pdfUrl or catalogueId" },
                { status: 400 }
            )
        }

        console.log(`Converting PDF to images: ${pdfUrl}`)

        // Fetch the PDF
        const pdfResponse = await fetch(pdfUrl)
        if (!pdfResponse.ok) {
            throw new Error("Failed to fetch PDF")
        }

        const pdfBytes = await pdfResponse.arrayBuffer()

        // Load PDF document to get page count
        const pdfDoc = await PDFDocument.load(pdfBytes)
        const numPages = pdfDoc.getPageCount()

        console.log(`PDF has ${numPages} pages`)

        // For now, we'll store the PDF URL as the page source
        // The client-side component will render pages from the PDF directly
        // This is more efficient than pre-rendering all pages
        const pageImageUrls: string[] = []

        // Create placeholder entries for each page
        // The page flip component will load pages from the PDF on-demand
        for (let i = 0; i < numPages; i++) {
            pageImageUrls.push(`${pdfUrl}#page=${i + 1}`)
        }

        // Update catalogue with page references
        await prisma.catalogue.update({
            where: { id: catalogueId },
            data: { pageImages: pageImageUrls } as any
        })

        console.log(`Successfully processed PDF with ${numPages} pages`)

        return NextResponse.json({
            success: true,
            numPages,
            pageImages: pageImageUrls
        })
    } catch (error: any) {
        console.error("Error processing PDF:", error)
        return NextResponse.json(
            {
                error: "Failed to process PDF",
                details: error?.message || "Unknown error"
            },
            { status: 500 }
        )
    }
}
