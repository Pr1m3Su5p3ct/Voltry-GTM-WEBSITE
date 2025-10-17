# Voltry Website

The official website for Voltry Technologies - The Nervous System of the Modern Grid.

## 🚀 Live Demo

Visit the live website at [http://localhost:3000](http://localhost:3000) (development)

## 📦 Tech Stack

- **Framework**: Next.js 15+ (React 19)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Design System**: Built on top of @voltry/design-system

## 🎨 Features

- **Responsive Design**: Mobile-first, works beautifully on all devices
- **Animated Hero**: Interactive network visualization with animated particles
- **Component Sections**:
  - Hero with animated network visualization
  - Problem Statement with pain point cards
  - Solution Overview with 4-phase interactive cards
  - Social Proof with count-up metrics
  - Feature Highlights with alternating layouts
  - Comparison Table (Voltry vs Traditional DCIM)
  - Use Case Cards for different industries
  - Free Tier CTA with strong emphasis
  - Testimonials carousel
  - Open Source section with GitHub preview
  - Final CTA section
- **Navigation**: Responsive header with dropdown menus
- **Footer**: Comprehensive link structure with newsletter signup

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

### Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Lint code
npm run typecheck  # TypeScript type checking
```

## 📁 Project Structure

```
website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer with links
│   └── sections/          # Page sections
│       ├── HeroSection.tsx
│       ├── ProblemStatement.tsx
│       ├── SolutionOverview.tsx
│       ├── SocialProof.tsx
│       ├── FeatureHighlights.tsx
│       ├── ComparisonTable.tsx
│       ├── UseCaseCards.tsx
│       ├── FreeTierCTA.tsx
│       ├── Testimonials.tsx
│       ├── OpenSource.tsx
│       └── FinalCTA.tsx
├── public/                # Static assets
│   ├── Logo/             # Voltry logos
│   ├── Illustrations/    # Hero/feature illustrations
│   └── ICONS/            # Icons and graphics
└── styles/               # Additional styles

```

## 🎨 Brand Colors

- **Navy**: `#0A1628` (voltry-navy)
- **Electric Blue**: `#0095FF` (voltry-blue)
- **Purple**: `#8B5CF6` (voltry-purple)
- **Lime**: `#84CC16` (voltry-lime)

## 📝 Content Sections

### Hero Section
- Animated network visualization
- Primary CTAs: "$50K Free Install" and "Watch Demo"
- Social proof metrics

### Problem Statement
- $230B annual loss statistic
- 3 pain points: Dashboard chaos, Reactive alerts, Isolated failures

### Solution Overview
- 4 evolutionary layers:
  1. VoltryOS (Integration) - FREE
  2. VoltryPredict (Intelligence) - $50K/year
  3. VoltryCore (Hardware) - $200/sensor
  4. VoltryGuard (Control) - Enterprise

### Use Cases
- Data Centers
- Utilities & Substations
- DER & Microgrids
- Industrial Facilities

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Build

```bash
npm run build
npm run start
```

## 🔧 Configuration

Edit `next.config.js` to customize Next.js settings.

Edit `tailwind.config.ts` to customize Tailwind theme.

## 📄 License

MIT License - Voltry Technologies

## 🤝 Contributing

This is the official Voltry website. For contributions, please contact the team.

---

Built with ⚡ by Voltry Technologies
