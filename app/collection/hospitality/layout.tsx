import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hospitality & Hotel Uniform Manufacturer | Fashion Fabric India",
  description: "Bespoke uniform solutions for luxury hotels. Custom attire for Front Desk, Housekeeping, Chefs, and Waitstaff. Trusted by Marriott, Taj, and Hyatt.",
  alternates: {
    canonical: 'https://fashionfabric.info/collection/hospitality',
  },
}

export default function HospitalityLayout({ children }: { children: React.ReactNode }) {
  return children
}
