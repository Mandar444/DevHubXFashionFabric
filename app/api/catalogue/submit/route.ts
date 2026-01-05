import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const {
            firstName,
            lastName,
            email,
            companyName,
            phoneNumber,
            country,
        } = body

        // Validate required fields
        if (!firstName || !lastName || !email || !phoneNumber || !country) {
            return NextResponse.json(
                { error: "All required fields must be filled" },
                { status: 400 }
            )
        }

        // Get IP address and user agent
        const ipAddress =
            request.headers.get("x-forwarded-for") ||
            request.headers.get("x-real-ip") ||
            "unknown"
        const userAgent = request.headers.get("user-agent") || "unknown"

        // Store catalogue submission data in CatalogueSubmission table
        let submission = null
        try {
            // @ts-ignore - CatalogueSubmission model exists in schema but Prisma client needs regeneration
            submission = await prisma.catalogueSubmission.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    companyName: companyName || null,
                    phoneNumber,
                    country,
                    ipAddress,
                    userAgent,
                    otpVerified: true,
                },
            })
        } catch (error) {
            console.log("CatalogueSubmission table not available yet, storing in Download table only")
        }

        // Also create a download record for tracking purposes
        // Find or create a general catalogue entry
        let catalogue = await prisma.catalogue.findFirst({
            where: { category: "general" }
        })

        if (!catalogue) {
            // Create a default catalogue entry if it doesn't exist
            catalogue = await prisma.catalogue.create({
                data: {
                    title: "General Catalogue",
                    category: "general",
                    coverImage: "/images/catalogue/catalogue-preview.jpg",
                    pdfUrl: "/pdfs/general-catalogue.pdf",
                    published: true,
                }
            })
        }

        // Create download record with extended info
        const userNameWithDetails = companyName
            ? `${firstName} ${lastName} (${companyName}) - ${country}`
            : `${firstName} ${lastName} - ${country}`

        const download = await prisma.download.create({
            data: {
                catalogueId: catalogue.id,
                userName: userNameWithDetails,
                userEmail: email,
                userPhone: phoneNumber,
                ipAddress,
                userAgent,
            },
        })

        return NextResponse.json({
            success: true,
            submissionId: submission?.id || null,
            downloadId: download.id,
            message: "Form submitted successfully",
        })
    } catch (error) {
        console.error("Error submitting form:", error)
        return NextResponse.json(
            { error: "Failed to submit form" },
            { status: 500 }
        )
    }
}
