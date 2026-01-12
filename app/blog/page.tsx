import Image from "next/image"
import Link from "next/link"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"

async function getBlogPosts() {

  try {
    const blogPosts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    })
    return blogPosts
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

function formatDate(date: Date) {
  const day = date.getDate().toString().padStart(2, '0')
  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  return { day, month }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            poster="/images/work/DSC00446.jpg"
          >
            <source src="https://dhyeydeveloper.github.io/fashion-fabric-videos/V2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 z-10 bg-black/40"></div>
          <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
            <AnimateIn>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">Our Blog</h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="max-w-[800px] text-lg text-white/90">
                Insights, trends, and expert advice on uniform manufacturing and design
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-neutral-50">
          <div className="container px-4 md:px-6">
            {blogPosts.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-neutral-800 mb-4">No blog posts yet</h2>
                <p className="text-neutral-600">Check back soon for new content!</p>
              </div>
            ) : (
              <AnimateInStagger>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post) => {
                    const { day, month } = formatDate(new Date(post.createdAt))
                    return (
                      <AnimateIn key={post.id}>
                        <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                          {/* Blog Image */}
                          <div className="relative h-64 w-full overflow-hidden group">
                            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-md shadow-lg border-l-4 border-[#2e7d32]">
                              <div className="text-xs font-semibold text-[#2e7d32]">This</div>
                              <div className="text-2xl font-bold text-neutral-800">{day}</div>
                              <div className="text-xs font-semibold text-[#2e7d32]">{month}</div>
                            </div>
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Blog Content */}
                          <div className="p-6">
                            {/* Category and Author */}
                            <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                              <span className="font-semibold">{post.category}</span>
                              <span>/</span>
                              <span>by {post.author}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-neutral-800 mb-3 line-clamp-2 hover:text-[#2e7d32] transition-colors">
                              <Link href={`/blog/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h3>

                            {/* Excerpt */}
                            <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>

                            {/* Read More Button */}
                            <Button
                              asChild
                              className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white w-full"
                            >
                              <Link href={`/blog/${post.slug}`}>
                                READ MORE
                              </Link>
                            </Button>
                          </div>
                        </article>
                      </AnimateIn>
                    )
                  })}
                </div>
              </AnimateInStagger>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
