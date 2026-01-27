import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      title: "My Website Refresh",
      description: "New perspective on personal websites.",
      date: "2025",
      fullDate: "05/03",
      slug: "my-website-refresh",
    },
    {
      title: "Things I Use Daily: Tech Gear",
      description: "Some of my favorite tools and gear",
      date: "2024",
      fullDate: "01/28",
      slug: "things-i-use-daily-tech-gear",
    },
    {
      title: "My Notion Productivity Setup",
      description: "Workflow as a developer and creator (templates)",
      date: "2024",
      fullDate: "03/19",
      slug: "my-notion-productivity-setup",
    },
    {
      title: "Software Engineer's Productive and Minimal Desk Setup",
      description: "Curated to maximize my productivity.",
      date: "2024",
      fullDate: "01/01",
      slug: "software-engineers-productive-and-minimal-desk-setup",
    },
  ];

  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    if (!acc[post.date]) {
      acc[post.date] = [];
    }
    acc[post.date].push(post);
    return acc;
  }, {} as Record<string, typeof posts>);

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
        <div className="space-y-12">
          {Object.entries(postsByYear)
            .sort((a, b) => Number(b[0]) - Number(a[0]))
            .map(([year, yearPosts]) => (
              <div key={year} className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                  {year}
                </h2>
                {yearPosts.map((post, index) => (
                  <Link
                    key={index}
                    href={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-sm text-gray-500 dark:text-gray-500 min-w-[60px]">
                        {post.fullDate}
                      </span>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
