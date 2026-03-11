import { NextRequest, NextResponse } from "next/server"
import { otpStore } from "@/lib/otp-store"

export async function POST(request: NextRequest) {
  try {
    const { email, otp } = await request.json()

    if (!email || !otp) {
      return NextResponse.json({ error: "Email and OTP are required" }, { status: 400 })
    }

    const emailNormalized = email.trim().toLowerCase()
    
    // Retrieve OTP from store
    const storedData = otpStore.get(emailNormalized)

    if (!storedData) {
      return NextResponse.json({ error: "No OTP found or OTP expired. Please request a new one." }, { status: 401 })
    }

    // Check expiration
    if (Date.now() > storedData.expiresAt) {
      otpStore.delete(emailNormalized)
      return NextResponse.json({ error: "OTP has expired. Please request a new one." }, { status: 401 })
    }

    // Check if OTP matches
    if (storedData.otp !== otp) {
      return NextResponse.json({ error: "Invalid OTP code. Please try again." }, { status: 401 })
    }

    // Success! Clear the OTP from store
    otpStore.delete(emailNormalized)

    return NextResponse.json(
      {
        success: true,
        verified: true,
        message: "Email verified successfully",
        email: emailNormalized
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error verifying email OTP:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
