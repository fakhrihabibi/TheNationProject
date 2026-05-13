# The Nation Landing Page

Modern landing page untuk The Nation, dibangun dengan React, Vite, TypeScript, dan Tailwind CSS.

## Teknologi

- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **Vitest** - Unit testing framework
- **ESLint & Prettier** - Code quality & formatting

## Requirements

- Node.js 16+ (LTS recommended)
- npm 8+

## Installation

Clone repository dan install dependencies:

```bash
git clone <repo-url>
cd Project\ The\ Nation
npm install
```

## Running the Project

### Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:3000`

### Build Production

```bash
npm run build
```

Output ada di `dist/` folder

### Preview Build

```bash
npm run preview
```

### Linting & Formatting

Check code quality:

```bash
npm run lint
```

Format code:

```bash
npm run format
```

### Testing

Run all tests:

```bash
npm run test
```

Interactive test UI:

```bash
npm run test:ui
```

Coverage report:

```bash
npm run test:coverage
```

## Project Structure

```
src/
 ├─ components/
 │  ├─ layout/          # Navbar, Footer, ErrorBoundary
 │  ├─ common/          # SectionIntro
 │  ├─ sections/        # HeroSection, EventSection, etc.
 │  ├─ cards/           # ServiceCard, EventCard, SocialLinkCard
 │  └─ index.ts         # Barrel exports
 ├─ pages/              # HomePage, NotFoundPage
 ├─ types/              # TypeScript interfaces
 ├─ utils/              # Helpers & content data
 ├─ styles/             # Global CSS
 ├─ __tests__/          # Unit tests
 ├─ assets/             # Images, icons, logos
 ├─ App.tsx             # Root component
 └─ main.tsx            # Entry point
```

## Key Features

✨ **Modern Architecture**
- TypeScript for type safety
- Component-based organization
- Barrel exports for clean imports
- Custom hooks & utilities

🎨 **Design System**
- Tailwind CSS with custom colors
- Custom fonts (Space Grotesk, Manrope)
- Responsive design (mobile-first)
- Smooth animations & transitions

⚡ **Performance**
- Code splitting with Vite
- Lazy loading of components
- Asset optimization
- Build size control

🛡️ **Reliability**
- Error boundary for crash handling
- Type safety with TypeScript strict mode
- ESLint for code quality
- Unit tests with Vitest

## Coding Guidelines

See [AGENTS.md](./AGENTS.md) and [GEMINI.md](./GEMINI.md) for detailed guidelines on:
- Project structure
- TypeScript best practices
- Component patterns
- Testing conventions
- Git workflow

## Quick Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run lint` | Check code quality |
| `npm run format` | Format code |
| `npm run test` | Run tests |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Follow the guidelines in [AGENTS.md](./AGENTS.md)
2. Use TypeScript for new components
3. Add tests for new features
4. Format code with Prettier before committing
5. Use semantic commit messages

## Notes

- File sensitif seperti `.env` dan dependency folder seperti `node_modules/` sudah di-ignore lewat `.gitignore`.
- `AGENTS.md` tidak ikut ke repository.

## Main Files

- `src/pages/HomePage.jsx` untuk halaman utama
- `src/components/` untuk section dan komponen UI
- `src/utils/content.jsx` untuk data konten landing page

## Git

Contoh commit message:

```bash
feat: initial project setup
```
