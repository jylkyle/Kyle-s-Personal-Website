# Kyle Kim - Personal Website

A minimal, clean personal website built with Next.js, inspired by modern personal portfolio designs.

## Features

- 🎨 Minimal, clean design
- 📱 Fully responsive
- 🌙 Dark mode support
- 📝 Blog functionality
- 🚀 Optimized for Vercel deployment

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production version:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx    # Individual blog post pages
│   │   └── page.tsx        # Blog index page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── public/                 # Static assets
└── package.json
```

## Customization

- Update personal information in `app/page.tsx`
- Add/edit blog posts in `app/blog/[slug]/page.tsx`
- Modify styles in `app/globals.css` and Tailwind config
- Update metadata in `app/layout.tsx`

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel** - Deployment platform
