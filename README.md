# Developer Portfolio Template

A modern, bilingual developer portfolio built with Astro 5, Tailwind CSS 4, and featuring dark/light theme support with a **Tech Terminal** design aesthetic and **Aston Martin F1 Racing Green** color scheme.

Made with 🧡 by [Web Reactiva](https://webreactiva.com)

## Quick Start

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321`

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview production build locally            |

## Customization Guide

### 1. Default Language (`src/config.ts`)

**This is the first thing you should configure.**

#### Step 1: Edit `src/config.ts`

```typescript
export const siteConfig = {
  defaultLang: 'en',      // Language at root URL (/)
  secondaryLang: 'es',    // Language at /es/ URL
} as const;
```

#### Step 2: Rename the pages folder

```bash
# Switching from English (default) to Spanish (default)
mv src/pages/es src/pages/en

# Switching from Spanish (default) to English (default)
mv src/pages/en src/pages/es
```

### 2. Profile Data (`src/content/profile.json`)

Update with your personal information. All user-facing text supports bilingual fields:

```json
{
  "name": "Your Name",
  "headline": { "en": "Your Title", "es": "Tu Titulo" },
  "bio": { "en": "Your bio...", "es": "Tu biografia..." },
  "experience": [...],
  "projects": [...],
  "skills": { "main": [...], "mobile": [...], "architecture": [...], "tools": [...] },
  "certifications": [...],
  "testimonials": [...],
  "podcast": [...]
}
```

### 3. UI Translations (`src/i18n/translations.ts`)

Modify UI text strings (navigation labels, buttons, section titles) for both languages. User-specific content lives in `profile.json`, not here.

### 4. Theme & Styling (`src/styles/global.css`)

Customize colors, fonts, and animations in the `@theme` block. The current theme uses:
- **Primary**: Aston Martin Racing Green (#229971)
- **Accent**: Lime (#c5e030)
- **Fonts**: JetBrains Mono (monospace throughout)

## Project Structure

```
src/
├── config.ts              # Language configuration (SINGLE SOURCE OF TRUTH)
├── components/
│   ├── TerminalWindow.astro   # macOS-style terminal chrome wrapper
│   ├── TerminalNav.astro      # Terminal-styled navigation + theme/lang toggles
│   ├── TerminalFooter.astro   # Footer with Web Reactiva attribution
│   ├── Command.astro          # Terminal command prompt with typewriter animation
│   ├── Prompt.astro           # user@host:path$ prompt rendering
│   ├── Whoami.astro           # Hero section ($ whoami)
│   ├── CatResume.astro        # About/bio section ($ cat resume.txt)
│   ├── History.astro          # Experience & Projects ($ history | grep)
│   ├── LsSkills.astro         # Skills as directory listing ($ ls -R)
│   ├── Testimonials.astro     # Recommendations ($ cat testimonials.log)
│   ├── Podcast.astro          # Podcast appearances ($ cat podcast.log)
│   └── Contact.astro          # Contact links ($ ./contact.sh)
├── content/
│   └── profile.json       # All user-specific content (bilingual)
├── i18n/
│   └── translations.ts    # UI strings only (bilingual)
├── layouts/
│   └── Layout.astro        # Base layout with theme system + View Transitions
├── pages/
│   ├── index.astro         # English (default language)
│   └── es/index.astro      # Spanish (secondary language)
└── styles/
    └── global.css          # Tailwind theme, animations, scrollbar styles
```

## Features

- **Dark/Light Mode**: System preference detection with manual toggle, persisted in localStorage
- **Bilingual**: Full EN/ES support with language toggle
- **Tech Terminal Aesthetic**: CRT scanlines, typewriter animations, command-prompt navigation
- **Responsive**: Mobile-first design
- **Fast**: Astro static generation with View Transitions and prefetching
- **Accessible**: Semantic HTML and keyboard navigation

## Tech Stack

- [Astro](https://astro.build) 5.x
- [Tailwind CSS](https://tailwindcss.com) 4.x
- TypeScript (strict mode)
- View Transitions API

## Deployment

This site is deployed automatically to GitHub Pages via GitHub Actions. Every push to `main` triggers a build and deploy.
