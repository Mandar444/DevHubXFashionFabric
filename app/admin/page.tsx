"use client"

import { useEffect } from "react"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { KeyRound, FileText, LogOut } from "lucide-react"

export default function AdminPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login")
    }
  }, [status, router])

  const handleNavigation = (path: string) => {
    if (!session) {
      router.push("/admin/login")
    } else {
      router.push(path)
    }
  }

  if (status === "loading") {
    return (
      <div className="container mx-auto py-10 flex justify-center items-center min-h-[60vh]">
        <p className="text-lg">Loading...</p>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="container mx-auto py-4 px-4 md:py-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-800">Admin Dashboard</h1>
        <div className="flex flex-wrap gap-2 md:gap-3 w-full sm:w-auto">
          <Button 
            variant="outline" 
            className="gap-2 flex-1 sm:flex-none"
            onClick={() => handleNavigation("/admin/change-password")}
          >
            <KeyRound className="h-4 w-4" />
            <span className="hidden sm:inline">Change Password</span>
            <span className="sm:hidden">Password</span>
          </Button>
          <Button 
            variant="destructive" 
            className="gap-2 flex-1 sm:flex-none"
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
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
            <Button 
              className="w-full"
              onClick={() => handleNavigation("/admin/catalogue-upload")}
            >
              Go to Catalogue Upload
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
            <Button 
              className="w-full"
              onClick={() => handleNavigation("/admin/downloads")}
            >
              View Downloads
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
            <Button 
              className="w-full"
              onClick={() => handleNavigation("/admin/catalogue-submissions")}
            >
              View Submissions
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Blog Management
            </CardTitle>
            <CardDescription>
              Create and manage blog posts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              className="w-full"
              onClick={() => handleNavigation("/admin/blog-management")}
            >
              Manage Blog Posts
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
