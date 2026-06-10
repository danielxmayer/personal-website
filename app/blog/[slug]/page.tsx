import Link from 'next/link'
import { getPost, getAllSlugs } from '@/lib/posts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { remark } from 'remark'
import html from 'remark-html'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  return {
    title: `${post.title} – Daniel Mayer`,
    description: post.perex,
    openGraph: {
      title: `${post.title} – Daniel Mayer`,
      description: post.perex,
      type: 'article',
      locale: 'cs_CZ',
      siteName: 'Daniel Mayer',
      publishedTime: post.date,
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)

  const processed = await remark().use(html).process(post.content)
  const contentHtml = processed.toString()

  return (
    <div className="min-h-screen text-gray-900">
      <Header activeSection="" />
      <main className="max-w-2xl mx-auto px-8 pt-32 pb-24">
        <Link
          href="/blog"
          className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors inline-block mb-10"
        >
          ← Zpět na blog
        </Link>

        <time className="text-xs font-semibold uppercase tracking-widest text-gray-400 block">
          {new Date(post.date).toLocaleDateString('cs-CZ', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
        <h1 className="font-barlow text-5xl font-black uppercase leading-none mt-2 mb-10"