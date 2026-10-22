# Qiskit Fall Fest 2026 Budapest

React + TanStack Start + Tailwind. Run `npm install`, then `npm run dev`.

## Updating event content

All organizer-editable content is in `src/data/event.ts`:

- `event`: confirmed date, doors-open time, programme start/end, host, and theme. Friday, October 30, 2026: doors open 13:45, programme 14:30–19:00, Europe/Budapest.
- `speakers`: six profiles in the required display order, with separate event roles and professional positions, organizations, short previews, and `fullBio` paragraphs. Import a photo from `src/assets/` and set `photo`, or place it in `public/speakers/` and use `/speakers/filename.jpg`. Leave unavailable profile links as `null` and other links as an empty array.
- `sessions`: edit titles, descriptions (one string per paragraph), start/end times, session type, location, prerequisites, topics, and resource links. Keep unconfirmed times `null`. Assign a speaker by adding their stable ID to `speakerIds`; both agenda names and speaker profile talks derive from this one reference.
- `partners`: replace names, categories, logos, and optional website links here. Add official assets to `public/partners/` and set `logo` to `/partners/filename.png`, or import from `src/assets/`. Logos use contain sizing. IBM Quantum, BME, Department of Networked Systems and Services, and black Qiskit logos use official local assets. Comp1 and Comp2 remain temporary names with logo placeholders.
- `REGISTER_URL`, `venue`, `team`, `faq`, and `contact` remain in the same file.

The twelve programme entries include registration, five presentations/opening sessions, two quizzes, two breaks, the panel, and networking. Profiles derive their sessions from speaker IDs. The panel includes Zoltán, Szabolcs, Bálint, Dániel and János; János has no solo talk. Five speaker photos were matched by filename; Dániel’s portrait is missing. No external profile or partner URLs are fabricated.

Organizer checks: confirm Bacsárdi’s academic rank (Assistant or Associate Professor); the public profile uses his confirmed department-head position. Confirm the adjusted 15:00–15:25 algorithm session slot. The panel discrepancy is resolved by the latest instruction to include Bálint and János, alongside the previously designated panelists.

## Components and checks

The homepage sections live in `src/components/sections/`. `src/components/EventDetails.tsx` shares the existing Radix dialog for speaker profiles and session details. Global styling is in `src/styles.css`, navigation in `src/components/SiteNav.tsx`, and metadata in `src/routes/index.tsx` and `src/routes/__root.tsx`.

- `npm run build` — production build
- `npx tsc --noEmit` — TypeScript check
- `npm run lint` — whole-project lint (the existing checkout includes unrelated formatting violations)

Commits pushed to the connected branch sync to Lovable. Preserve published Git history.
