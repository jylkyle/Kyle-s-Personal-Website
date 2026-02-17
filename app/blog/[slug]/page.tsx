import Link from "next/link";
import { notFound } from "next/navigation";

const posts: Record<string, { title: string; date: string; content: string }> = {
  "my-website-refresh": {
    title: "My Website Refresh",
    date: "May 3, 2025",
    content: `I used to wonder why my professors kept such simple websites—just lists of publications and projects. Now I understand: they focused on their work, letting it speak for itself.

For a long time, I treated my own site like a sandbox, full of half-baked posts and scattered components. It felt distracting and directionless. So I'm making a little change.

"There's a tremendous power in using the least amount of information to get a point across. — Rick Rubin"

That's the spirit behind this 2025 version of my personal website. Rather than implementing every new UI trend that catches my attention, I'm focusing on what matters most —curating work and references that reflect my journey and interests.

Don't get me wrong, I still enjoy experimenting with new web technologies, but I'm keeping that separate. This will be a focused space for sharing my work and the occasional life update. Peace ✌`,
  },
  "things-i-use-daily-tech-gear": {
    title: "Things I Use Daily: Tech Gear",
    date: "January 28, 2024",
    content: `Some of my favorite tools and gear that I use on a daily basis.`,
  },
  "my-notion-productivity-setup": {
    title: "My Notion Productivity Setup",
    date: "March 19, 2024",
    content: `Workflow as a developer and creator (templates)`,
  },
  "software-engineers-productive-and-minimal-desk-setup": {
    title: "Software Engineer's Productive and Minimal Desk Setup",
    date: "January 1, 2024",
    content: `Curated to maximize my productivity.`,
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <nav className="max-w-2xl mx-auto px-6 py-8 border-b border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-center text-sm">
          <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
            Index
          </Link>
          <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
            Blog
          </Link>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            {post.title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
            {post.date}
          </p>
          <div className="text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </article>
      </main>
    </div>
  );
}
