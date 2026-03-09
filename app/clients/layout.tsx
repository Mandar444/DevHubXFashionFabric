import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "V11: Our Prestigious Clients | Fashion Fabric",
  description: "Trusted by India's biggest brands in hospitality, corporate, and healthcare. India's #1 uniform choice for Marriott, Taj, Hyatt and more.",
  alternates: {
    canonical: 'https://fashionfabric.info/clients',
  },
}

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
