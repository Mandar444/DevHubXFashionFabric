import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Corporate Uniforms & Office Wear | Fashion Fabric India",
  description: "Bespoke corporate uniforms for professional teams. Sharp tailoring, comfortable fabrics, and custom branding for office and client-facing roles.",
  alternates: {
    canonical: 'https://fashionfabric.info/collection/corporate',
  },
}

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  return children
}
