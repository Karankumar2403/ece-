# ECE Society — BIT Sindri | Website Rebuild

Welcome to the new, modernized web application for the Electronics and Communication Engineering (ECE) Society of BIT Sindri.

## Stack
- React 18, React Router v6
- Tailwind CSS v3
- Framer Motion (Animations)
- Lucide React (Icons)
- Vite (Bundler)

## Folder Structure
- `src/components/layout`: Common wrappers like Navbar, Footer, PageHeader.
- `src/components/ui`: Isolated generic components (GlassCard, Buttons, Tags).
- `src/components/sections`: Page-specific larger modules like Hero, AboutSection.
- `src/data`: Mocked static data for Events, Teams, Faculty, Alumni, and Testimonials.
- `src/lib`: Hooks and animation configurations.
- `src/pages`: Distinct route views mapped to React Router.

## Getting Started

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```
Provides hot module reloading via Vite at `http://localhost:5173`.

3. **Build for Production**
```bash
npm run build
```
Outputs the static bundle into `/dist` which can be served by any static host.

## Deployment
For Vercel, a `vercel.json` is provided for URL rewrites pointing all traffic to `index.html` allowing React Router to manage state. For Apache servers, an `.htaccess` is similarly provided in the `/public` directory.
