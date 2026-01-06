-- Test Catalogue Data
-- Run this in Prisma Studio or your database client to create test catalogues

-- Insert test catalogues
INSERT INTO "Catalogue" ("id", "title", "subtitle", "category", "coverImage", "pdfUrl", "pageImages", "color", "published", "createdAt", "updatedAt", "publishedAt")
VALUES
  (
    'test-catalogue-1',
    'Summer Collection 2026',
    'Explore our latest summer designs and fabrics',
    'Fashion',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=600&fit=crop',
    'https://www.africau.edu/images/default/sample.pdf',
    ARRAY[
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1200&fit=crop'
    ],
    'bg-amber-50',
    true,
    NOW(),
    NOW(),
    NOW()
  ),
  (
    'test-catalogue-2',
    'Winter Collection 2026',
    'Warm and stylish winter uniforms',
    'Winter Wear',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=600&fit=crop',
    'https://www.africau.edu/images/default/sample.pdf',
    ARRAY[
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=1200&fit=crop'
    ],
    'bg-blue-50',
    true,
    NOW(),
    NOW(),
    NOW()
  ),
  (
    'test-catalogue-3',
    'Corporate Uniforms',
    'Professional attire for businesses',
    'Corporate',
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=600&fit=crop',
    'https://www.africau.edu/images/default/sample.pdf',
    ARRAY[
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1200&fit=crop'
    ],
    'bg-gray-50',
    true,
    NOW(),
    NOW(),
    NOW()
  ),
  (
    'test-catalogue-4',
    'School Uniforms 2026',
    'Quality uniforms for educational institutions',
    'Education',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=600&fit=crop',
    'https://www.africau.edu/images/default/sample.pdf',
    ARRAY[]::text[],
    'bg-green-50',
    true,
    NOW(),
    NOW(),
    NOW()
  );

-- Verify insertion
SELECT id, title, category, published FROM "Catalogue";
