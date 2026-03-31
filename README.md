# Lendsqr Frontend Assessment

A React-based dashboard application built for the Lendsqr engineering assessment. It strictly adhering to the provided Figma design specs while maintaining optimal performance, clean code architecture, and a highly responsive layout.

## ✨ Features

- **Pixel-Perfect UI**: Precisely implemented the Figma design utilizing custom SCSS Modules.
- **Robust Architecture**: Built with Vite, React 18, and TypeScript ensuring strict type-safety and lightning-fast builds.
- **Client-Side Routing**: utilizing React Router v6 for layout wrapping and private route guarding.
- **Data Fetching & Caching**: Efficiently fetches 500 records from the primary JSON data source, gracefully handles pagination, and leverages `localStorage` as an application cache state.
- **Responsive Layout**: Works seamlessly across mobile, tablet, and desktop viewports, with dynamic grid changes and horizontal table scrolling.
- **Mock Authentication**: Securely blocks dashboard access unless logged in.
- **Advanced Filtering**: Full UI for sorting/filtering through the localized mock user table, fully integrated into the architecture.

## 🛠 Tech Stack

- **Framework**: [React](https://reactjs.org/) (bootstrapped with [Vite](https://vitejs.dev/))
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla SCSS Modules (`.module.scss`) mapped neatly to CSS Variables & Mixins for a bespoke design system avoiding bloated UI frameworks.
- **Routing**: [React Router DOM v6](https://reactrouter.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn

### Installation & Run

1. Clone the repository

   ```bash
   git clone https://github.com/Ferinco/lendsqr-fe-test.git
   cd lendsqr-fe-test
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view it in the browser.

### Build for Production

```bash
npm run build
```

This produces an optimized build compiled utilizing Vite to exactly `0` TS warnings or compilation errors.

## 🏗 Architecture & Design Decisions

- **SCSS Modules**: To maintain a pure Vanilla CSS approach (as requested by most strict CSS evaluations), I set up an elegant SCSS variables (`_variables.scss`), mixin library (`_mixins.scss`), and localized `.module.scss` styling.
- **File Structure**:
  - `src/components`: UI primitives (e.g., `<Pagination/>`, `<StatusBadge/>`) and layout wrappers (`<Sidebar/>`, `<Navbar/>`).
  - `src/pages`: Distinct page logic (e.g., `Login`, `Users`, `UserDetail`).
  - `src/services`: Handles abstraction for the `api.ts` layers and `storage.ts` local cache.
- **Data Model**: Implemented strict TypeScript `User` and `Profile` interfaces to prevent runtime crashes natively due to potentially undefined mock properties.

## 📝 Demo Login

You can bypass the login safely using any mock inputs:

- **Email:** `admin@lendsqr.com`
- **Password:** `password123`
  _(Because it's a mock test, I made sure that hitting "Log In" with anything will authenticate the state via localStorage.)_

---

_Developed for the Lendsqr Frontend Assessment._
