# Nepali Grocery Japan — Project Documentation

**Himalayan Bazaar** is a full-stack web application for a Nepali grocery store in Japan. This document describes the project structure, how to run it, and where to edit things.

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Start, Stop & Scripts](#start-stop--scripts)
5. [Directory Reference](#directory-reference)
6. [Configuration & Environment](#configuration--environment)
7. [Editing Guide](#editing-guide)

---

## Overview

- **Purpose:** Marketing/informational website for a Nepali grocery store (Himalayan Bazaar) in Japan.
- **Architecture:** Monorepo-style: React frontend (Vite), Express backend, shared code. The server serves the built static files and handles client-side routing in production.
- **Design:** “Himalayan Warmth & Craft” — terracotta, saffron, forest green, warm cream; Playfair Display + Lato. See `ideas.md` for design notes.

---

## Tech Stack

| Layer        | Technology |
|-------------|------------|
| Frontend    | React 19, TypeScript, Vite 7, Wouter (routing) |
| Styling     | Tailwind CSS 4, Radix UI (shadcn-style), Framer Motion |
| Backend     | Node.js, Express |
| Package manager | pnpm (recommended); npm works with `--legacy-peer-deps` |

---

## Getting Started

### Prerequisites

- **Node.js** (v18+ recommended; project uses v25 in testing)
- **pnpm** (optional but recommended) or **npm**

### Install Dependencies

```bash
# With pnpm (recommended)
pnpm install

# With npm (use if pnpm is not installed)
npm install --legacy-peer-deps
```

> **Note:** The project uses Vite 7; some plugins expect older Vite. Using npm without `--legacy-peer-deps` may cause dependency conflicts. With pnpm, install usually works without flags.

### First-Time Run

1. Install dependencies (see above).
2. Start the dev server (see [Start, Stop & Scripts](#start-stop--scripts)).
3. Open **http://localhost:3000/** in your browser.

---

## Start, Stop & Scripts

### Start the development server

Runs Vite dev server with hot reload. Use this for day-to-day editing.

```bash
pnpm dev
# or
npm run dev
```

- **Local URL:** http://localhost:3000/
- **Network URL:** Shown in the terminal (e.g. http://192.168.x.x:3000/) when run with `--host`.

To run without binding to all interfaces (only localhost):

```bash
npx vite
```

### Stop the development server

- **If the server is in a terminal you can see:** press **Ctrl+C** in that terminal.
- **If it’s running in the background:** stop the Vite process:

```bash
pkill -f "vite"
```

### Build for production

Builds the React app and the Express server into `dist/`.

```bash
pnpm build
# or
npm run build
```

- **Output:**  
  - `dist/public/` — static frontend (HTML, JS, CSS, assets)  
  - `dist/index.js` — bundled Express server

### Run production build locally

After `pnpm build` or `npm run build`:

```bash
pnpm start
# or
npm start
```

Serves the app from `dist/` on port **3000** (or `PORT` env var). Open http://localhost:3000/.

### Other scripts

| Command | Description |
|--------|--------------|
| `pnpm preview` / `npm run preview` | Serves the **built** frontend only (no Express), useful to test the production build. |
| `pnpm check` / `npm run check` | TypeScript check (`tsc --noEmit`). |
| `pnpm format` / `npm run format` | Format code with Prettier. |

---

## Directory Reference

### Project root

| Path | Purpose |
|------|--------|
| `package.json` | Scripts, dependencies, pnpm config (patches, overrides). |
| `vite.config.ts` | Vite config: plugins, aliases (`@` → `client/src`, `@shared` → `shared`), dev server port (3000), build output. |
| `tsconfig.json` | TypeScript options for the whole project. |
| `tsconfig.node.json` | TypeScript config for Node/Vite config files. |
| `components.json` | shadcn/ui component config. |
| `.prettierrc`, `.prettierignore` | Prettier formatting. |
| `.gitignore` | Git ignore rules. |
| `ideas.md` | Design brainstorm and chosen direction (Himalayan Warmth & Craft). |
| `patches/` | pnpm patches (e.g. for `wouter`). Edit only when changing patched deps. |
| `.manus-logs/` | Dev-only logs from Manus debug plugin. Safe to ignore or delete. |

---

### `client/` — Frontend (React app)

Everything that runs in the browser.

| Path | Purpose |
|------|--------|
| `client/index.html` | Single HTML entry. Vite injects the app script here. Edit for `<title>`, meta tags, analytics, extra scripts. |
| `client/public/` | Static assets (favicon, images, etc.) served as-is. `public/__manus__/` is for the Manus debug script. |

---

### `client/src/` — Application source

| Path | Purpose |
|------|--------|
| `main.tsx` | React entry: mounts the app into `#root`. Rarely edited. |
| `App.tsx` | Root layout and routing (Wouter). Add/remove routes and global providers here. |
| `const.ts` | Client-only constants and helpers (e.g. OAuth login URL builder). |
| `index.css` | Global styles: Tailwind, design tokens (colors, radius), light/dark theme variables. |

---

### `client/src/pages/` — Screen components (one per route)

| File | Route | Purpose |
|------|--------|--------|
| `Home.tsx` | `/` | Hero, features, categories, featured products, testimonials, newsletter. |
| `Products.tsx` | `/products` | Product list, category filter, search. Product data is in-memory here. |
| `About.tsx` | `/about` | About the store. |
| `Contact.tsx` | `/contact` | Contact info, form, map. |
| `NotFound.tsx` | `/404` and fallback | 404 page. |

---

### `client/src/components/` — Reusable UI

| Path | Purpose |
|------|--------|
| `Navbar.tsx` | Top navigation (logo, links, mobile menu). |
| `Footer.tsx` | Site footer (links, copyright, etc.). |
| `Map.tsx` | Map on Contact page. |
| `ScrollToTop.tsx` | Scroll-to-top on route change. |
| `ErrorBoundary.tsx` | Catches React errors and shows fallback UI. |
| `ManusDialog.tsx` | Manus debug UI; optional. |
| `components/ui/` | Shared primitives (Button, Input, Card, Dialog, etc.). Edit when you want app-wide changes to a component. |

---

### `client/src/contexts/` — React context

| File | Purpose |
|------|--------|
| `ThemeContext.tsx` | Light/dark theme state and provider. |

---

### `client/src/hooks/` — Reusable hooks

| File | Purpose |
|------|--------|
| `useMobile.tsx` | Mobile viewport detection. |
| `usePersistFn.ts` | Stable function reference. |
| `useComposition.ts` | IME/composition (e.g. Japanese input) handling. |

---

### `client/src/lib/` — Utilities

| File | Purpose |
|------|--------|
| `utils.ts` | Helpers (e.g. `cn()` for class names). |

---

### `server/` — Backend (Express)

| Path | Purpose |
|------|--------|
| `server/index.ts` | Express app: serves `dist/public` (or equivalent), SPA fallback for all routes, port from `PORT` or 3000. Add API routes and middleware here. |

---

### `shared/` — Shared code (client + server)

| Path | Purpose |
|------|--------|
| `shared/const.ts` | Constants used by both client and server (e.g. session cookie name). Import via `@shared/const` (see Vite/TS aliases). |

---

## Configuration & Environment

- **Port:** Dev and production default to **3000**. Override with env var `PORT` for the production server.
- **Vite env:** Optional `.env` in project root; variables prefixed with `VITE_` are exposed to the client. Example: `VITE_ANALYTICS_ENDPOINT`, `VITE_ANALYTICS_WEBSITE_ID` (used in `client/index.html` for Umami). If not set, you may see warnings; the app still runs.
- **Aliases:** In code you can use `@/` for `client/src` and `@shared` for `shared` (see `vite.config.ts` and `tsconfig.json`).

---

## Editing Guide

Quick reference for common tasks:

| Goal | Where to edit |
|------|----------------|
| Change homepage content | `client/src/pages/Home.tsx` |
| Change products or categories | `client/src/pages/Products.tsx` |
| Change nav or footer | `client/src/components/Navbar.tsx`, `client/src/components/Footer.tsx` |
| Add a new page | Create a new file in `client/src/pages/`, then add a `<Route path="..." component={...} />` in `client/src/App.tsx` |
| Change colors, fonts, theme | `client/src/index.css` |
| Change routes | `client/src/App.tsx` |
| Add API endpoints | `server/index.ts` |
| Change shared constants | `shared/const.ts` (and `client/src/const.ts` for client-only values) |
| Tweak a UI primitive (button, input, card, etc.) | `client/src/components/ui/<component>.tsx` |
| Change dev server port | `vite.config.ts` → `server.port` |
| Change production port | Set `PORT` when running `pnpm start` / `npm start` |

---

## Summary

- **Start dev:** `pnpm dev` or `npm run dev` → open http://localhost:3000/
- **Stop dev:** Ctrl+C in the terminal, or `pkill -f "vite"`
- **Build:** `pnpm build` or `npm run build`
- **Run production:** `pnpm start` or `npm start`
- **Frontend lives in** `client/src/` (pages, components, styles). **Backend** is in `server/index.ts`. **Shared constants** are in `shared/const.ts` and `client/src/const.ts`.

For design rationale and color/typography choices, see `ideas.md`.
