import { createClient } from "@supabase/supabase-js"

const getSupabaseConfig = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  return { url, serviceRoleKey, anonKey }
}

// Create a Supabase client with service role key for server-side operations
// This is now a getter to avoid build-time errors when ENV vars are missing
export const getSupabaseAdmin = () => {
  const { url, serviceRoleKey } = getSupabaseConfig()
  
  if (!url || !serviceRoleKey) {
    // During build time, return a dummy or handle it
    if (process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
        console.warn("Supabase credentials missing during build - this is expected if using static generation")
    }
    return null
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}

// Global instance for reuse (server-side only)
let supabaseAdminInstance: any = null
const getAdmin = () => {
    if (!supabaseAdminInstance) {
        supabaseAdminInstance = getSupabaseAdmin()
    }
    return supabaseAdminInstance
}

// Create a Supabase client for client-side operations
export const createSupabaseClient = () => {
  const { url, anonKey } = getSupabaseConfig()
  if (!url || !anonKey) return null
  return createClient(url, anonKey)
}

/**
 * Upload a file to Supabase Storage
 * @param file - File to upload
 * @param bucket - Storage bucket name (e.g., "catalogue-images", "catalogue-pdfs")
 * @param path - Path within the bucket
 * @returns Public URL of the uploaded file
 */
export async function uploadToSupabase(
  file: File | Buffer,
  bucket: string,
  path: string
): Promise<string> {
  try {
    const { url, serviceRoleKey } = getSupabaseConfig()
    const supabase = getAdmin()

    // Validate configuration
    if (!url || !serviceRoleKey || !supabase) {
      throw new Error("Supabase credentials are not configured or failed to initialize.")
    }

    const fileBuffer = file instanceof File
      ? Buffer.from(await file.arrayBuffer())
      : file

    console.log(`Uploading to Supabase: bucket="${bucket}", path="${path}"`)

    // Upload file to Supabase Storage
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, fileBuffer, {
        contentType: file instanceof File ? file.type : 'application/octet-stream',
        upsert: true
      })

    if (error) {
      console.error("Supabase upload error:", error)

      // Provide helpful error messages
      if (error.message.includes("Bucket not found")) {
        throw new Error(`Storage bucket "${bucket}" does not exist. Please create it in Supabase dashboard.`)
      }
      if (error.message.includes("Access denied") || error.message.includes("permission")) {
        throw new Error(`Access denied to bucket "${bucket}". Check your storage policies.`)
      }

      throw new Error(`Upload failed: ${error.message}`)
    }

    console.log("Upload successful, getting public URL...")

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(data.path)

    console.log(`File uploaded successfully: ${publicUrl}`)

    return publicUrl
  } catch (error: any) {
    console.error("Error uploading to Supabase:", error)
    throw error
  }
}

/**
 * Delete a file from Supabase Storage
 * @param bucket - Storage bucket name
 * @param path - Path of the file to delete
 */
export async function deleteFromSupabase(
  bucket: string,
  path: string
): Promise<void> {
  try {
    const supabase = getAdmin()
    if (!supabase) throw new Error("Supabase client not initialized")

    const { error } = await supabase.storage
      .from(bucket)
      .remove([path])

    if (error) {
      console.error("Supabase delete error:", error)
      throw new Error(`Delete failed: ${error.message}`)
    }
  } catch (error) {
    console.error("Error deleting from Supabase:", error)
    throw error
  }
}

/**
 * List files in a Supabase Storage bucket
 * @param bucket - Storage bucket name
 * @param path - Path within the bucket (optional)
 */
export async function listSupabaseFiles(
  bucket: string,
  path?: string
) {
  try {
    const supabase = getAdmin()
    if (!supabase) throw new Error("Supabase client not initialized")

    const { data, error } = await supabase.storage
      .from(bucket)
      .list(path, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'created_at', order: 'desc' }
      })

    if (error) {
      console.error("Supabase list error:", error)
      throw new Error(`List failed: ${error.message}`)
    }

    return data
  } catch (error) {
    console.error("Error listing Supabase files:", error)
    throw error
  }
}
