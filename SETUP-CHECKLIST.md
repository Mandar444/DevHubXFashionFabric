# ✅ Setup Checklist - Supabase Migration

Use this checklist to ensure everything is configured correctly.

## 📋 Pre-Setup Checklist

- [ ] I have access to my Supabase project dashboard
- [ ] I know my Supabase project ID: `hpqtiqghtoslqkgtbqdp`
- [ ] I have my database password (or can reset it)

## 🔑 Step 1: Get Your Credentials (5 minutes)

Follow [GET-SUPABASE-CREDENTIALS.md](GET-SUPABASE-CREDENTIALS.md) and fill in:

- [ ] Database password retrieved
- [ ] SUPABASE_URL copied: `https://hpqtiqghtoslqkgtbqdp.supabase.co`
- [ ] ANON_KEY copied (starts with `eyJ...`)
- [ ] SERVICE_ROLE_KEY copied (starts with `eyJ...`)

## ✏️ Step 2: Update .env File (2 minutes)

Edit the `.env` file and replace ALL placeholders:

```env
DATABASE_URL="postgresql://postgres:YOUR_REAL_PASSWORD_HERE@db.hpqtiqghtoslqkgtbqdp.supabase.co:5432/postgres"

NEXT_PUBLIC_SUPABASE_URL="https://hpqtiqghtoslqkgtbqdp.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="paste_your_actual_anon_key_here"
SUPABASE_SERVICE_ROLE_KEY="paste_your_actual_service_role_key_here"
```

- [ ] DATABASE_URL updated with real password
- [ ] NEXT_PUBLIC_SUPABASE_URL is correct
- [ ] NEXT_PUBLIC_SUPABASE_ANON_KEY pasted
- [ ] SUPABASE_SERVICE_ROLE_KEY pasted
- [ ] No `[YOUR-PASSWORD]` placeholders remain
- [ ] File saved

## 🗄️ Step 3: Setup Database (3 minutes)

Run these commands in PowerShell:

```powershell
cd "d:\freelancing projects\fashion-fabric-main\fashion-fabric-main"

# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push
```

**Check:**

- [ ] `npx prisma generate` completed without errors
- [ ] `npx prisma db push` completed without errors
- [ ] No connection errors appeared

**Optional - Verify connection:**

```powershell
npx prisma studio
```

- [ ] Prisma Studio opened successfully (http://localhost:5555)
- [ ] Can see tables: User, Catalogue, Download, FileUpload

## 📦 Step 4: Create Storage Buckets (3 minutes)

Go to Supabase Dashboard:

1. Navigate to **Storage** in left sidebar
2. Click **New bucket**

**Create Bucket 1:**

- [ ] Bucket name: `catalogue-images`
- [ ] Public bucket: ✅ CHECKED
- [ ] Created successfully

**Create Bucket 2:**

- [ ] Bucket name: `catalogue-pdfs`
- [ ] Public bucket: ✅ CHECKED
- [ ] Created successfully

## 🔐 Step 5: Set Storage Policies (5 minutes)

For each bucket, add these policies:

### For `catalogue-images`:

Go to Storage > catalogue-images > Policies

**Add SELECT Policy:**

- [ ] Policy name: "Public Access"
- [ ] Policy definition: `bucket_id = 'catalogue-images'`
- [ ] Operation: SELECT
- [ ] Saved successfully

**Add INSERT Policy:**

- [ ] Policy name: "Authenticated users can upload"
- [ ] Policy definition: `bucket_id = 'catalogue-images' AND auth.role() = 'authenticated'`
- [ ] Operation: INSERT
- [ ] Saved successfully

### For `catalogue-pdfs`:

Go to Storage > catalogue-pdfs > Policies

**Add SELECT Policy:**

- [ ] Policy name: "Public Access"
- [ ] Policy definition: `bucket_id = 'catalogue-pdfs'`
- [ ] Operation: SELECT
- [ ] Saved successfully

**Add INSERT Policy:**

- [ ] Policy name: "Authenticated users can upload"
- [ ] Policy definition: `bucket_id = 'catalogue-pdfs' AND auth.role() = 'authenticated'`
- [ ] Operation: INSERT
- [ ] Saved successfully

## 🚀 Step 6: Start Application (2 minutes)

```powershell
npm run dev
```

- [ ] Application started successfully
- [ ] No errors in console
- [ ] Can access: http://localhost:8080

## 🧪 Step 7: Test Everything (10 minutes)

### Test 1: Admin Login

- [ ] Go to http://localhost:8080/admin/login
- [ ] Can login successfully
- [ ] Redirected to admin panel

### Test 2: File Upload

- [ ] Go to http://localhost:8080/admin/catalogue-upload
- [ ] Upload a test image (cover)
- [ ] Upload a test PDF
- [ ] Create catalogue successfully
- [ ] No errors during upload

### Test 3: Verify Storage

- [ ] Go to Supabase Dashboard > Storage > catalogue-images
- [ ] Can see uploaded image
- [ ] Go to Storage > catalogue-pdfs
- [ ] Can see uploaded PDF

### Test 4: Verify Database

- [ ] Run `npx prisma studio`
- [ ] Go to FileUpload table
- [ ] Can see 2 records (image + PDF)
- [ ] Go to Catalogue table
- [ ] Can see the created catalogue

### Test 5: Download Tracking

- [ ] Go to http://localhost:8080/catalogue
- [ ] Find a catalogue
- [ ] Click download (may need to enter details)
- [ ] Check Prisma Studio > Download table
- [ ] Can see download record with user info

### Test 6: Admin View Downloads

- [ ] Go to admin catalogue upload page
- [ ] Click "View Downloads" on a catalogue
- [ ] Can see download statistics
- [ ] Download count is correct

## ✅ Final Verification

- [ ] All tests passed
- [ ] Files are storing in Supabase (not local public folder)
- [ ] Downloads are tracked in database
- [ ] Admin uploads are tracked in database
- [ ] No console errors
- [ ] Application is working smoothly

## 🎉 Success!

If all items are checked, your migration to Supabase is complete!

## 🚨 Troubleshooting

If you encounter issues, check:

1. **Database connection failed:**

   - Verify password in DATABASE_URL is correct
   - Try the pooler connection URL
   - Check Supabase dashboard > Settings > Database > Connection

2. **Upload failed:**

   - Verify storage buckets exist
   - Check bucket names are exact: `catalogue-images`, `catalogue-pdfs`
   - Verify buckets are public
   - Check SUPABASE_SERVICE_ROLE_KEY is correct

3. **Authentication failed:**

   - Verify NEXT_PUBLIC_SUPABASE_ANON_KEY is correct
   - Check Supabase project is active

4. **Still having issues:**
   - See [SUPABASE-SETUP.md](SUPABASE-SETUP.md) for detailed troubleshooting
   - Check browser console for errors
   - Check terminal console for errors

## 📚 Additional Resources

- **Quick Reference:** [QUICK-START-SUPABASE.md](QUICK-START-SUPABASE.md)
- **Full Setup Guide:** [SUPABASE-SETUP.md](SUPABASE-SETUP.md)
- **Get Credentials:** [GET-SUPABASE-CREDENTIALS.md](GET-SUPABASE-CREDENTIALS.md)
- **Implementation Details:** [IMPLEMENTATION-COMPLETE.md](IMPLEMENTATION-COMPLETE.md)

---

**Time to complete:** ~30 minutes
**Difficulty:** Moderate
**Status:** Ready to start!
