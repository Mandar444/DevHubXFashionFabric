import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Airline & Cabin Crew Uniform Manufacturer | Fashion Fabric India",
  description: "Elegant and durable airline uniforms for cabin crew and ground staff. Professional attire designed for performance at 30,000 feet.",
  alternates: {
    canonical: 'https://fashionfabric.info/collection/airline',
  },
}

export default function AirlineLayout({ children }: { children: React.ReactNode }) {
  return children
}
