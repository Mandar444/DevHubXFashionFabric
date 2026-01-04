"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { toast } from "sonner"
import { Loader2, Trash2, Edit, LogOut, Download as DownloadIcon, TrendingUp, Eye, BookOpen } from "lucide-react"
import { signOut } from "next-auth/react"
import Image from "next/image"

interface Catalogue {
  id: string
  title: string
  subtitle: string
  category: string
  coverImage: string
  pdfUrl: string
  color: string
  published: boolean
  _count?: {
    downloads: number
  }
}

interface Download {
  id: string
  userName: string | null
  userEmail: string | null
  userPhone: string | null
  ipAddress: string | null
  downloadedAt: string
  catalogue: {
    title: string
    category: string
  }
}

export default function AdminCatalogueUploadPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [catalogues, setCatalogues] = useState<Catalogue[]>([])
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [viewDownloadsId, setViewDownloadsId] = useState<string | null>(null)
  const [downloads, setDownloads] = useState<Download[]>([])
  const [downloadCount, setDownloadCount] = useState(0)
  const [totalDownloads, setTotalDownloads] = useState(0)

  // Form state
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [category, setCategory] = useState("")
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [coverFile, setCoverFile] = useState<File | null>(null)
  const [color, setColor] = useState("bg-neutral-100")
  const [uploadingPdf, setUploadingPdf] = useState(false)
  const [uploadingCover, setUploadingCover] = useState(false)

  // Redirect if not authenticated or not admin
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login")
    } else if (status === "authenticated" && (session?.user as any)?.role !== "admin") {
      toast.error("Unauthorized - Admin access required")
      router.push("/")
    }
  }, [status, session, router])

  // Fetch catalogues
  const fetchCatalogues = async () => {
    try {
      const response = await fetch("/api/catalogue/downloads")
      if (response.ok) {
        const data = await response.json()
        setCatalogues(data.catalogues)
        setTotalDownloads(data.totalDownloads)
      }
    } catch (error) {
      console.error("Error fetching catalogues:", error)
    }
  }

  const fetchCatalogueDownloads = async (catalogueId: string) => {
    try {
      const response = await fetch(`/api/catalogue/${catalogueId}/downloads`)
      if (response.ok) {
        const data = await response.json()
        setDownloads(data.downloads)
        setDownloadCount(data.count)
      }
    } catch (error) {
      console.error("Error fetching downloads:", error)
      toast.error("Failed to load download details")
    }
  }

  const handleViewDownloads = async (catalogueId: string) => {
    setViewDownloadsId(catalogueId)
    await fetchCatalogueDownloads(catalogueId)
  }

  useEffect(() => {
    if (status === "authenticated" && (session?.user as any)?.role === "admin") {
      fetchCatalogues()
    }
  }, [status, session])

  const uploadFile = async (file: File, type: "pdf" | "image") => {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("type", type)

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    })

    if (!response.ok) {
      throw new Error("Upload failed")
    }

    const data = await response.json()
    return data.url
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Upload files
      let pdfUrl = ""
      let coverImageUrl = ""
      let catalogueId = editingId

      if (!editingId) {
        // New catalogue - files are required
        if (!pdfFile || !coverFile) {
          toast.error("Please upload both PDF and cover image")
          setIsLoading(false)
          return
        }

        setUploadingPdf(true)
        pdfUrl = await uploadFile(pdfFile, "pdf")
        setUploadingPdf(false)

        setUploadingCover(true)
        coverImageUrl = await uploadFile(coverFile, "image")
        setUploadingCover(false)
      } else {
        // Editing - files are optional
        if (pdfFile) {
          setUploadingPdf(true)
          pdfUrl = await uploadFile(pdfFile, "pdf")
          setUploadingPdf(false)
        }

        if (coverFile) {
          setUploadingCover(true)
          coverImageUrl = await uploadFile(coverFile, "image")
          setUploadingCover(false)
        }
      }

      // Create or update catalogue
      const catalogueData = {
        title,
        subtitle,
        category,
        ...(pdfUrl && { pdfUrl }),
        ...(coverImageUrl && { coverImage: coverImageUrl }),
        color,
      }

      const url = editingId ? `/api/catalogue/${editingId}` : "/api/catalogue"
      const method = editingId ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(catalogueData),
      })

      if (!response.ok) {
        throw new Error("Failed to save catalogue")
      }

      const savedCatalogue = await response.json()
      catalogueId = savedCatalogue.id

      // If a new PDF was uploaded, convert it to images for page flip
      if (pdfUrl && catalogueId) {
        toast.info("Converting PDF pages for flip view...")
        
        try {
          const convertResponse = await fetch("/api/catalogue/convert-pdf", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              pdfUrl: pdfUrl,
              catalogueId: catalogueId,
            }),
          })

          if (convertResponse.ok) {
            const convertData = await convertResponse.json()
            toast.success(`PDF converted: ${convertData.numPages} pages ready for flip view`)
          } else {
            console.error("PDF conversion failed")
            toast.warning("Catalogue saved but page flip conversion failed")
          }
        } catch (convertError) {
          console.error("Error converting PDF:", convertError)
          toast.warning("Catalogue saved but page flip conversion failed")
        }
      }

      toast.success(editingId ? "Catalogue updated successfully!" : "Catalogue created successfully!")
      
      // Reset form
      setTitle("")
      setSubtitle("")
      setCategory("")
      setPdfFile(null)
      setCoverFile(null)
      setColor("bg-neutral-100")
      setEditingId(null)

      // Refresh catalogues
      fetchCatalogues()
    } catch (error) {
      console.error("Error saving catalogue:", error)
      toast.error("Failed to save catalogue")
    } finally {
      setIsLoading(false)
      setUploadingPdf(false)
      setUploadingCover(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/catalogue/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete catalogue")
      }

      toast.success("Catalogue deleted successfully!")
      fetchCatalogues()
    } catch (error) {
      console.error("Error deleting catalogue:", error)
      toast.error("Failed to delete catalogue")
    } finally {
      setDeleteId(null)
    }
  }

  const handleEdit = (catalogue: Catalogue) => {
    setEditingId(catalogue.id)
    setTitle(catalogue.title)
    setSubtitle(catalogue.subtitle || "")
    setCategory(catalogue.category)
    setColor(catalogue.color)
    // Scroll to form
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setTitle("")
    setSubtitle("")
    setCategory("")
    setPdfFile(null)
    setCoverFile(null)
    setColor("bg-neutral-100")
  }

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" })
  }

  // Show loading while checking authentication
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  // Only render if authenticated and admin
  if (status !== "authenticated" || (session?.user as any)?.role !== "admin") {
    return null
  }

  const categories = [
    "Air Hostess Uniform",
    "Bar Tender Uniform",
    "Bow Tie",
    "Casino Uniform",
    "Catering Uniforms",
    "Chef Accessories",
    "Chef Apron",
    "Chef Coats",
    "Corporate Wear Suit",
    "Doorman Uniforms",
    "Driver Uniforms",
    "F&B Uniforms",
    "Front Office Uniforms",
    "Hospital Uniforms",
    "Security Uniform",
    "Housekeeping Uniforms",
    "Lab Coats",
    "Polo T-shirt",
    "School Uniform",
    "Spa Uniforms",
    "Tie",
    "Trousers",
    "Round Neck T-shirt",
    "Formal Shoes",
  ]

  const colorOptions = [
    { value: "bg-neutral-100", label: "Neutral" },
    { value: "bg-amber-50", label: "Amber" },
    { value: "bg-blue-100", label: "Blue" },
    { value: "bg-green-100", label: "Green" },
    { value: "bg-orange-50", label: "Orange" },
    { value: "bg-purple-50", label: "Purple" },
  ]

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Catalogue Management</h1>
            <p className="text-neutral-600 mt-1">
              Upload and manage catalogue PDFs • Total Downloads: <span className="font-semibold text-amber-700">{totalDownloads}</span>
            </p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Upload Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{editingId ? "Edit Catalogue" : "Upload New Catalogue"}</CardTitle>
            <CardDescription>
              {editingId ? "Update catalogue details" : "Add a new catalogue to your collection"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Catalogue Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., AMOHA Collection"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select value={category} onValueChange={setCategory} required disabled={isLoading}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="subtitle">Subtitle</Label>
                  <Input
                    id="subtitle"
                    placeholder="e.g., Uniform Designs by Rohit & Abhishek Kamra"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="color">Card Background Color</Label>
                  <Select value={color} onValueChange={setColor} disabled={isLoading}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {colorOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pdf">PDF File {!editingId && "*"}</Label>
                  <Input
                    id="pdf"
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
                    disabled={isLoading}
                    required={!editingId}
                  />
                  {uploadingPdf && (
                    <p className="text-sm text-neutral-500">Uploading PDF...</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cover">Cover Image {!editingId && "*"}</Label>
                  <Input
                    id="cover"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setCoverFile(e.target.files?.[0] || null)}
                    disabled={isLoading}
                    required={!editingId}
                  />
                  {uploadingCover && (
                    <p className="text-sm text-neutral-500">Uploading image...</p>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="bg-amber-700 hover:bg-amber-800"
                  disabled={isLoading || uploadingPdf || uploadingCover}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {uploadingPdf ? "Uploading PDF..." : uploadingCover ? "Uploading Image..." : "Saving..."}
                    </>
                  ) : editingId ? (
                    "Update Catalogue"
                  ) : (
                    "Publish Catalogue"
                  )}
                </Button>
                {editingId && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancelEdit}
                    disabled={isLoading}
                  >
                    Cancel Edit
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Existing Catalogues */}
        <Card>
          <CardHeader>
            <CardTitle>Existing Catalogues</CardTitle>
            <CardDescription>
              Manage your published catalogues
            </CardDescription>
          </CardHeader>
          <CardContent>
            {catalogues.length === 0 ? (
              <p className="text-center text-neutral-500 py-8">
                No catalogues yet. Upload your first one above!
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catalogues.map((catalogue) => (
                  <div
                    key={catalogue.id}
                    className={`${catalogue.color} rounded-lg overflow-hidden border-2 border-neutral-200 shadow-sm`}
                  >
                    <div className="aspect-[3/4] relative">
                      <Image
                        src={catalogue.coverImage}
                        alt={catalogue.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">{catalogue.title}</h3>
                      <p className="text-sm text-neutral-600 mb-2">{catalogue.category}</p>
                      {catalogue.subtitle && (
                        <p className="text-xs text-neutral-500 mb-2 line-clamp-2">
                          {catalogue.subtitle}
                        </p>
                      )}
                      {/* Download Stats */}
                      <div className="flex items-center gap-2 mb-3 text-amber-700 bg-amber-50 px-2 py-1 rounded text-xs font-medium">
                        <DownloadIcon className="h-3 w-3" />
                        <span>{catalogue._count?.downloads || 0} downloads</span>
                      </div>
                      <div className="flex gap-2 mb-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() => handleEdit(catalogue)}
                        >
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={() => setDeleteId(catalogue.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="flex gap-2 mb-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() => window.open(`/catalogue/flip/${catalogue.id}`, '_blank')}
                        >
                          <BookOpen className="h-3 w-3 mr-1" />
                          Flip Book
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() => handleViewDownloads(catalogue.id)}
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the catalogue
              from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && handleDelete(deleteId)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Download Details Dialog */}
      <AlertDialog open={!!viewDownloadsId} onOpenChange={() => setViewDownloadsId(null)}>
        <AlertDialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-amber-700" />
              Download Details
            </AlertDialogTitle>
            <AlertDialogDescription>
              Total downloads: <span className="font-semibold text-amber-700">{downloadCount}</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex-1 overflow-y-auto">
            {downloads.length === 0 ? (
              <p className="text-center text-neutral-500 py-8">
                No downloads yet for this catalogue.
              </p>
            ) : (
              <div className="space-y-3">
                {downloads.map((download) => (
                  <div
                    key={download.id}
                    className="border border-neutral-200 rounded-lg p-4 bg-neutral-50"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-neutral-500 text-xs">Downloaded At</p>
                        <p className="font-medium">
                          {new Date(download.downloadedAt).toLocaleString()}
                        </p>
                      </div>
                      {download.userName && (
                        <div>
                          <p className="text-neutral-500 text-xs">Name</p>
                          <p className="font-medium">{download.userName}</p>
                        </div>
                      )}
                      {download.userEmail && (
                        <div>
                          <p className="text-neutral-500 text-xs">Email</p>
                          <p className="font-medium">{download.userEmail}</p>
                        </div>
                      )}
                      {download.userPhone && (
                        <div>
                          <p className="text-neutral-500 text-xs">Phone</p>
                          <p className="font-medium">{download.userPhone}</p>
                        </div>
                      )}
                      {download.ipAddress && (
                        <div>
                          <p className="text-neutral-500 text-xs">IP Address</p>
                          <p className="font-medium text-xs">{download.ipAddress}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
