# joshuacarisma.com

Personal website for Joshua Carisma — coach, builder, and systems thinker exploring the future of health, work, and human growth.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Blog:** MDX
- **Hosting:** Vercel
- **Domain:** joshuacarisma.com (via Porkbun)

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, featured projects, writing preview |
| About | `/about` | Full story and background |
| Projects | `/projects` | Portfolio of work |
| Writing | `/blog` | Essays and articles |
| Coaching | `/coaching` | Coaching work |
| Contact | `/contact` | Get in touch |

## Getting Started

Clone the repo and run locally:

```bash
git clone git@github.com:JoshuaCarisma/joshuacarisma.com.git
cd joshuacarisma.com
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/          # Pages (Next.js App Router)
components/   # Nav, Footer, shared UI
content/blog/ # MDX blog posts
public/       # Images and static assets
lib/          # Utilities
```

## Deployment

Deployed automatically via Vercel on every push to `main`.
