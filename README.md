# FATT Inc. - Financial Analytics & Trading Technology

A modern, dark-mode financial markets news landing page built with React and Tailwind CSS. Features glassmorphism design, real-time market data displays, and multiple investor viewing modes.

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite)

## ✨ Features

- **Dark Mode Design** - OLED-friendly dark theme with ambient background lighting
- **Glassmorphism UI** - Frosted glass cards with backdrop blur effects
- **Investor Mode Toggle** - Switch between Retail (visual) and Pro (data-dense) layouts
- **Live Market Ticker** - Animated marquee with real-time price data
- **Multi-Page Navigation** - React Router with Home, Markets, About, and Pricing pages
- **Responsive Design** - Mobile-first layouts that work on all screen sizes
- **Security Focus** - Dedicated section highlighting encryption and privacy features

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/fatt-inc.git
cd fatt-inc

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── App.jsx                    # Main app with routing
├── main.jsx                   # Entry point
├── index.css                  # Tailwind imports & custom utilities
├── components/
│   ├── Navbar.jsx             # Navigation with mode toggle
│   ├── Hero.jsx               # Landing hero section
│   ├── Ticker.jsx             # Live market ticker
│   ├── NewsGrid.jsx           # News cards (mode-aware)
│   ├── SecuritySection.jsx    # Security features
│   ├── Testimonials.jsx       # User testimonials
│   ├── Partners.jsx           # Partner logos
│   └── Footer.jsx             # Multi-column footer
├── pages/
│   ├── HomePage.jsx           # Landing page
│   ├── MarketsPage.jsx        # Live market data table
│   ├── AboutPage.jsx          # Company info & team
│   └── PricingPage.jsx        # Pricing plans & FAQ
└── data/
    └── mockData.js            # Mock market & news data
```

## 🎨 Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-dark` | `#0B0F19` | Background |
| `brand-accent` | `#3B82F6` | Primary accent |
| `signal-up` | `#10B981` | Positive/gains |
| `signal-down` | `#EF4444` | Negative/losses |
| `glass-bg` | `rgba(255,255,255,0.05)` | Card backgrounds |

### Typography

- **UI Font**: Inter
- **Data Font**: IBM Plex Sans

### Custom Utilities

```css
.glass        /* Frosted glass effect */
.glass-card   /* Glass with hover states */
.text-glow    /* Blue text glow effect */
```

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing**: [React Router 6](https://reactrouter.com/)
- **Icons**: Heroicons (inline SVG)

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with news, ticker, testimonials |
| `/markets` | Live market data table with stats |
| `/about` | Company mission, stats, and team |
| `/pricing` | Three-tier pricing with FAQ |

## 🔧 Configuration

### Tailwind (`tailwind.config.js`)

Custom theme extensions for colors, fonts, and animations.

### PostCSS (`postcss.config.js`)

Using `@tailwindcss/postcss` for Tailwind v4 compatibility.

## 📝 Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📜 License

MIT © 2024 FATT Inc.

---

Built with ❤️ by FATT Inc.
