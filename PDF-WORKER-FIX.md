# PDF.js Worker Fix - Complete Solution

## ❌ The Problem

### Error Message:

```
Failed to fetch dynamically imported module: pdf.worker.min.js
```

### Why This Happens:

1. **CDN Loading Issues**

   - External CDN URLs can be blocked by CSP policies
   - Network issues cause worker loading failures
   - Version mismatches between main library and worker
   - CORS issues in production builds

2. **Next.js Build Process**

   - Static imports don't work well with web workers
   - Worker files need special handling in webpack
   - Server-side rendering attempts to load browser-only code
   - Import paths differ between dev and production

3. **Module Resolution**
   - `import.meta.url` requires proper webpack configuration
   - Worker files need to be copied to public directory or bundled
   - Dynamic imports have timing issues

## ✅ The Solution

### 1. **Local Worker Loading (No CDN)**

```typescript
// ❌ BAD - CDN loading (unreliable)
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${version}/build/pdf.worker.min.js`;

// ✅ GOOD - Local file using import.meta.url
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
```

### 2. **Client-Side Only Loading**

```typescript
"use client"; // Must be at the top

// Load PDF.js dynamically on client
useEffect(() => {
  if (!isClient) return;

  const loadPdfJs = async () => {
    const pdfjs = await import("pdfjs-dist");
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.js",
      import.meta.url
    ).toString();
    setPdfjsLib(pdfjs);
  };

  loadPdfJs();
}, [isClient]);
```

### 3. **Next.js Webpack Configuration**

```javascript
// next.config.mjs
webpack: (config, { isServer }) => {
  if (!isServer) {
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false, // Prevent canvas from loading on client
    };
  }

  // Handle .mjs files properly
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  });

  return config;
};
```

## 🔧 Implementation Details

### Component Structure:

```typescript
"use client";

export function PageFlipBook({ pdfUrl, title }: Props) {
  const [pdfjsLib, setPdfjsLib] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  // Step 1: Ensure client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Step 2: Load PDF.js with local worker
  useEffect(() => {
    if (!isClient) return;

    const loadPdfJs = async () => {
      const pdfjs = await import("pdfjs-dist");
      pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.js",
        import.meta.url
      ).toString();
      setPdfjsLib(pdfjs);
    };

    loadPdfJs();
  }, [isClient]);

  // Step 3: Use PDF.js only when loaded
  useEffect(() => {
    if (!isClient || !pdfjsLib) return;
    // ... convert PDF to images
  }, [isClient, pdfjsLib, pdfUrl]);
}
```

## 🎯 Key Points

### Why `new URL()` Works:

1. **Bundler Resolution**

   - Webpack/Turbopack recognizes this pattern
   - Automatically includes worker in build
   - Creates proper output path

2. **Import.meta.url**

   - Provides current module's URL
   - Resolves relative to module location
   - Works in both dev and production

3. **No CDN Dependencies**
   - Worker bundled with app
   - No external network requests
   - No CORS issues
   - Consistent versions

### Client-Side Only:

```typescript
// Prevents SSR issues
const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true); // Only true in browser
}, []);

// Wait for client before using PDF.js
if (!isClient || !pdfjsLib) return <Loading />;
```

### Dynamic Import:

```typescript
// ❌ BAD - Top-level import (causes SSR errors)
import * as pdfjs from "pdfjs-dist";

// ✅ GOOD - Dynamic import in useEffect
const pdfjs = await import("pdfjs-dist");
```

## 🚀 Production Ready

### Benefits:

1. **Reliability**

   - ✅ No CDN failures
   - ✅ No network dependencies
   - ✅ Consistent performance

2. **Security**

   - ✅ No external scripts
   - ✅ CSP compliant
   - ✅ No CORS issues

3. **Performance**

   - ✅ Local caching
   - ✅ Faster loading
   - ✅ Offline support

4. **Maintainability**
   - ✅ Version locked to package.json
   - ✅ No version mismatches
   - ✅ Easy updates

## 📋 Checklist

- [x] Component uses "use client" directive
- [x] PDF.js imported dynamically
- [x] Worker loaded from local file
- [x] Uses import.meta.url for path resolution
- [x] Client-side check before PDF operations
- [x] Webpack configured for .mjs files
- [x] Canvas aliased to false on client
- [x] Proper error handling
- [x] Loading states implemented

## 🧪 Testing

### Development:

```bash
npm run dev
# Navigate to flip book page
# Check console for: "PDF.js loaded successfully"
```

### Production:

```bash
npm run build
npm start
# Verify worker loads from /_next/static/
```

### Verify Worker Path:

```javascript
// In browser console
console.log(pdfjs.GlobalWorkerOptions.workerSrc);
// Should show: /_next/static/chunks/...pdf.worker.min.js
// NOT: https://cdn.../pdf.worker.min.js
```

## 🐛 Troubleshooting

### Issue: Still getting CDN error

**Solution**: Clear `.next` cache and rebuild

```bash
rm -rf .next
npm run build
```

### Issue: Worker not found in production

**Solution**: Verify webpack config is applied

- Check `next.config.mjs` has webpack section
- Ensure .mjs files are handled

### Issue: Canvas errors

**Solution**: Add canvas alias in webpack config

```javascript
config.resolve.alias = {
  ...config.resolve.alias,
  canvas: false,
};
```

### Issue: Hydration errors

**Solution**: Ensure proper client-side check

```typescript
const [isClient, setIsClient] = useState(false);
useEffect(() => setIsClient(true), []);
if (!isClient) return <Loading />;
```

## 📚 References

- [PDF.js Documentation](https://mozilla.github.io/pdf.js/)
- [Next.js Webpack Config](https://nextjs.org/docs/app/api-reference/next-config-js/webpack)
- [Import.meta.url](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta)

## ✨ Summary

The fix ensures:

1. **No CDN** - Worker loaded locally
2. **Production safe** - Works in build and dev
3. **SSR safe** - Client-side only execution
4. **Reliable** - No network dependencies
5. **Maintainable** - Version locked with package

Your PDF flip book now works reliably in both development and production! 🎉
