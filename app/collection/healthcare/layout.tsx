import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Medical Scrubs & Healthcare Uniforms | Fashion Fabric India",
  description: "Durable, hygienic, and comfortable healthcare uniforms. Custom medical scrubs, lab coats, and nursing uniforms designed for long shifts and high standards.",
  alternates: {
    canonical: 'https://fashionfabric.info/collection/healthcare',
  },
}

export default function HealthcareLayout({ children }: { children: React.ReactNode }) {
  return children
}
