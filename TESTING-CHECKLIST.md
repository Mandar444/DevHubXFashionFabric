# Testing Checklist for Catalogue System

## Prerequisites

- [ ] Database is running and connected
- [ ] Prisma client is generated: `npx prisma generate`
- [ ] Test data is loaded (see test-catalogue-data.sql)
- [ ] Development server is running: `npm run dev`

## Test 1: Catalogue Listing Page

**URL:** `http://localhost:8080/catalogue`

### ✅ Verify:

- [ ] Page loads without errors
- [ ] Hero section displays with video/image
- [ ] "Our Catalogues" heading is visible
- [ ] Catalogues appear in a grid layout
- [ ] Grid is responsive:
  - [ ] 1 column on mobile
  - [ ] 2 columns on tablet
  - [ ] 3-4 columns on desktop
- [ ] Each catalogue card shows:
  - [ ] Cover image
  - [ ] Category badge
  - [ ] Title
  - [ ] Subtitle (if available)
  - [ ] "Download Catalogue" button
- [ ] Hover effects work on cards
- [ ] Loading state appears initially
- [ ] Info section at bottom displays

### 📱 Test Responsive:

- [ ] Mobile (< 640px)
- [ ] Tablet (640px - 1024px)
- [ ] Desktop (> 1024px)

---

## Test 2: Download Form Page

**URL:** `http://localhost:8080/catalogue/test-catalogue-1/download`

### ✅ Form Display:

- [ ] Page loads without errors
- [ ] Catalogue preview shows on left (desktop)
- [ ] Form appears on right (desktop)
- [ ] Stacked layout on mobile
- [ ] All form fields are present:
  - [ ] First Name
  - [ ] Last Name
  - [ ] Email
  - [ ] Company Name
  - [ ] Contact Number
  - [ ] Country

### ✅ OTP Flow:

1. **Enter phone number** (e.g., +1234567890)
   - [ ] "Send OTP" button is enabled
2. **Click "Send OTP"**
   - [ ] Button shows loading state
   - [ ] OTP is logged in terminal/console
   - [ ] Success alert appears
   - [ ] Button changes to "Resend OTP"
   - [ ] 60-second countdown starts
   - [ ] OTP input field appears
3. **Check terminal for OTP:**
   ```
   Look for: OTP for +1234567890: 123456
   ```
4. **Enter wrong OTP** (e.g., 111111)
   - [ ] Click "Verify"
   - [ ] Error message appears
   - [ ] OTP field stays active
5. **Enter correct OTP** (from terminal)
   - [ ] Click "Verify"
   - [ ] Success alert appears
   - [ ] Checkmark icon appears
   - [ ] Phone field becomes disabled
   - [ ] OTP input disappears
   - [ ] Verification message changes

### ✅ Form Submission:

1. **Try submitting without OTP verification**
   - [ ] Button is disabled
   - [ ] Shows "Verify Phone to Continue"
2. **After OTP verification:**
   - [ ] Button is enabled
   - [ ] Shows "Download Catalogue"
3. **Fill all required fields:**
   - [ ] First Name: John
   - [ ] Last Name: Doe
   - [ ] Email: john@example.com
   - [ ] Company: Test Company (optional)
   - [ ] Phone: +1234567890 (verified)
   - [ ] Country: United States
4. **Submit form:**
   - [ ] Loading state appears
   - [ ] Form submits successfully
   - [ ] Redirects to `/catalogue/test-catalogue-1`

### ❌ Error Cases:

- [ ] Try accessing with invalid catalogue ID
- [ ] Try submitting with empty required fields
- [ ] Try submitting without OTP verification
- [ ] Check error messages are clear

---

## Test 3: Catalogue Viewer Page

**URL:** `http://localhost:8080/catalogue/test-catalogue-1`

### ✅ Header:

- [ ] "Back to Catalogues" button works
- [ ] Catalogue title displays
- [ ] Subtitle displays (if available)
- [ ] "Download PDF" button is visible

### ✅ Page Viewer (if pageImages exist):

- [ ] First page image loads
- [ ] Previous button is disabled on first page
- [ ] Next button is enabled (if multiple pages)
- [ ] Click "Next" → moves to page 2
- [ ] Click "Previous" → moves back to page 1
- [ ] Page counter shows correct page (e.g., "Page 1 of 3")

### ✅ Keyboard Navigation:

- [ ] Press "→" (right arrow) → next page
- [ ] Press "←" (left arrow) → previous page
- [ ] Keyboard navigation respects page boundaries

### ✅ Thumbnail Navigation:

- [ ] Thumbnails display at bottom
- [ ] Current page thumbnail is highlighted
- [ ] Click thumbnail → jumps to that page
- [ ] Scroll horizontally if many pages

### ✅ Download Button:

- [ ] Click "Download PDF"
- [ ] Loading state appears
- [ ] PDF download starts
- [ ] Download is tracked in database

### ✅ Fallback (for catalogue with no pageImages):

Test with: `test-catalogue-4`

