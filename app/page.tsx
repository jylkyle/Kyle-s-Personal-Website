import Link from "next/link";

export default function Home() {
  const latestPosts = [
    {
      title: "My Website Refresh",
      description: "New perspective on personal websites.",
      date: "05/03",
    },
    {
      title: "Things I Use Daily: Tech Gear",
      description: "Some of my favorite tools and gear",
      date: "01/28",
    },
    {
      title: "My Notion Productivity Setup",
      description: "Workflow as a developer and creator (templates)",
      date: "03/19",
    },
    {
      title: "Software Engineer's Productive and Minimal Desk Setup",
      description: "Curated to maximize my productivity.",
      date: "01/01",
    },
  ];

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
        <div className="space-y-16">
          {/* Hero Section */}
          <section>
            <h1 className="text-4xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Kyle Kim
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Software engineer in NYC (UTC-4) crafting delightful user experiences.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400">
              On YouTube I document my creative and tech journey with a community of
              <span className="font-medium"> 90K+ subscribers</span>.
            </p>
          </section>

          {/* Latest Posts */}
          <section>
            <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Latest Posts
            </h2>
            <div className="space-y-6">
              {latestPosts.map((post, index) => (
                <Link
                  key={index}
                  href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-sm text-gray-500 dark:text-gray-500 min-w-[60px]">
                      {post.date}
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
          </section>

          {/* Newsletter */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Newsletter
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
              Personal updates and insights on tech, design, productivity, and more! No spam
              — just valuable content.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-black rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </section>

          {/* Connect */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Connect
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
              Reach me at kyle@example.com or partners@example.com for business. Join my Discord
              community or connect with me on the platforms below.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Twitter
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
