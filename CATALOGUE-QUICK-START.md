# Quick Setup Guide for Catalogue System

## Step 1: Database Setup

Run Prisma migrations to create the necessary tables:

```powershell
npx prisma migrate dev --name add_catalogue_system
npx prisma generate
```

## Step 2: Create Test Catalogue Data

You can create test catalogues through the admin panel or directly via Prisma Studio:

```powershell
npx prisma studio
```

Or create programmatically:

```javascript
// Create catalogue via API or Prisma
const catalogue = await prisma.catalogue.create({
  data: {
    title: "Summer Collection 2026",
    subtitle: "Explore our latest fashion designs",
    category: "Fashion",
    coverImage: "https://example.com/cover.jpg",
    pdfUrl: "https://example.com/catalogue.pdf",
    pageImages: [
      "https://example.com/page1.jpg",
      "https://example.com/page2.jpg",
      // ... more pages
    ],
    published: true,
  },
});
```

## Step 3: Test the Flow

1. Start your development server:

   ```powershell
   npm run dev
   ```

2. Navigate to: `http://localhost:3000/catalogue`

3. Test complete flow:
   - View catalogue grid
   - Click "Download Catalogue"
   - Fill form and verify OTP
   - View catalogue with page-flip

## Step 4: SMS Integration (Production)

For production, integrate a real SMS service:

### Option A: Twilio

1. Install Twilio SDK:

   ```powershell
   npm install twilio
   ```

2. Add environment variables:

   ```env
   TWILIO_ACCOUNT_SID=your_account_sid
   TWILIO_AUTH_TOKEN=your_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_number
   ```

3. Update `send-otp/route.ts`:

   ```typescript
   import twilio from "twilio";

   const client = twilio(
     process.env.TWILIO_ACCOUNT_SID,
     process.env.TWILIO_AUTH_TOKEN
   );

   // In POST handler:
   await client.messages.create({
     body: `Your verification code is: ${otp}`,
     from: process.env.TWILIO_PHONE_NUMBER,
     to: phoneNumber,
   });
   ```

### Option B: AWS SNS

1. Install AWS SDK:

   ```powershell
   npm install @aws-sdk/client-sns
   ```

2. Configure AWS credentials and update send-otp route

## Development Mode

In development, OTP is logged to console and returned in API response.

**Check your terminal/console for:**

```
OTP for +1234567890: 123456
```

## Troubleshooting

### Database Errors

- Ensure `DATABASE_URL` is set in `.env`
- Run `npx prisma generate` after schema changes

### OTP Not Sending

- Check console logs for OTP in development
- Verify SMS service credentials in production

### Images Not Loading

- Ensure Supabase credentials are correct
- Check image URLs are valid
- Verify Next.js Image domains in `next.config.mjs`

### TypeScript Errors

- Run `npx prisma generate` to update types
- Restart TypeScript server in VS Code

## URLs

- Catalogue List: `/catalogue`
- Download Form: `/catalogue/[id]/download`
- Catalogue Viewer: `/catalogue/[id]`

## API Endpoints

- `GET /api/catalogue` - List all catalogues
- `GET /api/catalogue/[id]` - Get single catalogue
- `POST /api/catalogue/send-otp` - Send OTP
- `POST /api/catalogue/verify-otp` - Verify OTP
- `POST /api/catalogue/submit` - Submit form
- `POST /api/catalogue/track-download` - Track download

## Next Steps

1. ✅ Database setup
2. ✅ Create test catalogues
3. ✅ Test user flow
4. 🔄 Integrate SMS service
5. 🔄 Deploy to production

---

Need help? Check [CATALOGUE-SYSTEM.md](./CATALOGUE-SYSTEM.md) for complete documentation.
