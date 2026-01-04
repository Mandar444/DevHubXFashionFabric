# Admin Catalogue Upload Feature - Setup Guide

## 🚀 Quick Start

### 1. Initialize Database

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 2. Seed Admin User

```bash
node prisma/seed.js
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Admin Login

- **URL**: http://localhost:8080/admin/login
- **Email**: admin@fashionfabric.com
- **Password**: admin123

⚠️ **Important**: Change the admin password after first login!

---

## 📁 Project Structure

```
app/
├── admin/
│   ├── login/page.tsx              # Admin login page
│   └── catalogue-upload/page.tsx   # Admin dashboard for catalogue management
├── api/
│   ├── auth/[...nextauth]/route.ts # NextAuth API route
│   ├── catalogue/
│   │   ├── route.ts                # GET all, POST create catalogue
│   │   └── [id]/route.ts           # GET, PUT, DELETE single catalogue
│   └── upload/route.ts             # File upload endpoint
└── catalogue/
    └── downloads/page.tsx          # Public catalogue downloads page

lib/
├── auth.ts                         # NextAuth configuration
└── prisma.ts                       # Prisma client instance

prisma/
├── schema.prisma                   # Database schema
└── seed.js                         # Database seed script

components/
└── auth-provider.tsx               # Session provider wrapper
```

---

## 🔐 Authentication & Authorization

### User Roles

- **admin**: Full access to upload, edit, and delete catalogues
- **user**: View-only access to public catalogue pages

### Protected Routes

- `/admin/*` - Requires admin authentication
- API endpoints:
  - `POST /api/catalogue` - Admin only
  - `PUT /api/catalogue/[id]` - Admin only
  - `DELETE /api/catalogue/[id]` - Admin only
  - `POST /api/upload` - Admin only

---

## 📋 Features

### Admin Dashboard (`/admin/catalogue-upload`)

✅ Upload new catalogues with:

- Catalogue title
- Category selection
- Subtitle (optional)
- PDF file upload
- Cover image upload
- Background color selection

✅ View all existing catalogues
✅ Edit catalogue details
✅ Delete catalogues (with confirmation)
✅ Real-time success/error notifications

### Public Catalogue Page (`/catalogue/downloads`)

✅ Display all published catalogues
✅ Responsive grid layout
✅ Download PDF functionality
✅ No admin controls visible to public users

---

## 🗄️ Database Schema

### User Table

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String   # Hashed with bcryptjs
  name      String?
  role      String   @default("user")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Catalogue Table

```prisma
model Catalogue {
  id          String   @id @default(cuid())
  title       String
  subtitle    String?
  category    String
  coverImage  String
  pdfUrl      String
  color       String   @default("bg-neutral-100")
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  publishedAt DateTime @default(now())
  published   Boolean  @default(true)
}
```

---

## 📤 File Upload

Files are stored locally in the `public` directory:

- **PDFs**: `/public/pdfs/`
- **Images**: `/public/images/catalogue/`

### File Naming Convention

`{timestamp}-{original-filename}`

Example:

- `1704345600000-amoha-catalogue.pdf`
- `1704345600000-amoha-cover.jpg`

---

## 🔧 Environment Variables

Create a `.env` file in the project root:

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL="http://localhost:8080"
NEXTAUTH_SECRET="your-secret-key-change-this-in-production"
```

⚠️ **For production**: Generate a secure secret:

```bash
openssl rand -base64 32
```

---

## 🎨 UI Components Used

- `shadcn/ui` components:

  - Button
  - Input
  - Label
  - Card
  - Select
  - AlertDialog
  - Toaster (sonner)

- Icons from `lucide-react`

---

## 🔒 Security Features

1. **Password Hashing**: Using bcryptjs with salt rounds
2. **Session Management**: JWT-based sessions via NextAuth
3. **API Protection**: Server-side role checks on all admin endpoints
4. **403 Responses**: Unauthorized users receive proper error codes
5. **Client-side Guards**: Protected pages redirect unauthenticated users

---

## 📊 API Endpoints

### Public Endpoints

- `GET /api/catalogue` - Fetch all published catalogues

### Admin-Only Endpoints

- `POST /api/catalogue` - Create new catalogue
- `PUT /api/catalogue/[id]` - Update catalogue
- `DELETE /api/catalogue/[id]` - Delete catalogue
- `POST /api/upload` - Upload files (PDF/image)

---

## 🐛 Troubleshooting

### Database Issues

```bash
# Reset database
npx prisma migrate reset

# Regenerate Prisma client
npx prisma generate
```

### Authentication Issues

- Clear browser cookies
- Check NEXTAUTH_URL matches your development URL
- Verify NEXTAUTH_SECRET is set

### File Upload Issues

- Ensure `/public/pdfs/` directory exists
- Ensure `/public/images/catalogue/` directory exists
- Check file permissions

---

## 🚢 Production Deployment

1. **Set secure environment variables**

   ```env
   NEXTAUTH_SECRET="<secure-random-string>"
   NEXTAUTH_URL="https://yourdomain.com"
   ```

2. **Use production database** (PostgreSQL/MySQL recommended)

   ```env
   DATABASE_URL="postgresql://user:password@host:5432/database"
   ```

3. **Consider cloud storage for files** (Cloudinary/S3)

   - Update `/api/upload` route to use cloud provider
   - Store URLs in database

4. **Run migrations**

   ```bash
   npx prisma migrate deploy
   ```

5. **Seed admin user**
   ```bash
   node prisma/seed.js
   ```

---

## 📝 Usage Instructions

### For Admin:

1. Login at `/admin/login`
2. Navigate to catalogue upload dashboard
3. Fill in catalogue details
4. Upload PDF and cover image
5. Click "Publish Catalogue"
6. Catalogue appears immediately on public page

### For Public Users:

1. Visit `/catalogue/downloads`
2. Browse available catalogues
3. Click "Download PDF" to download

---

## 🎯 Future Enhancements

- [ ] Add bulk upload functionality
- [ ] Add catalogue categories/filtering
- [ ] Add search functionality
- [ ] Add analytics (download tracking)
- [ ] Add multi-language support
- [ ] Add admin user management UI
- [ ] Add catalogue versioning
- [ ] Add scheduled publishing

---

## 📞 Support

For issues or questions, contact the development team.

**Created**: January 2026
**Version**: 1.0.0
