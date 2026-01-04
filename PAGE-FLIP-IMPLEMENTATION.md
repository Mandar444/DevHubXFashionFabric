# Page Flip Book Feature - Implementation Guide

## Overview

A complete page-flipping catalogue viewer has been implemented in your Next.js application. When a PDF catalogue is uploaded, it can be displayed with realistic book-style page-flipping animations.

## What Was Implemented

### 1. **Database Schema Update** ✅

- Added `pageImages` field to the `Catalogue` model
- Stores array of page references for the flip book

### 2. **PDF Processing API** ✅

**File:** `/app/api/catalogue/convert-pdf/route.ts`

- Processes uploaded PDFs to extract page count
- Stores page references in the database
- Automatically called after catalogue upload

### 3. **PageFlipBook Component** ✅

**File:** `/components/page-flip-book.tsx`

- Client-side component using the `page-flip` library
- Converts PDF pages to images on-the-fly using PDF.js
- Features:
  - Realistic page curl animation
  - Mouse click and drag support
  - Touch/swipe support for mobile
  - Navigation controls (prev/next buttons)
  - Page counter
  - Full-screen dark background for premium look
  - SSR-safe (only renders on client)

### 4. **Flip Viewer Page** ✅

**File:** `/app/catalogue/flip/[id]/page.tsx`

- Dynamic route for viewing any catalogue in flip book mode
- Server-side data fetching
- SEO-friendly with proper metadata

### 5. **Updated Upload Flow** ✅

**File:** `/app/admin/catalogue-upload/page.tsx`

- Automatically triggers PDF conversion after upload
- Shows conversion progress to admin
- Provides visual feedback

### 6. **User Interface Updates** ✅

- **Downloads Page** (`/app/catalogue/downloads/page.tsx`):
  - Added "Open Flip Book" button for each catalogue
  - Maintains existing "View PDF" functionality
- **Admin Panel** (`/app/admin/catalogue-upload/page.tsx`):
  - Added "Flip Book" preview button for admins
  - Quick access to test the flip book view

## How It Works

### Upload Flow:

1. Admin uploads PDF + cover image
2. Files are stored in Supabase Storage
3. Catalogue record is created in database
4. PDF conversion API is automatically called
5. Page count is extracted and stored
6. Admin sees success message

### Viewing Flow:

1. User navigates to catalogue downloads page
2. Clicks "Open Flip Book" button
3. Redirected to `/catalogue/flip/{catalogueId}`
4. PDF is loaded and converted to images in browser
5. Page flip library renders interactive book
6. User can flip pages with clicks, drags, or buttons

## Key Features

### Page Flip Component Features:

- ✅ **Realistic Animation**: Uses `page-flip` library for authentic book behavior
- ✅ **High Quality**: PDF rendered at 2x scale for crisp images
- ✅ **Interactive**: Click, drag, swipe, and button controls
- ✅ **Responsive**: Adapts to different screen sizes
- ✅ **Mobile Support**: Touch-friendly with swipe gestures
- ✅ **Performance**: Pages loaded on-demand
- ✅ **Premium Look**: Dark background with shadows and professional styling

### Technical Features:

- ✅ **SSR Safe**: Client-only rendering prevents hydration errors
- ✅ **Error Handling**: Graceful fallbacks for failed loads
- ✅ **Loading States**: Progress indicators during conversion
- ✅ **TypeScript**: Full type safety
- ✅ **SEO**: Server-side metadata generation

## File Structure

```
app/
  api/
    catalogue/
      convert-pdf/
        route.ts          # PDF processing API
  catalogue/
    flip/
      [id]/
        page.tsx          # Flip book viewer page
    downloads/
      page.tsx            # Updated with flip book buttons
  admin/
    catalogue-upload/
      page.tsx            # Updated with auto-conversion
components/
  page-flip-book.tsx      # Main flip book component
```

## Usage

### For Admins:

1. Go to `/admin/catalogue-upload`
2. Upload a PDF catalogue with cover image
3. Wait for automatic conversion
4. Click "Flip Book" button to preview
5. Share the flip book URL with users

### For Users:

1. Visit `/catalogue/downloads`
2. Browse available catalogues
3. Click "Open Flip Book" on any catalogue
4. Enjoy the interactive page-flipping experience

### Direct URL:

- Format: `/catalogue/flip/{catalogueId}`
- Example: `/catalogue/flip/abc123xyz`

## Dependencies Installed

- `pdf-lib` - PDF manipulation
- `pdfjs-dist` - PDF rendering to canvas
- `page-flip` - Page flip animation library (already installed)

## Styling

The flip book uses:

- Tailwind CSS for layout and controls
- Dark (neutral-900) background for premium feel
- White pages with realistic shadows
- Responsive design that works on all devices

## Browser Compatibility

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ Requires JavaScript enabled
- ⚠️ PDF.js worker loaded from CDN

## Performance Notes

- PDF conversion happens in the browser (client-side)
- Each page is rendered as needed
- High-quality images (2x scale) may use more memory
- Loading time depends on PDF size and page count

## Customization Options

### In `page-flip-book.tsx`:

- `width: 550` - Base page width
- `height: 733` - Base page height (A4 ratio)
- `scale: 2.0` - PDF rendering quality (higher = better quality, larger files)
- `flippingTime: 1000` - Animation duration in ms
- `maxShadowOpacity: 0.5` - Shadow intensity

### Styling:

- Background color: `bg-neutral-900`
- Button styles: Can be customized in component
- Page shadows: Controlled by page-flip library

## Testing

Test the feature:

1. Upload a test PDF catalogue
2. Navigate to downloads page
3. Click "Open Flip Book"
4. Test interactions:
   - Click on page corners
   - Drag page corners
   - Use prev/next buttons
   - Try on mobile device

## Troubleshooting

### PDF Not Loading:

- Check PDF URL is accessible
- Verify CORS settings on Supabase
- Check browser console for errors

### Page Flip Not Initializing:

- Ensure JavaScript is enabled
- Check for console errors
- Verify PDF.js worker is loading

### Slow Performance:

- Reduce `scale` value in component
- Optimize PDF file size before upload
- Check network speed

## Future Enhancements (Optional)

- [ ] Pre-render pages on server for faster loading
- [ ] Add zoom in/out functionality
- [ ] Add fullscreen mode
- [ ] Add page thumbnails/navigation
- [ ] Add bookmarks for long catalogues
- [ ] Add print functionality
- [ ] Add download current page feature
- [ ] Add sharing functionality
- [ ] Add analytics tracking for page views

## Support

For issues or questions about the page flip feature, check:

1. Browser console for JavaScript errors
2. Network tab for failed requests
3. Server logs for API errors
4. Supabase dashboard for storage issues
