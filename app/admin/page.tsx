"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { KeyRound } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button asChild variant="outline" className="gap-2">
          <Link href="/admin/change-password">
            <KeyRound className="h-4 w-4" />
            Change Password
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Catalogue Upload</CardTitle>
            <CardDescription>
              Upload and manage catalogue files
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/admin/catalogue-upload">Go to Catalogue Upload</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Download Records</CardTitle>
            <CardDescription>
              View all users who downloaded catalogues
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/admin/downloads">View Downloads</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Catalogue Submissions</CardTitle>
            <CardDescription>
              View all catalogue form submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/admin/catalogue-submissions">View Submissions</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
