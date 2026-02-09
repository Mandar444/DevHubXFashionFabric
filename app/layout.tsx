import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, EB_Garamond } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AuthProvider from "@/components/auth-provider"
import { Toaster } from "@/components/ui/sonner"
import { WhatsAppSticky } from "@/components/whatsapp-sticky"

const inter = Inter({ subsets: ["latin"] })
const garamond = EB_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-garamond",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://fashionfabric.com'),
  title: "Fashion Fabric - India's Premier Uniform Supplier",
  description: "India's leading uniform manufacturer with over 15 years of excellence. Specializing in hospitality uniforms, corporate wear, and premium linens. Custom-tailored solutions for hotels, restaurants, and businesses.",
  keywords: "uniforms in Goa, hotel uniforms, corporate uniforms, chef uniforms, hospitality uniforms, uniform manufacturer Goa, custom uniforms, linen shop Goa, Fashion Fabric",
  authors: [{ name: "Fashion Fabric" }],
  creator: "Fashion Fabric",
  publisher: "Fashion Fabric",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/images/footer-logo.svg" },
      { url: "/images/footer-logo.svg", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://fashionfabric.com/",
    siteName: "Fashion Fabric",
    title: "Fashion Fabric - India's Premier Uniform Supplier & Linen Shop",
    description: "India's leading uniform manufacturer with over 15 years of excellence. Specializing in hospitality uniforms, corporate wear, and premium linens.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fashion Fabric - Uniform Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion Fabric - India's Premier Uniform Supplier",
    description: "Custom uniform solutions for the hospitality industry with over 15 years of excellence in Goa.",
    images: ["/twitter-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17044480425"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tracking" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17044480425');
          `}
        </Script>
      </head>
      <body className={`${inter.className} ${garamond.variable}`}>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
          <WhatsAppSticky />
        </AuthProvider>
      </body>
    </html>
  )
}
