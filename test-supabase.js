// Quick test script to verify Supabase connection
// Run with: node test-supabase.js

require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

console.log('Testing Supabase Connection...\n')
console.log('URL:', supabaseUrl)
console.log('Service Key:', supabaseKey ? `${supabaseKey.substring(0, 20)}...` : 'NOT SET')

if (!supabaseUrl || !supabaseKey) {
  console.error('\n❌ ERROR: Environment variables not set!')
  console.error('Make sure .env file has:')
  console.error('  - NEXT_PUBLIC_SUPABASE_URL')
  console.error('  - SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function testConnection() {
  try {
    // List all buckets
    console.log('\nChecking storage buckets...')
    const { data: buckets, error } = await supabase.storage.listBuckets()

    if (error) {
      console.error('❌ Error listing buckets:', error.message)
      return
    }

    console.log(`\n✅ Connected! Found ${buckets.length} bucket(s):`)
    buckets.forEach(bucket => {
      console.log(`  - ${bucket.name} (${bucket.public ? 'public' : 'private'})`)
    })

    // Check for required buckets
    const requiredBuckets = ['catalogue-images', 'catalogue-pdfs']
    const existingBucketNames = buckets.map(b => b.name)

    console.log('\nRequired buckets:')
    requiredBuckets.forEach(bucketName => {
      if (existingBucketNames.includes(bucketName)) {
        console.log(`  ✅ ${bucketName} - EXISTS`)
      } else {
        console.log(`  ❌ ${bucketName} - MISSING (needs to be created)`)
      }
    })

    console.log('\n✅ Setup validation complete!')

  } catch (error) {
    console.error('❌ Unexpected error:', error)
  }
}

testConnection()
