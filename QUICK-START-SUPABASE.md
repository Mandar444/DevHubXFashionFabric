# Quick Start - Supabase Migration

## ⚡ Immediate Action Required

### 1. Update `.env` file with your credentials:

Replace the placeholders in your `.env` file:

```env
DATABASE_URL="postgresql://postgres:YOUR_ACTUAL_PASSWORD@db.hpqtiqghtoslqkgtbqdp.supabase.co:5432/postgres"

NEXT_PUBLIC_SUPABASE_URL="https://hpqtiqghtoslqkgtbqdp.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your_actual_anon_key"
SUPABASE_SERVICE_ROLE_KEY="your_actual_service_role_key"
```

**Where to find these:**

- Go to https://app.supabase.com
- Open your project
- Settings > Database (for password)
- Settings > API (for keys)

### 2. Run these commands in order:

```powershell
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Open Prisma Studio to verify (optional)
npx prisma studio
```

### 3. Create Storage Buckets in Supabase:

Go to Supabase dashboard > Storage > Create:

1. Bucket: `catalogue-images` (make public ✅)
2. Bucket: `catalogue-pdfs` (make public ✅)

### 4. Start your development server:

```powershell
npm run dev
```

## ✅ What's Been Updated

✅ Prisma schema migrated from SQLite to PostgreSQL
✅ File uploads now use Supabase Storage (instead of local filesystem)
✅ Download tracking saves to PostgreSQL database
✅ Admin uploads tracked in `FileUpload` table
✅ Supabase client library installed
✅ Upload API updated to use Supabase

## 📊 Database Models

Your app now has these tables:

- **User** - Admin/user accounts
- **Catalogue** - Catalogue items
- **Download** - Download tracking (who downloaded what, when)
- **FileUpload** - Admin upload tracking (who uploaded what files)

## 🔍 Verify Everything Works

1. **Test admin login:** `http://localhost:8080/admin/login`
2. **Upload a catalogue:** Upload image + PDF
3. **Check Supabase Storage:** Files should appear in buckets
4. **Download a catalogue:** Test download tracking
5. **Check database:** Use Prisma Studio to see records

## 📖 Full Documentation

See [SUPABASE-SETUP.md](./SUPABASE-SETUP.md) for detailed instructions and troubleshooting.

---

**Need help?** Check the troubleshooting section in SUPABASE-SETUP.md
