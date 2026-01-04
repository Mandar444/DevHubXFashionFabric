# Supabase Database & Storage Setup Guide

This guide will help you set up Supabase PostgreSQL database and storage for your Fashion Fabric application.

## 🗄️ Database Setup

### Step 1: Update Environment Variables

Your `.env` file has been updated with Supabase connection strings. You need to replace `[YOUR-PASSWORD]` with your actual Supabase database password:

```env
# Database - Supabase PostgreSQL
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.hpqtiqghtoslqkgtbqdp.supabase.co:5432/postgres"

# Supabase Storage
NEXT_PUBLIC_SUPABASE_URL="https://hpqtiqghtoslqkgtbqdp.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"
```

**To get these values:**

1. Go to your Supabase project dashboard: https://app.supabase.com
2. Navigate to **Project Settings** > **Database**
3. Copy your database password (the one you set during project creation)
4. Navigate to **Project Settings** > **API**
5. Copy the `anon` key and `service_role` key

### Step 2: Generate Prisma Client

After updating your environment variables, generate the Prisma client:

```powershell
npx prisma generate
```

### Step 3: Run Database Migration

Push your schema to the Supabase database:

```powershell
npx prisma db push
```

Or create and run a migration:

```powershell
npx prisma migrate dev --name init_supabase
```

### Step 4: Verify Database Connection

Check if the connection is working:

```powershell
npx prisma studio
```

This will open Prisma Studio where you can view and manage your database.

## 📦 Storage Setup

### Step 1: Create Storage Buckets in Supabase

1. Go to your Supabase dashboard
2. Navigate to **Storage** in the left sidebar
3. Create two buckets:
   - **Bucket name:** `catalogue-images`
     - **Public bucket:** ✅ Yes (check this option)
   - **Bucket name:** `catalogue-pdfs`
     - **Public bucket:** ✅ Yes (check this option)

### Step 2: Configure Storage Policies

For each bucket, set up storage policies to allow public read access and admin write access:

#### For `catalogue-images` bucket:

**SELECT (Read) Policy:**

```sql
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'catalogue-images' );
```

**INSERT Policy:**

```sql
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'catalogue-images' AND auth.role() = 'authenticated' );
```

#### For `catalogue-pdfs` bucket:

**SELECT (Read) Policy:**

```sql
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'catalogue-pdfs' );
```

**INSERT Policy:**

```sql
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'catalogue-pdfs' AND auth.role() = 'authenticated' );
```

### Step 3: Test Upload

After setting up everything, test the upload functionality:

1. Login to your admin panel: `/admin/login`
2. Go to catalogue upload: `/admin/catalogue-upload`
3. Try uploading a PDF and an image

## 📊 Database Schema

Your application now tracks:

### 1. Downloads (User Activity)

Every time someone downloads a catalogue, we store:

- User name, email, phone
- IP address and browser info
- Timestamp
- Which catalogue was downloaded

### 2. File Uploads (Admin Activity)

Every time an admin uploads a file, we store:

- Original file name
- Storage path in Supabase
- File type (PDF/image)
- File size and MIME type
- Who uploaded it
- Timestamp

### 3. Catalogues

All catalogue information including:

- Title, subtitle, category
- Cover image URL (from Supabase)
- PDF URL (from Supabase)
- Download count
- Publish status

## 🔧 Troubleshooting

### Database Connection Issues

If you get connection errors:

1. **Check your password:** Make sure you replaced `[YOUR-PASSWORD]` with your actual password
2. **Try the pooler connection:** For serverless/Vercel deployment, use the pooler connection:

   ```env
   DATABASE_URL="postgresql://postgres.hpqtiqghtoslqkgtbqdp:[YOUR-PASSWORD]@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres"
   ```

3. **Check IP whitelist:** In Supabase dashboard, make sure your IP is allowed (or allow all IPs for development)

### Storage Upload Issues

If file uploads fail:

1. **Check bucket names:** Ensure buckets are named exactly as `catalogue-images` and `catalogue-pdfs`
2. **Verify API keys:** Make sure `SUPABASE_SERVICE_ROLE_KEY` is correct
3. **Check bucket policies:** Ensure public access is enabled and policies are set correctly

### Migration Issues

If migration fails:

1. **Reset the database:**

   ```powershell
   npx prisma migrate reset
   ```

2. **Or push without migration:**
   ```powershell
   npx prisma db push --force-reset
   ```

## 🚀 Testing the Setup

### 1. Test Database Connection

```powershell
npx prisma studio
```

### 2. Test Admin Upload

- Login as admin
- Upload a test PDF and image
- Check Supabase Storage dashboard to see uploaded files
- Check Prisma Studio to see FileUpload records

### 3. Test Download Tracking

- Go to catalogue page
- Download a catalogue
- Check Prisma Studio to see Download records

## 📝 Next Steps

1. **Seed the database** (optional):

   ```powershell
   node prisma/seed.js
   ```

2. **Deploy to Vercel:**

   - Add all environment variables to Vercel
   - Use the pooler connection string for better performance
   - Vercel will automatically run `npx prisma generate` on deploy

3. **Monitor usage:**
   - Check Supabase dashboard for storage usage
   - Monitor database connection pool usage
   - Review download analytics in admin panel

## 🔐 Security Notes

- Never commit `.env` file to git
- Keep your `service_role` key secret (it has full database access)
- Use the `anon` key for client-side operations only
- Enable Row Level Security (RLS) policies in production
- Regularly backup your database using Supabase dashboard

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
