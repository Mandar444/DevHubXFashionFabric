# Catalogue Submission Database Setup

## Overview

This document explains the database implementation for storing catalogue form submissions.

## Database Schema

### CatalogueSubmission Table

A new table has been created to store all catalogue download form submissions.

**Fields:**

- `id` - Unique identifier (TEXT PRIMARY KEY)
- `firstName` - User's first name (TEXT, required)
- `lastName` - User's last name (TEXT, required)
- `email` - User's email address (TEXT, required)
- `companyName` - Company name (TEXT, optional)
- `phoneNumber` - Phone number (TEXT, required)
- `country` - Country selection (TEXT, required)
- `ipAddress` - User's IP address (TEXT, optional)
- `userAgent` - Browser/device information (TEXT, optional)
- `otpVerified` - Whether phone number was verified via OTP (BOOLEAN, default: false)
- `createdAt` - Timestamp when submission was created (TIMESTAMP)
- `updatedAt` - Timestamp when submission was last updated (TIMESTAMP)

**Indexes:**

- `email` - For quick email lookups
- `phoneNumber` - For quick phone number searches
- `createdAt` - For date-based queries and sorting

## Setup Instructions

### 1. Update Database Schema

If using **Supabase**, run the SQL script:

```bash
# Run the SQL file in Supabase SQL Editor
# File: add-catalogue-submission-table.sql
```

Or if using **Prisma with PostgreSQL**:

```bash
# Push schema changes to database
npx prisma db push

# Generate Prisma Client
npx prisma generate
```

### 2. Verify Database

Check that the table was created successfully:

```sql
SELECT * FROM "CatalogueSubmission" LIMIT 1;
```

## API Endpoints

### 1. Submit Catalogue Form

**Endpoint:** `POST /api/catalogue/submit`

**Request Body:**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "companyName": "ABC Company",
  "phoneNumber": "1234567890",
  "country": "india"
}
```

**Response:**

```json
{
  "success": true,
  "submissionId": "clx123...",
  "downloadId": "clx456...",
  "message": "Form submitted successfully"
}
```

**Features:**

- Validates all required fields
- Captures IP address and user agent
- Creates entry in CatalogueSubmission table
- Creates download tracking record
- Returns submission and download IDs

### 2. View All Submissions (Admin)

**Endpoint:** `GET /api/admin/catalogue-submissions`

**Response:**

```json
{
  "success": true,
  "submissions": [...],
  "count": 42
}
```

### 3. Filter Submissions (Admin)

**Endpoint:** `POST /api/admin/catalogue-submissions`

**Request Body:**

```json
{
  "startDate": "2024-01-01",
  "endDate": "2024-12-31",
  "email": "john@example.com",
  "phoneNumber": "1234567890"
}
```

## Admin Dashboard

### View Submissions

Access the admin dashboard to view all submissions:

```
URL: /admin/catalogue-submissions
```

**Features:**

- View all catalogue submissions in a table
- Search by name, email, phone, or company
- Filter by country
- Export data to CSV
- View statistics (total submissions, verified users)
- Real-time data refresh

## Data Flow

1. **User fills form** on `/catalogue` page
2. **OTP verification** required before submission
3. **Form submission** sends data to `/api/catalogue/submit`
4. **API stores data** in:
   - `CatalogueSubmission` table (form data)
   - `Download` table (tracking record)
5. **User redirected** to `/catalogue/downloads`
6. **Admin can view** all submissions at `/admin/catalogue-submissions`

## Files Modified/Created

### Database Schema:

- ✅ `prisma/schema.prisma` - Added CatalogueSubmission model
- ✅ `supabase-schema.sql` - Added SQL table definition
- ✅ `add-catalogue-submission-table.sql` - Standalone SQL migration script

### API Routes:

- ✅ `app/api/catalogue/submit/route.ts` - Updated to store in database
- ✅ `app/api/admin/catalogue-submissions/route.ts` - New endpoint for admin

### Admin Pages:

- ✅ `app/admin/catalogue-submissions/page.tsx` - New admin dashboard

### Frontend:

- ✅ `app/catalogue/page.tsx` - Already configured to submit to API

## Security Considerations

1. **OTP Verification** - Phone numbers must be verified before submission
2. **IP Tracking** - Captures IP address for audit trail
3. **User Agent Tracking** - Stores browser/device information
4. **Input Validation** - Server-side validation of all required fields
5. **Admin Only** - Submissions view should be protected (add auth middleware)

## Future Enhancements

- [ ] Add authentication middleware for admin routes
- [ ] Email notifications on new submissions
- [ ] Automated backup of submission data
- [ ] Analytics dashboard (submissions over time, by country, etc.)
- [ ] Duplicate detection (same email/phone)
- [ ] GDPR compliance features (data export, deletion)

## Troubleshooting

### Prisma Client Issues

If you encounter `EPERM` errors:

1. Stop your development server
2. Run: `npx prisma generate`
3. Restart your development server

### Database Connection

Verify your `.env` file has the correct `DATABASE_URL`:

```env
DATABASE_URL="postgresql://user:password@host:port/database"
```

### Missing Table

If the table doesn't exist, manually run the SQL script:

```bash
# Copy contents of add-catalogue-submission-table.sql
# Paste and execute in Supabase SQL Editor
```

## Testing

### Test Submission

```bash
curl -X POST http://localhost:3000/api/catalogue/submit \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phoneNumber": "1234567890",
    "country": "india"
  }'
```

### View Submissions

```bash
curl http://localhost:3000/api/admin/catalogue-submissions
```

## Support

For issues or questions:

1. Check Prisma schema is in sync: `npx prisma validate`
2. Verify database connection: `npx prisma db pull`
3. Check application logs for errors
4. Verify all environment variables are set correctly
