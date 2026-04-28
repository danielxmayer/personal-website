import { getAllPosts } from '@/lib/posts'
import HomeClient from '@/components/HomeClient'

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 2)
  return <HomeClient recentPosts={recentPosts} />
}
