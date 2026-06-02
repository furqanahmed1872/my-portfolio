# Furqan — Portfolio v3

Premium full-stack developer portfolio with reference-inspired design elements.

---

## 🚀 Quick Start

```bash
npm install
cp .env.local.example .env.local   # fill in your values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## ✨ What's New in v3

### Inspired by your reference designs:
- **`<C/> Furqan` logo** style — like ref image 1 navbar
- **Vertical side nav** with section icons — like ref image 1 left panel
- **"Hey I'm Furqan" hero** — conversational intro matching ref image 1
- **Tech Stack icon grid** — exact layout from ref image 2 with skillicons.dev icons
- **Colorful project cards** — gradient thumbnails like ref image 2
- **Topographic background** on About section — like ref image 1
- **Rich multi-color sections** — blue, purple, amber, teal, coral tints per section
- **Goal & Mission cards** — 4-card 2×2 grid in About section
- **Enhanced transitions** — spring cubic-bezier on all cards, staggered reveals

---

## 📁 Project Structure

```
furqan-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── api/contact/route.ts    # Resend email API
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Top nav with social icons
│   │   │   ├── SideNav.tsx          # Vertical icon nav (ref image 1)
│   │   │   ├── Footer.tsx
│   │   │   └── SmoothScrollProvider.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx     # Topo bg + mission cards
│   │   │   ├── TechStackSection.tsx # Icon grid (ref image 2)
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx  # Gradient cards (ref image 2)
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── EducationSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── BackToTop.tsx
│   │       ├── CodeRainBackground.tsx
│   │       ├── RevealWrapper.tsx
│   │       ├── ScrollProgress.tsx
│   │       └── SectionHeader.tsx
│   ├── hooks/
│   │   ├── useReveal.ts
│   │   ├── useScrollProgress.ts
│   │   ├── useSmoothScroll.ts
│   │   └── useTypewriter.ts
│   ├── lib/
│   │   ├── data.ts     ← ALL CONTENT HERE
│   │   └── utils.ts
│   └── styles/globals.css
├── public/
│   ├── site.webmanifest
│   └── robots.txt
└── .env.local.example
```

---

## ✏️ Customising Content

**Everything lives in `src/lib/data.ts`:**

| Export | What it controls |
|--------|-----------------|
| `siteConfig` | Name, title, email, location |
| `socialLinks` | GitHub, LinkedIn, Twitter, Instagram |
| `heroRoles` | Typewriter strings |
| `techStack` | Icon grid — add/remove icons |
| `skillCategories` | Skills with levels |
| `projects` | Project cards — gradient, stack, links |
| `experiences` | Work timeline |
| `educations` | Degrees & certs |
| `testimonials` | Client quotes |
| `missionCards` | Goal/Mission cards in About |

### Adding your photo

Replace the `<div>` in `AboutSection.tsx` portrait card with:
```tsx
import Image from "next/image";
<Image src="/photo.jpg" alt="Furqan" fill className="object-cover" priority />
```
Place `photo.jpg` in `/public`.

### Adding a tech icon

In `data.ts`, add to `techStack`:
```ts
{ name: "Prisma", icon: "prisma", color: "#2D3748" }
```
Icons use [skillicons.dev](https://skillicons.dev) slugs.

### Changing project thumbnails

Each project has a `gradient` field — change to any CSS gradient:
```ts
gradient: "linear-gradient(135deg,#your-color 0%,#your-color2 100%)"
```
Or add a real `image` field and use `<Image>` in `ProjectsSection.tsx`.

---

## ⚙️ Environment Variables

```env
RESEND_API_KEY=re_your_key_here
CONTACT_EMAIL=you@yourdomain.com
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

Get a free Resend key at [resend.com](https://resend.com).

---

## 🚀 Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) and add env vars in:
**Settings → Environment Variables**

---

## 🎨 Color System

| Variable | Value | Used for |
|----------|-------|----------|
| `--bg` | `#f5f3ee` | Page background |
| `--blue` | `#1a4fd6` | Primary accent |
| `--purple` | `#5c4ed4` | Secondary accent |
| `--teal` | `#0d7e62` | Tertiary accent |
| `--amber` | `#b35d0a` | Warm accent |
| `--coral` | `#c14028` | Danger / highlight |

---

## 🔮 Future Enhancements

- [ ] Real project screenshot thumbnails
- [ ] Dark mode toggle
- [ ] Blog / writing section with MDX
- [ ] Vercel Analytics
- [ ] Animated page transitions
- [ ] Open Graph image (`next/og`)
- [ ] Project case study pages
