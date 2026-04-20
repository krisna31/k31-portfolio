# Jelvin Krisna Putra - Modern Creative Portfolio

A highly interactive, creative, and responsive personal portfolio built with modern web technologies. Designed with an "Aurora Glassmorphism" aesthetic, fluid physics-based animations, and a dynamic data-driven structure.

## Features

- **Aurora Glassmorphism Aesthetic**: Beautiful, glowing, animated background gradients with a subtle noise texture and frosted-glass UI components.
- **Physics-Based Animations**: Powered by `framer-motion`, sections elegantly glide and fade into view as you scroll.
- **Interactive Spotlight Cursor**: A custom glowing orb cursor that reacts to hover states and illuminates the background.
- **Dynamic Typewriter Effect**: Cycles through professional titles in the Hero section.
- **Fully Responsive**: Fluid typography and smart grids ensure the site looks perfect on phones, tablets, and desktops.
- **Data-Driven**: All content (Experience, Education, Projects, Certifications) is centralized in a single `src/data.js` file for extremely easy updates.

## Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons (FontAwesome 6)
- **Effects**: Typewriter Effect

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/krisna31/k31-portfolio.git
   ```
2. Navigate into the project directory:
   ```bash
   cd k31-portfolio
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
The compiled files will be output to the `dist/` directory, ready to be deployed to Vercel, Netlify, GitHub Pages, or any static hosting service.

## Updating Content
To update the portfolio with your own information, simply open `src/data.js` and modify the JSON structure. No need to touch the UI components!

## License
**All Rights Reserved**

This project and its original design, source code, and content are the exclusive property of Jelvin Krisna Putra. No license is granted to copy, distribute, or modify this work. Please see the [LICENSE](LICENSE) file for more details.