- [ ] Shows cover image only
- [ ] Displays download message
- [ ] "Download Full Catalogue" button works
- [ ] No page navigation appears

### 📱 Test Responsive:

- [ ] Mobile layout works
- [ ] Touch gestures work (if applicable)
- [ ] Thumbnails scroll horizontally on mobile

---

## Test 4: API Endpoints

### GET /api/catalogue

```bash
# PowerShell
Invoke-RestMethod -Uri "http://localhost:8080/api/catalogue" -Method GET
```

- [ ] Returns array of catalogues
- [ ] Only published catalogues returned
- [ ] Contains all required fields

### GET /api/catalogue/[id]

```bash
# PowerShell
Invoke-RestMethod -Uri "http://localhost:8080/api/catalogue/test-catalogue-1" -Method GET
```

- [ ] Returns single catalogue
- [ ] Contains pageImages array
- [ ] Returns 404 for invalid ID

### POST /api/catalogue/send-otp

```bash
# PowerShell
$body = @{
    phoneNumber = "+1234567890"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:8080/api/catalogue/send-otp" -Method POST -Body $body -ContentType "application/json"
```

- [ ] Returns success message
- [ ] OTP logged in terminal
- [ ] Returns error for invalid phone

### POST /api/catalogue/verify-otp

```bash
# PowerShell (use OTP from terminal)
$body = @{
    phoneNumber = "+1234567890"
    otp = "123456"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:8080/api/catalogue/verify-otp" -Method POST -Body $body -ContentType "application/json"
```

- [ ] Returns success for correct OTP
- [ ] Returns error for wrong OTP
- [ ] Returns error for expired OTP

### POST /api/catalogue/submit

```bash
# PowerShell
$body = @{
    catalogueId = "test-catalogue-1"
    firstName = "John"
    lastName = "Doe"
    email = "john@example.com"
    companyName = "Test Co"
    phoneNumber = "+1234567890"
    country = "United States"
    otpVerified = $true
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:8080/api/catalogue/submit" -Method POST -Body $body -ContentType "application/json"
```

- [ ] Returns success
- [ ] Creates CatalogueSubmission record
- [ ] Creates Download record
- [ ] Returns error if OTP not verified

---

## Test 5: Database Verification

### Check submissions:

```sql
-- In Prisma Studio or database client
SELECT * FROM "CatalogueSubmission" ORDER BY "createdAt" DESC LIMIT 5;
```

- [ ] Submission recorded with all fields
- [ ] otpVerified is true
- [ ] ipAddress captured
- [ ] Timestamps correct

### Check downloads:

```sql
SELECT * FROM "Download" ORDER BY "downloadedAt" DESC LIMIT 5;
```

- [ ] Download recorded
- [ ] Linked to correct catalogue
- [ ] User info captured

---

## Test 6: Edge Cases

### Invalid Catalogue ID:

- [ ] `/catalogue/invalid-id/download` → redirects to `/catalogue`
- [ ] `/catalogue/invalid-id` → redirects to `/catalogue`

### No Catalogues:

- [ ] Empty database → shows "No catalogues available"
- [ ] Loading state → error state handling

### Network Errors:

- [ ] Simulate API failure → error message shown
- [ ] Retry functionality works

### OTP Expiration:

1. Send OTP
2. Wait 5+ minutes
3. Try to verify

- [ ] Shows "OTP expired" error

---

## Performance Checks

### Page Load Times:

- [ ] Catalogue listing: < 2s
- [ ] Download form: < 1s
- [ ] Catalogue viewer: < 2s

### Image Loading:

- [ ] Images lazy load
- [ ] Proper loading states
- [ ] No layout shift

### Animations:

- [ ] Smooth transitions
- [ ] No janky animations
- [ ] Respects reduced motion preferences

---

## Browser Compatibility

Test in:

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Accessibility

- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader friendly
- [ ] Alt text on images
- [ ] ARIA labels where needed
- [ ] Color contrast sufficient

---

## Security

- [ ] CSRF protection (Next.js default)
- [ ] No sensitive data in console (production)
- [ ] No SQL injection possible (Prisma ORM)
- [ ] Rate limiting needed (future)
- [ ] Input validation works

---

## Documentation

- [ ] CATALOGUE-SYSTEM.md is accurate
- [ ] CATALOGUE-QUICK-START.md is clear
- [ ] Code comments are helpful
- [ ] API documentation complete

---

## Production Readiness

Before deploying:

- [ ] Environment variables set
- [ ] Database migrated
- [ ] SMS service integrated
- [ ] Remove OTP from API response
- [ ] Add rate limiting
- [ ] Set up monitoring
- [ ] Configure CDN
- [ ] Test on production-like environment

---

## Sign Off

**Tested by:** ********\_\_\_********
**Date:** ********\_\_\_********
**Environment:** Development / Staging / Production
**Result:** ✅ Pass / ❌ Fail

**Notes:**

---

---

---

---

**Testing completed!** 🎉
