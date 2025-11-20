# Figma Raw Import Directory

This directory is reserved for copying all Figma-generated UI components and exports from the `webtoon-redesign-figma` project.

## Purpose

Place all Figma exports here before organizing them into the final component structure.

## Directory Structure

- `ui/` - Generic UI components (buttons, cards, badges, etc.)
- `webtoon/` - Webtoon-specific components (SeriesCard, HeroPanel, etc.)
- `layout/` - Layout components (AppLayout, NavRail, TopHeader)
- `pages/` - Page components (Home, Categories, Rankings, etc.)
- `ImageWithFallback.tsx` - Image component with fallback handling

## Next Steps

After copying files here, they will be organized into:
- `src/components/ui/global/` for generic UI components
- `src/components/ui/webtoon/` for webtoon-specific components
- `src/components/navigation/` for layout components
- `src/app/` for page components

