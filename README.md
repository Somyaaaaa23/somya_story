# Somya Upadhyay — Origin Story Portfolio

A playful, explorable developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS, GSAP/ScrollTrigger, and Motion for React.

## Requirements
- Node.js 20.9+ (recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project map

- `app/page.tsx` — page entry point
- `app/layout.tsx` — metadata and document shell
- `app/globals.css` — design tokens, responsive layouts, animations, and styles
- `components/OriginStory.tsx` — opening scene, narrative sections, GSAP reveals, dialog state
- `components/Navigation.tsx` — responsive navigation and recruiter shortcut
- `components/WorldMap.tsx` — interactive map destinations
- `components/DetailPanel.tsx` — accessible project/research/leadership detail drawer
- `components/RecruiterPanel.tsx` — concise recruiter view
- `data/world.ts` — editable content for destinations and recruiter summary

## Personalize before publishing

1. In `components/OriginStory.tsx`, replace `ADD-YOUR-EMAIL@example.com` with the email address you want public.
2. In `components/RecruiterPanel.tsx`, replace the generic GitHub and LinkedIn URLs with your profiles.
3. Add your current résumé PDF as `public/resume.pdf`, or change the résumé link.
4. In `data/world.ts`, verify every achievement, project description, publication status, and technical contribution. Add live demo/repository/publication URLs where available.
5. Add project screenshots under `public/` and link them from the relevant case studies when you build the next stage.
6. Check all links and test the site on mobile before deploying.

## Notes

- The project uses CSS-drawn editorial artwork instead of external stock imagery, so the first screen has no image download dependency.
- The world destinations are keyboard-focusable buttons. Press Escape to close a dialog. Reduced-motion preferences are respected.
- The résumé file and personal social URLs are placeholders until you add your own.
- `npm run build` is the production build check. `npm run lint` is included as a convenience but the exact lint command can vary with the installed Next.js version; use `npx eslint .` if needed.

## Deploy

Push the project to GitHub, import it into Vercel, and deploy with the default Next.js settings. Add your domain after confirming the production build and mobile layout.
