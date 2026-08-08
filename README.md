<div align="center">

<h1>⬡ SPECTER-ARC</h1>
<p><strong>Headless Autonomous Financial Treasury for the Agentic Economy</strong></p>

<p>
  <img src="https://img.shields.io/badge/Arc_Network-Mainnet-06B6D4?style=for-the-badge&logoColor=white" />
  <img src="https://img.shields.io/badge/USDC-Circle-8B5CF6?style=for-the-badge&logoColor=white" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logoColor=white" />
</p>

<br/>

> **AI receives invoice. AI pays invoice. Zero humans.**

</div>

---

## What Is Specter-Arc?

Specter-Arc is a **headless, autonomous financial treasury node** built for the agentic economy.

$4.2 trillion in B2B invoices are processed manually every year. Specter-Arc eliminates every human in that chain.

A service sends a structured invoice to the Specter-Arc API. The node **cryptographically validates the payload**, checks it against your pre-configured rules, and **unilaterally fires a USDC micro-transaction** over the Arc blockchain — all without a single human approval, inbox, or UI click.

```
Invoice arrives → Cryptographic validation → USDC sent
     < 3 seconds. No humans. No permissions asked.
```

---

## How It Works

```
┌─────────────────────────────────────────────┐
│           Incoming JSON Invoice              │
│         (vendor API → Specter endpoint)      │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│         Specter-Arc Core Engine              │
│  • Parses & validates invoice structure      │
│  • Verifies cryptographic sender signature   │
│  • Checks against operator rule config       │
│  • Triggers autonomous approval if rules ✓   │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│          Arc Blockchain Settlement           │
│  • Programmatic wallet signs payload         │
│  • USDC dispatched to vendor address         │
│  • Transaction confirmed on-chain < 3s       │
└─────────────────────────────────────────────┘
```

---

## Live Demo Stats

| Metric | Value |
|---|---|
| Invoices Processed | **142** |
| USDC Settled On-Chain | **$24,530** |
| Human Approvals Required | **0** |
| Average Settlement Time | **< 3 seconds** |

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18 + TypeScript + Vite |
| **Animations** | Framer Motion 11 (scroll-driven, expo ease) |
| **Styling** | Tailwind CSS v4 + custom glassmorphism |
| **Blockchain** | Arc Network (EVM-compatible) |
| **Stablecoin** | USDC via Circle |
| **AI Runtime** | OpenAI SDK (agentic orchestration) |

---

## UI Architecture

The landing page is a fully scroll-driven, state-synchronized demo experience:

- **Hero** — Cinematic viewport-filling headline with live node status
- **Live Dashboard** — 3 real-time metric cards + an always-on looping terminal simulator
- **Interactive Walkthrough** — Sticky left-side execution graph that syncs to scroll position, 3 narrative steps that trigger state changes across the entire dashboard
- **Stat Bar** — 4 key protocol metrics
- **Footer CTA** — Early access request flow

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Run Locally

```bash
# Clone the repo
git clone https://github.com/PRACE1/specter-arc.git
cd specter-arc

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
```

Output is in `/dist` — deploy to Vercel, Netlify, or any static host.

---

## Deploy to Vercel (1 click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/PRACE1/specter-arc)

---

## Project Structure

```
specter-arc/
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx        # Cinematic hero with live status
│   │   ├── DashboardVisual.tsx    # 3 metric cards + executor
│   │   ├── TerminalSimulator.tsx  # Live looping terminal feed
│   │   ├── AnimatedCounter.tsx    # Scroll-triggered number counter
│   │   ├── WalkthroughSection.tsx # Sticky scroll-driven walkthrough
│   │   ├── StatBar.tsx            # Protocol stat highlights
│   │   └── Footer.tsx             # CTA + links
│   ├── App.tsx                    # Root layout + shared state
│   └── index.css                  # Design tokens + animations
├── public/
└── vite.config.ts
```

---

## Key Design Decisions

**Why headless?** Traditional treasury software requires human-in-the-loop approvals, ERP integrations, and weeks of onboarding. Specter-Arc's node accepts a structured payload and acts — period.

**Why Arc Network?** Arc's EVM-compatible chain offers sub-3-second finality with minimal gas costs, purpose-built for high-frequency micro-transactions in agentic workflows.

**Why USDC?** Programmable stablecoins are the only viable settlement layer for autonomous agents. No volatility, instant finality, Circle-regulated.

---

## Built For

**Hackathon 2026** — Agentic Finance Track

*1-person team. Built in one session.*

---

<div align="center">
  <p>
    <a href="https://github.com/PRACE1/specter-arc">GitHub</a> ·
    <a href="http://localhost:5173">Live Demo</a> ·
    <a href="mailto:">Contact</a>
  </p>
  <p><sub>© 2026 Specter-Arc Protocol. MIT License.</sub></p>
</div>
