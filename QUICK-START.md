# 🎉 Admin Catalogue Upload Feature - Quick Start

## ✅ Setup Complete!

Your admin catalogue upload system is now fully configured and ready to use.

### 🔐 Admin Credentials

- **Login URL**: http://localhost:8080/admin/login
- **Email**: `admin@fashionfabric.com`
- **Password**: `FashionAdmin@2026!` (default - **change immediately after first login**)

⚠️ **IMPORTANT SECURITY UPDATE**:

- The system now requires strong passwords (12+ chars, uppercase, lowercase, number, special char)
- Change your password at: http://localhost:8080/admin/change-password
- See [ADMIN-PASSWORD-SECURITY.md](./ADMIN-PASSWORD-SECURITY.md) for details

---

## 🚀 Getting Started

### 1. Start the Development Server

```bash
npm run dev
```

The server will start at: http://localhost:8080

### 2. Access Admin Dashboard

1. Navigate to: http://localhost:8080/admin/login
2. Login with the credentials above
3. You'll be redirected to: http://localhost:8080/admin/catalogue-upload

### 3. Upload Your First Catalogue

1. Fill in the catalogue details:

   - **Title**: e.g., "AMOHA Collection"
   - **Category**: Select from dropdown
   - **Subtitle**: Optional description
   - **Background Color**: Choose card color
   - **PDF File**: Upload the catalogue PDF
   - **Cover Image**: Upload the cover image

2. Click **"Publish Catalogue"**

3. The catalogue will immediately appear on: http://localhost:8080/catalogue/downloads

---

## 📋 Features Overview

### ✅ Admin Features (Protected Routes)

- ✨ Upload new catalogues
- ✏️ Edit existing catalogues
- 🗑️ Delete catalogues (with confirmation)
- 📊 View all catalogues in dashboard
- 🔐 Secure authentication

### ✅ Public Features

- 👀 View all published catalogues
- ⬇️ Download catalogue PDFs
- 📱 Responsive design
- 🎨 Clean, professional UI

---

## 🗂️ File Structure

```
app/
├── admin/
│   ├── login/               → Admin login page
│   └── catalogue-upload/    → Admin dashboard
├── api/
│   ├── auth/[...nextauth]/  → NextAuth API
│   ├── catalogue/           → Catalogue CRUD APIs
│   │   ├── route.ts        → GET all, POST create
│   │   └── [id]/route.ts   → GET, PUT, DELETE single
│   └── upload/              → File upload API
└── catalogue/
    └── downloads/           → Public catalogue page

prisma/
├── schema.prisma            → Database schema
├── seed.js                  → Admin user seed script
└── dev.db                   → SQLite database (auto-created)

public/
├── pdfs/                    → Uploaded PDF files
└── images/
    └── catalogue/           → Uploaded cover images
```

---

## 🔒 Security Features

✅ **Password Hashing**: bcryptjs with secure salt rounds  
✅ **JWT Sessions**: Secure token-based authentication  
✅ **Role-Based Access**: Admin-only routes and APIs  
✅ **403 Protection**: Unauthorized users blocked at API level  
✅ **Client Guards**: Automatic redirect for non-admin users

---

## 🎯 API Endpoints

### Public

- `GET /api/catalogue` - Fetch all published catalogues

### Admin Only (Requires Authentication)

- `POST /api/catalogue` - Create new catalogue
- `PUT /api/catalogue/[id]` - Update catalogue
- `DELETE /api/catalogue/[id]` - Delete catalogue
- `POST /api/upload` - Upload files (PDF/images)

---

## 🐛 Troubleshooting

### Can't login?

- Verify the database was created: Check for `prisma/dev.db`
- Re-run seed script: `node prisma/seed.js`
- Clear browser cookies and try again

### Files not uploading?

- Check directories exist:
  - `public/pdfs/`
  - `public/images/catalogue/`
- Check file permissions

### Database issues?

```bash
# Reset database
npx prisma migrate reset

# Regenerate Prisma client
npx prisma generate

# Re-seed admin user
node prisma/seed.js
```

---

## 📱 Usage Flow

### Admin Workflow:

1. Login → Dashboard
2. Upload catalogue with details
3. Catalogue published instantly
4. Edit/Delete as needed

### Public User Workflow:

1. Visit catalogue page
2. Browse available catalogues
3. Download PDFs

---

## 🎨 Customization

### Add More Categories

Edit the `categories` array in:

- [app/admin/catalogue-upload/page.tsx](app/admin/catalogue-upload/page.tsx#L234)

### Change Color Options

Edit the `colorOptions` array in:

- [app/admin/catalogue-upload/page.tsx](app/admin/catalogue-upload/page.tsx#L251)

### Modify Upload Directory

Edit the file upload API:

- [app/api/upload/route.ts](app/api/upload/route.ts)

---

## 🚢 Production Deployment

Before deploying to production:

1. **Update Environment Variables**

   ```env
   NEXTAUTH_URL="https://yourdomain.com"
   NEXTAUTH_SECRET="<generate-secure-random-string>"
   DATABASE_URL="<production-database-url>"
   ```

2. **Use Production Database**

   - Recommended: PostgreSQL or MySQL
   - Update `schema.prisma` datasource

3. **Consider Cloud Storage**

   - Cloudinary, AWS S3, or similar
   - Update `/api/upload` route

4. **Run Migrations**

   ```bash
   npx prisma migrate deploy
   node prisma/seed.js
   ```

5. **Change Admin Password Immediately**

---

## 📚 Documentation

For detailed documentation, see: [ADMIN-CATALOGUE-SETUP.md](ADMIN-CATALOGUE-SETUP.md)

---

## ✨ Success!

Your admin catalogue upload system is ready. Happy uploading! 🎊

**Need help?** Check the troubleshooting section or review the detailed setup guide.
