# WealthUp

A personalized wealth management dashboard that helps users understand their financial health, track their WealthUp Score, and follow an actionable roadmap toward financial independence.

---

## Overview

WealthUp provides a **Wealthometer** — a single view of your financial wellness. It combines a wealth score summary, a financial independence breakdown, and a step-by-step personalized roadmap with clear actions and recommended investments.

### Features

- **Wealth Score Summary** — Greeting and contextual message based on your profile (e.g., income strength vs. wealth efficiency), with a verified analysis badge.
- **Financial Independence Overview** — Visual breakdown of your current WealthUp Score across:
  - Emergency Funds  
  - Liquidity  
  - Investments  
  - Health Insurance  
  - Life Insurance  
  - Savings  
  Each category shows progress (e.g., 0/20 to 20/20) with color-coded gradients.
- **Personalized Roadmap** — Step-by-step plan (e.g., build emergency fund, optimize investments, maximize growth) with:
  - Priority labels (Critical, etc.)  
  - Descriptions and point gains (+20 pts, +12 pts, +8 pts)  
  - Quick actions (e.g., “Start Investing Today”)  
  - Saving amount selectors and recommended funds (e.g., HDFC Mid-Cap, Bandhan Small Cap)

---

## Tech Stack

| Category        | Technology                          |
|----------------|-------------------------------------|
| Framework      | [Next.js](https://nextjs.org/) 14   |
| UI             | [React](https://react.dev/) 18      |
| Language       | [TypeScript](https://www.typescriptlang.org/) |
| Styling        | [Tailwind CSS](https://tailwindcss.com/)     |
| Components     | [Radix UI](https://www.radix-ui.com/) (via Shadcn-style primitives) |
| Icons          | [Lucide React](https://lucide.dev/) |
| Fonts          | Inter, Urbanist (Google Fonts)       |

---

## Prerequisites

- **Node.js** 18.x or later  
- **npm** (or yarn/pnpm)

Install Node.js from [nodejs.org](https://nodejs.org/) if needed.

---

## Getting Started

### 1. Clone and install

```bash
git clone <repository-url>
cd wealthup
npm install
```

### 2. Run in development

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000) (Next.js default; port may differ if 3000 is in use).

### 3. Build for production

```bash
npm run build
```

### 4. Start production server

```bash
npm start
```

### 5. Lint

```bash
npm run lint
```

---

## Project Structure

```
wealthup/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts (Inter, Urbanist)
│   ├── page.tsx            # Home page → Wealthometer
│   └── globals.css         # Global styles
├── src/
│   ├── components/ui/      # Reusable UI (Button, Card, Badge, Input, Progress)
│   └── screens/
│       └── Wealthometer/
│           ├── Wealthometer.tsx
│           └── sections/
│               ├── WealthScoreSummarySection/
│               ├── FinancialIndependenceOverviewSection/
│               └── PersonalizedRoadmapSection/
├── public/                 # Static assets (e.g. logo, images)
├── package.json
├── tsconfig.json           # Path alias: @/* → ./src/*
└── tailwind.config.*
```

---

## Scripts

| Command        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start Next.js dev server       |
| `npm run build`| Build for production           |
| `npm run start`| Run production build locally   |
| `npm run lint` | Run ESLint                     |

---

## Environment

No environment variables are required for basic run/build. Add a `.env` or `.env.local` when you integrate APIs or secrets.

---

## License

See the repository or project root for license details.
