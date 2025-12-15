# Levon Melkonyan - Portfolio

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React** - UI framework
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   │   ├── AsciiWave.tsx    # Animated ASCII background
│   │   ├── Card.tsx         # Card components
│   │   └── SectionTitle.tsx # Section headers
│   └── layout/          # Layout components
│       ├── Navbar.tsx
│       └── Footer.tsx
├── data/                # Content data files
│   ├── projects.ts      # Project metadata
│   ├── inspiration.ts   # Links page content
│   ├── jams.ts          # Music/video content
│   └── posts.ts         # Blog posts (future use)
├── routes/              # Page components
│   ├── Home.tsx
│   ├── MicroLoopPage.tsx
│   ├── BassMINTPage.tsx
│   ├── VoicePage.tsx
│   ├── PrisonIslandPage.tsx
│   ├── ContactPage.tsx
│   ├── ResumePage.tsx
│   └── LinksPage.tsx
├── App.tsx              # Router setup
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## Customizing Content

### Projects

Edit `src/data/projects.ts` to update project information:

```typescript
export const projects: Project[] = [
  {
    id: 'your-project',
    slug: 'your-project',
    name: 'Your Project',
    shortDescription: 'Brief description',
    fullDescription: 'Detailed description...',
    tags: ['tag1', 'tag2'],
    stack: ['Tech 1', 'Tech 2'],
    links: {
      github: 'https://github.com/...',
      demo: 'https://...',
    },
    images: ['/images/project.jpg'],
    highlights: ['Highlight 1', 'Highlight 2'],
  },
  // ...
]
```

### Inspiration/Links

Edit `src/data/inspiration.ts` to add resources to the Links page.

### Personal Info

Update these files with your information:
- `src/routes/Home.tsx` - Bio and tagline
- `src/routes/ContactPage.tsx` - Email and social links
- `src/routes/ResumePage.tsx` - Skills overview
- `src/components/layout/Footer.tsx` - Social links

### Resume PDF

Place your resume at `public/assets/Levon_Melkonyan_Resume.pdf`

### Images

Place project images in `public/images/` and reference them in the data files.

## Deployment to GitHub Pages

### Setup

1. Make sure your repository is named `<username>.github.io` or configure for project pages.

2. For project pages, update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ...
   })
   ```

3. Update `public/404.html` if using project pages:
   ```javascript
   var pathSegmentsToKeep = 1; // Change from 0 to 1
   ```

### Deploy

```bash
# Build and deploy to gh-pages branch
npm run deploy
```

### Manual Deployment

1. Build the project: `npm run build`
2. The output is in the `dist/` folder
3. Push the contents of `dist/` to your GitHub Pages branch

## Design Notes

### Colors

The color scheme is defined in `tailwind.config.js`:

- `accent` - Primary accent color (teal by default)
- `surface` - Background surfaces
- Customize these to match your brand

### Animations

CSS transitions and keyframes are used for:
- Page load fade/slide effects
- Hover states on cards and buttons
- ASCII wave background animation

All animations respect `prefers-reduced-motion` for accessibility.

### ASCII Theme

The site uses ASCII-style decorative elements:
- `//` prefixes on section titles
- `>>` hover effects on navigation
- Animated sine wave background on home page
- Console-style dividers

## License

MIT - Feel free to use this as a template for your own portfolio!

---

Built with ♪ by Levon Melkonyan
