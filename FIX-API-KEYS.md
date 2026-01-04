# ⚠️ CRITICAL: Get Your Real Supabase API Keys

## The keys in your .env are WRONG!

The values I added were guesses. You need the **REAL** keys from Supabase.

## How to Get the Correct Keys:

### Step 1: Go to Supabase Dashboard

1. Open: https://app.supabase.com
2. Select your project: `hpqtiqghtoslqkgtbqdp`

### Step 2: Navigate to API Settings

1. Click **Settings** (gear icon) in the left sidebar
2. Click **API** in the settings menu

### Step 3: Copy the Keys

You'll see two keys (they are VERY LONG, starting with "eyJ..."):

**anon public key** - Example (yours will be different):

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwcXRpcWdodG9zbHFrZ3RicWRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYwNDEyNTUsImV4cCI6MjA1MTYxNzI1NX0.Jmao0qRzDUt243rG5xGvVw_V-V0uE0rZWaJYI-O0F5s
```

**service_role key** (secret) - Example (yours will be different):

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwcXRpcWdodG9zbHFrZ3RicWRwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjA0MTI1NSwiZXhwIjoyMDUxNjE3MjU1fQ.zFPph17oDDjb0GXj6LLvFg_TKux2FmdvJnDbcvNa7Ms
```

### Step 4: Update .env File

Replace the values in your `.env` file:

```env
NEXT_PUBLIC_SUPABASE_ANON_KEY="paste_the_full_anon_key_here"
SUPABASE_SERVICE_ROLE_KEY="paste_the_full_service_role_key_here"
```

## Important Notes:

1. ✅ The keys should be **very long** (200+ characters)
2. ✅ They start with `eyJ`
3. ✅ They have dots (.) in the middle
4. ❌ They are NOT like "sb*publishable*..." or "sb*secret*..."
5. ❌ Don't use the short display names!

## After Updating:

1. Save the `.env` file
2. Restart the development server
3. Try uploading again

---

**Need help?** Take a screenshot of the API page (with the keys visible) and I can help copy them correctly.
