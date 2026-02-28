import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import { BlogShareButtons } from "@/components/blog-share-buttons"

async function getBlogPost(slug: string) {
  try {
    const blogPost = await prisma.blogPost.findUnique({
      where: {
        slug,
        published: true,
      },
    })
    return blogPost
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return null
  }
}

async function getRelatedPosts(currentSlug: string, category: string) {
  try {
    const relatedPosts = await prisma.blogPost.findMany({
      where: {
        published: true,
        slug: { not: currentSlug },
        category,
      },
      take: 2,
      orderBy: { createdAt: "desc" },
    })
    return relatedPosts
  } catch (error) {
    console.error("Error fetching related posts:", error)
    return []
  }
}

function formatDate(date: Date) {
  const day = date.getDate().toString().padStart(2, '0')
  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  return { day, month }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blogPost = await getBlogPost(slug)

  if (!blogPost) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(blogPost.slug, blogPost.category)
  const { day, month } = formatDate(new Date(blogPost.createdAt))

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* Back Button Section */}
        <section className="pt-32 pb-4 bg-white">
          <div className="container px-4 md:px-6 relative z-10">
            <AnimateIn>
              <Button
                asChild
                variant="outline"
                className="hover:bg-amber-500 hover:text-white border-neutral-200 text-neutral-600 bg-transparent transition-all rounded-full px-8 py-6 group shadow-sm hover:shadow-md"
              >
                <Link href="/blog" className="flex items-center gap-3 font-bold tracking-[0.3em] text-[10px]">
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-2 transition-transform" />
                  RETURN TO CHRONICLES
                </Link>
              </Button>
            </AnimateIn>
          </div>
        </section>

        {/* Blog Post Header Section - Royal White */}
        <section className="pb-24 bg-white border-b border-neutral-100">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <AnimateIn>
                <div className="space-y-12">
                  {/* Date Badge */}
                  <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-6 py-3 rounded-[1.25rem] shadow-sm">
                    <div className="text-center">
                      <div className="text-3xl font-bold font-garamond italic text-amber-600 leading-none mb-1">{day}</div>
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-600/60">{month}</div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="h-[2px] w-12 bg-amber-500/30"></div>
                      <span className="text-amber-600 font-bold tracking-[0.6em] uppercase text-[10px]">{blogPost.category}</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-9xl font-bold tracking-tight font-garamond italic text-black leading-[0.9]">
                      {blogPost.title}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-6 text-[10px] tracking-[0.4em] uppercase font-bold text-neutral-400 pt-8 border-t border-neutral-100">
                      <span className="text-amber-600">{blogPost.author}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-200"></span>
                      <span>{new Date(blogPost.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="py-32 bg-white relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')] opacity-20 pointer-events-none"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              <AnimateIn>
                 <div className="relative w-full h-[400px] md:h-[800px] mb-32 rounded-[4rem] overflow-hidden shadow-2xl border border-neutral-100 group">
                    <Image src={blogPost.image} alt={blogPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-[2s]" priority />
                 </div>
              </AnimateIn>

              {/* Article Content */}
              <AnimateIn delay={0.2}>
                <article className="text-neutral-800 text-xl md:text-4xl font-light font-garamond leading-[1.6] space-y-16">
                  {blogPost.content.split('\n').map((line: string, index: number) => {
                    const trimmedLine = line.trim()

                    if (!trimmedLine) return null

                    if (trimmedLine.startsWith('## ')) {
                      const headerText = trimmedLine.substring(3).trim()
                      return (
                        <h2
                          key={index}
                          className="text-4xl md:text-6xl font-bold text-black mt-32 mb-12 pb-6 border-b-4 border-amber-500/10 font-garamond italic"
                        >
                          {headerText}
                        </h2>
                      )
                    }

                    const imageMatch = trimmedLine.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
                    if (imageMatch) {
                      const [, alt, url] = imageMatch
                      return (
                        <div key={index} className="my-24">
                          <div className="relative w-full h-[400px] md:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl border border-neutral-100">
                            <Image
                              src={url}
                              alt={alt || 'Article image'}
                              fill
                              className="object-cover"
                            />
                          </div>
                          {alt && (
                            <p className="text-sm text-neutral-400 text-center mt-8 italic font-garamond tracking-[0.2em] font-medium">
                              {alt}
                            </p>
                          )}
                        </div>
                      )
                    }

                    // Applying Drop Cap to the first standard paragraph
                    const isFirstParagraph = index === 0 || (index > 0 && blogPost.content.split('\n').slice(0, index).every(l => !l.trim() || l.trim().startsWith('## ')));

                    return (
                      <p 
                        key={index} 
                        className={`text-neutral-700 ${isFirstParagraph ? 'first-letter:text-9xl first-letter:font-bold first-letter:text-amber-500 first-letter:mr-6 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-2' : ''}`}
                      >
                        {line}
                      </p>
                    )
                  })}
                </article>
              </AnimateIn>

              {/* Share Section */}
              <AnimateIn delay={0.3}>
                <div className="mt-40 pt-20 border-t-2 border-neutral-100 text-center">
                  <h3 className="text-amber-600 font-bold tracking-[0.6em] uppercase text-[10px] mb-12">Share this Chronicle</h3>
                  <div className="flex justify-center">
                    <BlogShareButtons slug={blogPost.slug} title={blogPost.title} />
                  </div>
                </div>
              </AnimateIn>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <AnimateIn delay={0.4}>
                  <div className="mt-40 pt-20 border-t-2 border-neutral-100">
                    <div className="flex flex-col items-center mb-24">
                      <span className="text-amber-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Further Reading</span>
                      <h3 className="text-5xl md:text-7xl font-garamond italic text-black font-bold">Related <span className="text-amber-500 font-light">Chronicles</span></h3>
                      <div className="w-24 h-px bg-amber-500/20 mt-8"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                      {relatedPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                          <div className="bg-white rounded-[4rem] overflow-hidden border border-neutral-100 hover:border-amber-500/40 transition-all duration-1000 hover:-translate-y-4 shadow-sm hover:shadow-2xl h-full flex flex-col">
                            <div className="relative h-[450px] w-full overflow-hidden">
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-[3s]"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="p-12 flex-1 flex flex-col">
                              <h4 className="text-4xl font-bold text-black font-garamond italic mb-8 group-hover:text-amber-600 transition-colors line-clamp-2 leading-tight">
                                {post.title}
                              </h4>
                              <p className="text-neutral-500 font-light font-garamond leading-relaxed line-clamp-2 text-xl italic">
                                {post.excerpt}
                              </p>
                              <div className="mt-10 pt-10 border-t border-neutral-100 self-start group-hover:border-amber-500/30 transition-colors">
                                <span className="text-[10px] font-bold tracking-[0.5em] text-amber-600 uppercase">Read Chronicle</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
