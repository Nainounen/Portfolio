# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 16 portfolio site using TypeScript, React 19, and Tailwind CSS v4. The project follows Next.js App Router conventions with server components by default.

## Common Commands

### Development
```bash
npm run dev          # Start development server at http://localhost:3000
npm run build        # Production build
npm start            # Start production server
npm run lint         # Run ESLint
```

### Type Checking
```bash
npx tsc --noEmit     # TypeScript type checking (no test script configured)
```

## Architecture

### Next.js App Router Structure
- **`app/`**: Contains all routes and layouts using App Router conventions
  - `layout.tsx`: Root layout with font optimization (Geist Sans and Geist Mono)
  - `page.tsx`: Homepage route
  - `globals.css`: Global styles with Tailwind CSS v4 and CSS theme configuration
- **Path Alias**: `@/*` resolves to project root (configured in tsconfig.json)

### Styling
- **Tailwind CSS v4**: Uses `@tailwindcss/postcss` plugin (configured in postcss.config.mjs)
- **Inline Theme Configuration**: CSS custom properties defined in globals.css using `@theme inline`
- **Dark Mode**: Automatic based on system preference via `prefers-color-scheme`
- **Font Loading**: Next.js font optimization with `next/font/google` for Geist fonts

### TypeScript Configuration
- **Strict mode enabled**: All strict TypeScript checks are active
- **Target**: ES2017
- **Module Resolution**: Bundler mode (Next.js 16 requirement)
- **JSX**: Uses `react-jsx` (React 19)

### ESLint Configuration
- Uses ESLint v9 flat config format (eslint.config.mjs)
- Extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Key Notes

- This project uses **Tailwind CSS v4** (not v3), which has breaking changes including PostCSS-only configuration
- No separate `tailwind.config.*` file exists—theme configuration is inline in globals.css
- React 19 and Next.js 16 are used, which may have API differences from earlier versions
- The project has no test framework configured yet
