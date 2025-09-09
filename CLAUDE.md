# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Architecture

This is a Next.js 14 bilingual newsletter application for ForPublic.id that focuses on Indonesian public policy news and analysis.

### Core Technologies
- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS 4.1.9 with shadcn/ui components
- **UI Components**: Radix UI primitives via shadcn/ui
- **Fonts**: Playfair Display, Merriweather, Geist Mono
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

### Key Architecture Patterns

**Bilingual Support**: 
- Language context in `contexts/language-context.tsx` manages Indonesian/English switching
- Translation system in `lib/i18n.ts`
- All content has both `id` and `en` versions
- Language preference persisted in localStorage

**Data Management**:
- Newsletter data is mock data in `lib/newsletter-data.ts`
- Categories and content are defined with bilingual support
- Helper functions: `getNewsletters()`, `getCategories()`, `getNewsletterBySlug()`

**Component Structure**:
- UI components in `components/ui/` (shadcn/ui)
- Feature components in `components/` root
- App Router pages in `app/` directory
- Context providers wrap the app in `app/layout.tsx`

**Routing**:
- `/` - Homepage with featured content
- `/category/[slug]` - Category-specific newsletter listings
- `/newsletter/[slug]` - Individual newsletter pages
- `/archive` - Archive of all newsletters
- `/categories` - Category overview
- `/subscribe/*` - Subscription flow pages
- `/unsubscribe` - Unsubscribe page

### Configuration Notes
- TypeScript and ESLint errors are ignored during builds (`next.config.mjs`)
- Images are unoptimized for deployment compatibility
- Uses pnpm as package manager
- Shadcn/ui configured with "new-york" style and CSS variables

### Content Categories
Six main categories: Policy Watch, Civic Updates, Public Data, Government, Community, Investigations - each with Indonesian/English translations and emoji icons.