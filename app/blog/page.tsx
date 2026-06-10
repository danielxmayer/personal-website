import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog – Daniel Mayer',
  description: 'Pohled zevnitř na CZ mediální trh.',
  openGraph: {
    title: 'Blog – Daniel Mayer',
    description: 'Pohled zevnitř na CZ mediální trh.',
    type: 'website',
    locale: 'cs_CZ',
    siteName: 'Daniel Mayer',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen text-gray-900">
      <Header activeSection="" />
      <main className="max-w-3xl mx-auto px-8 pt-32 pb-24">
        <div className="mb-14">
          <span className="section-label text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 block">
            Zápisky
          </span>
          <h1 className="font-barlow text-6xl font-black uppercase leading-none mb-3">Blog</h1>
          <p className="text-gray-500 text-lg">Pohled zevnitř na CZ mediální trh</p>
        </div>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-12">
              <time className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                {new Date(post.date).toLocaleDateString('cs-CZ', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <h2 className="text-2xl font-bold mt-2 mb-3 leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:text-gray-500 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">{post.perex}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-semibold text-gray-900 hover:text-gray-500 transiti