# How to Get Your Supabase Credentials

## 🔑 Finding Your Database Password

Your database password was set when you first created your Supabase project.

### If you remember your password:

Just use it in the DATABASE_URL:

```
postgresql://postgres:YOUR_PASSWORD_HERE@db.hpqtiqghtoslqkgtbqdp.supabase.co:5432/postgres
```

### If you forgot your password:

1. Go to https://app.supabase.com
2. Select your project
3. Go to **Settings** > **Database**
4. Scroll down to **Reset database password**
5. Enter a new password and save
6. Use this new password in your `.env` file

## 🔑 Finding Your API Keys

### Step-by-Step:

1. Go to https://app.supabase.com
2. Select your project (should be: `hpqtiqghtoslqkgtbqdp`)
3. Click **Settings** (gear icon) in the left sidebar
4. Click **API** in the Settings menu
5. You'll see:

   - **Project URL:** `https://hpqtiqghtoslqkgtbqdp.supabase.co`
   - **anon public key:** A long string starting with `eyJ...`
   - **service_role key:** Another long string starting with `eyJ...`

### Copy these to your `.env` file:

```env
NEXT_PUBLIC_SUPABASE_URL="https://hpqtiqghtoslqkgtbqdp.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey..."
SUPABASE_SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey..."
```

## 🎯 Your Complete `.env` File Should Look Like:

```env
# Database - Supabase PostgreSQL
DATABASE_URL="postgresql://postgres:your_actual_password@db.hpqtiqghtoslqkgtbqdp.supabase.co:5432/postgres"

# Supabase Storage
NEXT_PUBLIC_SUPABASE_URL="https://hpqtiqghtoslqkgtbqdp.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...."
SUPABASE_SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...."

# NextAuth (keep existing)
NEXTAUTH_URL="http://localhost:8080"
NEXTAUTH_SECRET="your-secret-key-change-this-in-production"
```

## ⚠️ Security Warning

- **NEVER** commit your `.env` file to git
- The `service_role` key has full admin access to your database
- Only use `service_role` key on the server-side
- The `anon` key is safe to use on the client-side

## ✅ Next Steps After Getting Credentials

Once you've updated your `.env` file:

```powershell
# 1. Generate Prisma client
npx prisma generate

# 2. Push database schema
npx prisma db push

# 3. Start development server
npm run dev
```

## 🔍 Verify Your Credentials Are Working

Test the database connection:

```powershell
npx prisma studio
```

If it opens successfully, your database credentials are correct!

---

**Still having issues?** Check [SUPABASE-SETUP.md](./SUPABASE-SETUP.md) for troubleshooting.
