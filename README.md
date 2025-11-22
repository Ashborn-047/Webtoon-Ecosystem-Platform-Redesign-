# 🎨 Webtoon Ecosystem Platform Redesign

> Strategic UX transformation of Webtoon's web platform — featuring a modular homepage redesign, micro-personalization engine, and Canvas creator visibility upgrade. Built for portfolio demonstration with full research documentation and ROI projections.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.0-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8.svg)](https://tailwindcss.com/)

## 🌐 Live Demo

**[View Live Site →](https://ashborn-047.github.io/Webtoon-Ecosystem-Platform-Redesign-/)**

The application is automatically deployed to GitHub Pages on every push to the main branch.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design Decisions](#design-decisions)
- [Tech Stack](#tech-stack)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project presents a comprehensive UX redesign of the Webtoon platform, featuring:

- **Collapsible Navigation**: Smooth sidebar collapse/expand with logo toggle
- **Enhanced Homepage**: Hero carousel, Continue Reading with progress indicators, personalized recommendations
- **Profile Management**: User profile pages with subscriptions, comments, following, and account settings
- **Creator Discovery**: Canvas sections, creator activity feeds, and follow mechanisms
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Design Philosophy

This redesign prioritizes **aesthetic fidelity**, **behavioral depth**, and **storytelling polish** over backend functionality. It's a UX demonstration prototype designed for portfolio presentation and research documentation.

## ✨ Key Features

### 1. Collapsible Navigation Rail
- **Logo Toggle**: Click the Webtoon logo to collapse/expand sidebar
- **Smooth Transitions**: 300ms animations for width changes
- **Webtoon Green Hover**: Subtle green glow on navigation items
- **Profile Footer**: Clickable avatar and profile section

### 2. Enhanced Homepage
- **Hero Carousel**: Multiple trending series with smooth transitions
- **Continue Reading**: Progress bars, episode counts, and scroll navigation
- **Personalized Recommendations**: "For You" section with match percentages
- **Daily Updates**: Filterable by day of week
- **Creator Activity**: Horizontal scrolling feed

### 3. Profile Pages
- **Subscriptions**: Recently updated, binge queue, and all subscribed series
- **Following**: Creator cards with follow/unfollow functionality
- **Comments**: User comment history
- **Account**: Profile settings and preferences

### 4. Design System
- **Soft UI**: Rounded corners, subtle shadows, and smooth transitions
- **Webtoon Green**: Consistent use of #00C373 for CTAs and active states
- **Gradient Placeholders**: Solid color placeholders for images
- **Responsive Grids**: Adaptive layouts for mobile, tablet, and desktop

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ashborn-047/Webtoon-Ecosystem-Platform-Redesign-.git
   cd Webtoon-Ecosystem-Platform-Redesign-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The app will run on your local machine without the GitHub Pages base path

### Build for Production

```bash
npm run build
```

The static export will be generated in the `out` folder, ready for deployment to GitHub Pages.

### Code Quality

```bash
# Run linter
npm run lint

# Type check
npm run type-check
```

## 📁 Project Structure

```
webtoon-redesign-final/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deployment workflow
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with LayoutShell
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Global styles
│   │   ├── home/              # Home page components
│   │   ├── profile/           # Profile pages (subscriptions, comments, etc.)
│   │   ├── categories/        # Categories page
│   │   ├── rankings/          # Rankings page
│   │   ├── canvas/            # Canvas page
│   │   ├── shop/              # Shop page
│   │   └── creators101/       # Creators 101 page
│   ├── components/
│   │   ├── navigation/        # NavRail, TopHeader, LayoutShell
│   │   ├── layout/            # Footer component
│   │   ├── home/              # Homepage components
│   │   ├── ui/                # Reusable UI components (Radix-based)
│   │   └── shared/            # Shared utilities
│   ├── hooks/                 # Custom React hooks
│   │   └── useNavStore.ts     # Navigation state management
│   ├── store/                 # Zustand stores
│   └── utils/                 # Utility functions
├── public/                    # Static assets
│   └── .nojekyll              # Prevents Jekyll processing on GitHub Pages
├── next.config.js             # Next.js configuration (static export settings)
├── tailwind.config.js         # Tailwind CSS customization
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Design Decisions

### Brand Identity
- **Webtoon Green (#00C373)**: Applied consistently to CTAs, navigation, and active states
- **Soft Shadows**: Subtle depth with rgba(0,0,0,0.08) shadows
- **Rounded Corners**: Consistent use of rounded-xl and rounded-2xl for soft UI

### Navigation
- **Collapsible Sidebar**: 260px expanded, 80px collapsed
- **Logo Toggle**: Webtoon logo acts as collapse/expand button
- **Smooth Transitions**: 300ms duration for all state changes
- **Green Hover Glow**: Subtle #00C373/10 background on hover

### Layout
- **Fixed Navigation**: NavRail and TopHeader are fixed position
- **Margin-based Offset**: Main content uses margin-left for clean transitions
- **No Overflow**: Proper width calculations prevent horizontal scrolling

### Typography
- **Section Headers**: text-2xl, font-semibold
- **Body Text**: text-sm to text-base
- **Consistent Spacing**: mb-6 to mb-8 between sections

## 🛠 Tech Stack

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router and static export
- **[React 18](https://react.dev/)** - UI library with hooks
- **[TypeScript 5.2](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 3.3](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library

## 🚀 Deployment

### GitHub Pages (Automated) ✅

This project is configured for **automatic deployment** to GitHub Pages:

#### Live Site
🌐 **[https://ashborn-047.github.io/Webtoon-Ecosystem-Platform-Redesign-/](https://ashborn-047.github.io/Webtoon-Ecosystem-Platform-Redesign-/)**

#### How It Works

1. **Automatic Deployment on Push**
   - Every push to the `main` branch triggers the GitHub Actions workflow
   - The workflow file: `.github/workflows/deploy.yml`

2. **Build Process**
   - Installs dependencies with `npm ci`
   - Builds the Next.js app as static files with `npm run build`
   - Exports to `out/` folder (configured in `next.config.js`)

3. **GitHub Pages Configuration**
   - **Source**: GitHub Actions (not branch-based)
   - **basePath**: `/Webtoon-Ecosystem-Platform-Redesign-/` (matches repo name)
   - **Static Export**: `output: 'export'` in `next.config.js`

#### Check Deployment Status

- Go to the **[Actions](https://github.com/Ashborn-047/Webtoon-Ecosystem-Platform-Redesign-/actions)** tab
- View the "Deploy to GitHub Pages" workflow runs
- Green checkmark = successfully deployed ✅

#### First-Time Setup (Already Done)

If you need to set this up on a fork:
1. Go to **Settings** → **Pages**
2. Under "Source", select **GitHub Actions**
3. Push to `main` branch to trigger deployment

### Local vs Production

| Environment | URL | Base Path | Build Command |
|------------|-----|-----------|---------------|
| **Local Development** | `http://localhost:3000` | None | `npm run dev` |
| **GitHub Pages** | `https://ashborn-047.github.io/...` | `/Webtoon-Ecosystem-Platform-Redesign-/` | `npm run build` |

### Alternative: Vercel

This Next.js app can also be deployed to Vercel:

1. Import the repository to [Vercel](https://vercel.com)
2. Vercel auto-detects Next.js settings
3. Deploy with one click
4. **Note**: Remove `basePath` and `assetPrefix` from `next.config.js` for Vercel deployment

## 📊 Key Improvements

- ✅ Fixed navigation collapse with smooth transitions
- ✅ Removed horizontal overflow issues
- ✅ Added Webtoon green hover effects
- ✅ Implemented profile icon placeholders
- ✅ Enhanced profile tabs with rounded edges and glow
- ✅ Added scroll navigation to Continue Reading
- ✅ Replaced external images with solid color placeholders
- ✅ Updated content (The God of High School, Purple Hyacinth)
- ✅ Configured automated GitHub Pages deployment

## 🤝 Contributing

This is a portfolio project created for UX research and demonstration purposes. Contributions are welcome for:

- Bug fixes
- Accessibility improvements
- Documentation enhancements
- Performance optimizations

Please open an issue or submit a pull request for any improvements.

## 📝 Notes

**Important**: This is an **unofficial redesign concept** created for UX research and portfolio purposes only. No affiliation with WEBTOON Entertainment Inc.

All design decisions, research findings, and recommendations are based on publicly available information and user research conducted independently.

## 👤 Author

**Pushan Bhattacharyya**

- GitHub: [@Ashborn-047](https://github.com/Ashborn-047)
- Portfolio: [Link Coming Soon]
- LinkedIn: [Your LinkedIn]

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for UX research and portfolio demonstration**

*Last Updated: November 2025*
