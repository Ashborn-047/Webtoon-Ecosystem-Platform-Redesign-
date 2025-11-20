# 🎨 Webtoon Ecosystem Platform Redesign

> Strategic UX transformation of Webtoon's web platform — featuring a modular homepage redesign, micro-personalization engine, and Canvas creator visibility upgrade. Built for portfolio demonstration with full research documentation and ROI projections.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.0-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8.svg)](https://tailwindcss.com/)

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

### Installation

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
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `.next` folder.

### Start Production Server

```bash
npm start
```

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
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with LayoutShell
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Global styles
│   │   ├── home/              # Home page components
│   │   ├── profile/           # Profile pages (subscriptions, comments, etc.)
│   │   ├── categories/       # Categories page
│   │   ├── rankings/          # Rankings page
│   │   ├── canvas/            # Canvas page
│   │   ├── shop/              # Shop page
│   │   └── creators101/       # Creators 101 page
│   ├── components/
│   │   ├── navigation/        # NavRail, TopHeader, LayoutShell
│   │   ├── layout/            # Footer component
│   │   ├── home/              # Homepage components
│   │   ├── ui/                # Reusable UI components
│   │   └── shared/           # Shared utilities
│   ├── hooks/                 # Custom React hooks
│   │   └── useNavStore.ts    # Navigation state management
│   ├── store/                 # Zustand stores
│   └── utils/                 # Utility functions
├── public/                    # Static assets
├── .gitignore
├── LICENSE
├── package.json
├── README.md
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
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

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library with hooks
- **[TypeScript 5.2](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 3.3](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Zustand](https://zustand-demo.pmnd.rs/)** - State management
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library

## 🚀 Deployment

### GitHub Pages (Automated)

This project is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - Save the settings

2. **Automatic Deployment**
   - Every push to `main` branch triggers the workflow
   - The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
     - Build the Next.js app as static files
     - Deploy to GitHub Pages automatically
   - Your site will be available at: `https://ashborn-047.github.io/Webtoon-Ecosystem-Platform-Redesign-/`

3. **Check Deployment Status**
   - Go to the "Actions" tab in your repository
   - You'll see the "Deploy to GitHub Pages" workflow running
   - Once complete, your site will be live

### Vercel (Alternative)

This Next.js application can also be deployed to Vercel:

1. **Connect Repository**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

2. **Automatic Deployment**
   - Every push to `main` branch triggers deployment
   - Preview deployments for pull requests
   - Zero-configuration needed

### Manual Build & Deploy

```bash
# Build the application for static export
npm run build

# The 'out' folder contains the static files
# Deploy the 'out' folder to any static hosting service
```

## 📊 Key Improvements

- ✅ Fixed navigation collapse with smooth transitions
- ✅ Removed horizontal overflow issues
- ✅ Added Webtoon green hover effects
- ✅ Implemented profile icon placeholders
- ✅ Enhanced profile tabs with rounded edges and glow
- ✅ Added scroll navigation to Continue Reading
- ✅ Replaced external images with solid color placeholders
- ✅ Updated content (The God of High School, Purple Hyacinth)

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
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for UX research and portfolio demonstration**

