import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// GET all catalogues (public)
export async function GET() {
    try {
        const catalogues = await prisma.catalogue.findMany({
            where: { published: true },
            orderBy: { publishedAt: "desc" }
        })

        return NextResponse.json(catalogues)
    } catch (error) {
        console.error("Error fetching catalogues:", error)
        return NextResponse.json(
            { error: "Failed to fetch catalogues" },
            { status: 500 }
        )
    }
}

// POST create catalogue (admin only)
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)

        // Check if user is authenticated and is admin
        if (!session || (session.user as any)?.role !== "admin") {
            return NextResponse.json(
                { error: "Unauthorized - Admin access required" },
                { status: 403 }
            )
        }

        const body = await request.json()
        const { title, subtitle, category, coverImage, pdfUrl, color } = body

        // Validate required fields
        if (!title || !category || !coverImage || !pdfUrl) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            )
        }

        const catalogue = await prisma.catalogue.create({
            data: {
                title,
                subtitle,
                category,
                coverImage,
                pdfUrl,
                color: color || "bg-neutral-100",
            }
        })

        return NextResponse.json(catalogue, { status: 201 })
    } catch (error) {
        console.error("Error creating catalogue:", error)
        return NextResponse.json(
            { error: "Failed to create catalogue" },
            { status: 500 }
        )
    }
}
