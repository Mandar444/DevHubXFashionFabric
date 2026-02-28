import Image from "next/image"
import Link from "next/link"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"
import { Star, Clock, User, ArrowRight, Sparkles } from "lucide-react"

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
  const month = date.toLocaleString('en-US', { month: 'short' })
  const year = date.getFullYear()
  return `${day} ${month} ${year}`
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()
  
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfdfc] text-black selection:bg-amber-500/30">
      <main className="flex-1">
        {/* Royal Hero Section - Cinematic Blend */}
        <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-black pt-24">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-15 pointer-events-none z-10"></div>
          <Image
            src="/images/bg-imges-hero-sections/image-04.jpg"
            alt="Royal Blog Backdrop"
            fill
            className="object-cover z-0 opacity-60 scale-105"
            priority
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-transparent to-[#fcfdfc]"></div>
          
          <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
            <AnimateIn>
              <div className="flex items-center justify-center gap-6 mb-10">
                <div className="w-16 h-px bg-amber-500/40"></div>
                <span className="text-amber-500 font-bold tracking-[0.6em] uppercase text-xs">The Scribes of Style</span>
                <div className="w-16 h-px bg-amber-500/40"></div>
              </div>
              <h1 className="text-6xl md:text-[9rem] font-bold tracking-tighter text-white mb-8 font-garamond italic leading-none drop-shadow-2xl">
                Royal <span className="text-amber-500">Chronicles</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="max-w-[850px] text-2xl md:text-3xl font-garamond italic text-white/90 font-light leading-relaxed text-shadow-lg">
                "Insights from the intersection of tradition and innovation. Where every word is a stitch in the fabric of our legacy."
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Blog Posts Grid - Bright White Royale */}
        <section className="py-40 relative overflow-hidden bg-[#fcfdfc]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/exclusive-paper.png')] opacity-30 pointer-events-none"></div>
          <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="container px-4 md:px-6">
            {blogPosts.length === 0 ? (
              <AnimateIn>
                <div className="text-center py-32 bg-white rounded-[4rem] border border-neutral-100 shadow-2xl">
                  <Sparkles className="w-24 h-24 text-amber-500/30 mx-auto mb-10" />
                  <h2 className="text-5xl font-garamond italic text-black mb-6 leading-none">The chronicles are being written...</h2>
                  <p className="text-neutral-400 text-2xl font-garamond italic">Return soon to witness our latest insights.</p>
                </div>
              </AnimateIn>
            ) : (
              <AnimateInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                {blogPosts.map((post) => {
                  const formattedDate = formatDate(new Date(post.createdAt))
                  return (
                    <article key={post.id} className="group relative">
                      {/* Royal Frame */}
                      <div className="absolute -inset-6 border border-neutral-100 rounded-[3rem] -z-10 bg-white shadow-sm group-hover:border-amber-500/30 transition-all duration-700"></div>
                      
                      <div className="bg-white rounded-[2.5rem] overflow-hidden border-none hover:shadow-2xl transition-all duration-700 flex flex-col h-full group-hover:-translate-y-4">
                        {/* Blog Image */}
                        <div className="relative h-[30rem] w-full overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                          
                          {/* Date Badge */}
                          <div className="absolute top-8 left-8 z-10 bg-black text-amber-500 px-6 py-3 rounded-full shadow-2xl border border-white/10">
                            <div className="text-[10px] font-bold tracking-widest uppercase">{formattedDate}</div>
                          </div>

                          {/* Category Overlay */}
                          <div className="absolute bottom-8 left-8 z-10 flex items-center gap-3">
                            <span className="bg-white/95 backdrop-blur-md text-amber-600 text-[9px] font-bold tracking-[0.3em] uppercase px-5 py-2 rounded-full shadow-lg border border-neutral-100">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Blog Content */}
                        <div className="p-12 flex flex-col flex-1">
                          {/* Author and Read Time */}
                          <div className="flex items-center gap-8 text-[11px] text-neutral-400 mb-8 font-bold tracking-[0.2em] uppercase">
                            <div className="flex items-center gap-3">
                              <User size={16} className="text-amber-500" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Clock size={16} className="text-amber-500" />
                              <span>5 MIN READ</span>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 font-garamond italic leading-tight group-hover:text-amber-600 transition-colors">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h3>

                          {/* Excerpt */}
                          <p className="text-neutral-500 text-xl font-garamond italic font-light leading-relaxed mb-10 line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Spacer */}
                          <div className="flex-1"></div>

                          {/* Read More Link */}
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-4 text-amber-600 font-bold tracking-[0.4em] uppercase group/link text-[10px] transition-all hover:gap-6"
                          >
                            Read Full Chronicle <ArrowRight size={18} className="group-hover/link:translate-x-3 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </AnimateInStagger>
            )}
          </div>
        </section>

        {/* Newsletter Section - Contrasting Dark Block */}
        <section className="py-40 relative overflow-hidden bg-black">
           <div className="container px-4 md:px-6 relative z-10">
              <AnimateIn className="max-w-6xl mx-auto bg-neutral-900/50 backdrop-blur-3xl rounded-[5rem] p-16 md:p-32 border border-white/10 relative overflow-hidden text-center group hover:border-amber-500/30 transition-all duration-1000">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-15 pointer-events-none"></div>
                 
                 <div className="relative z-10">
                    <span className="text-amber-500 font-bold tracking-[0.6em] uppercase text-xs mb-10 block">Stay Distinguished</span>
                    <h2 className="text-5xl md:text-[8rem] font-bold text-white mb-10 font-garamond italic leading-none drop-shadow-2xl">Join Our <span className="text-amber-500">Circle</span></h2>
                    <p className="text-white/60 text-2xl md:text-3xl font-garamond italic mb-16 max-w-3xl mx-auto leading-relaxed">
                      "Receive exclusive insights on the future of luxury uniform engineering and sartorial trends."
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
                       <input 
                         type="email" 
                         placeholder="Enter your royal address..." 
                         className="flex-1 bg-white/5 border border-white/20 rounded-2xl px-10 py-7 text-white placeholder:text-white/20 focus:outline-none focus:border-amber-500 transition-all font-garamond italic text-2xl"
                       />
                       <Button size="lg" className="bg-amber-500 hover:bg-black text-black hover:text-white rounded-2xl px-16 py-7 font-bold tracking-[0.3em] text-xs transition-all shadow-[0_0_40px_rgba(245,158,11,0.3)]">
                          SUBSCRIBE
                       </Button>
                    </div>
                 </div>
              </AnimateIn>
           </div>
        </section>
      </main>
    </div>
  )
}
