# 🗂️ Project Hub

A premium, production-ready personal project portfolio / link hub built with **React + Vite + Tailwind CSS**.

Live demo: `https://yourusername.github.io/project-hub/`

---

## ✨ Features

- **Hero section** with animated gradient background and CTA buttons
- **Project cards** with thumbnail placeholders, status badges, tech stack tags, and copy-link button
- **Real-time search** — filters by name, description, category, tech stack, and status
- **Category filter** pills — dynamically generated from your project data
- **Status filter** — All / Live / In Development / Maintenance / Archived
- **Sort options** — Featured, Newest, Oldest, A→Z, Z→A
- **Tech tag click-to-filter** — click any tech badge to filter by that technology
- **Empty state** with reset button
- **Dark mode** toggle — persists in `localStorage`, respects system preference
- **Featured projects** section shown separately when no filters are active
- **About section** describing the hub
- **Contact section** with email, GitHub, Facebook, LinkedIn links
- **Back to top** button
- **Fully responsive** — 1 / 2 / 3 / 4 column grid depending on screen size
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation, focus states
- **SEO** — title, meta description, Open Graph, Twitter Card tags
- **GitHub Pages ready** — correct `base` path configured in `vite.config.js`

---

## 📁 Project Structure

```
project-hub/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navbar with dark mode toggle + mobile menu
│   │   ├── Hero.jsx            # Hero section with CTA buttons
│   │   ├── ProjectsSection.jsx # Main projects area with filter state
│   │   ├── FilterBar.jsx       # Search, category, status, sort controls
│   │   ├── ProjectCard.jsx     # Individual project card
│   │   ├── EmptyState.jsx      # No results UI
│   │   ├── AboutSection.jsx    # About this hub
│   │   ├── ContactSection.jsx  # Contact links
│   │   ├── Footer.jsx          # Footer
│   │   └── BackToTop.jsx       # Scroll-to-top button
│   ├── data/
│   │   └── projects.js         # ← EDIT THIS to add/remove projects
│   ├── hooks/
│   │   └── useDarkMode.js      # Dark mode hook
│   ├── utils/
│   │   └── helpers.js          # Filter/sort logic, formatters, color maps
│   ├── App.jsx
│   ├── App.css
│   ├── index.css               # Tailwind + base styles
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## ✏️ How to Edit Project Data

All project data lives in one file:

```
src/data/projects.js
```

Each project is an object in the `projects` array:

```js
{
  id: "my-project",           // unique slug, no spaces
  name: "My Project",         // display name
  description: "Short description of what this project does.",
  category: "Website",        // Website | Business System | HR System |
                              // Form System | Dashboard | Tool | Experiment | Other
  status: "Live",             // Live | In Development | Maintenance | Archived
  url: "https://example.com", // live URL — leave "" if not deployed
  repoUrl: "https://github.com/you/repo", // GitHub URL — leave "" if private
  techStack: ["React", "Tailwind", "Firebase"],
  featured: true,             // true = shown in Featured section
  updatedAt: "2026-05-05",    // ISO date YYYY-MM-DD
  thumbnail: "",              // image URL — leave "" for auto gradient placeholder
  notes: "Internal notes",    // not shown in UI
}
```

**To add a project:** copy any existing object, change the values, save.  
**To remove a project:** delete the object from the array.  
**To reorder featured:** set `featured: true` on the projects you want highlighted.

---

## 🎨 Customization

### Update your personal info

| File | What to change |
|------|---------------|
| `src/components/Hero.jsx` | GitHub URL, email address |
| `src/components/ContactSection.jsx` | All contact links and values |
| `src/components/Footer.jsx` | GitHub URL |
| `index.html` | Site title, meta description, canonical URL, OG image |

### Change the accent color

The default accent is **indigo**. To change it, do a find-and-replace across `src/`:

- Replace `indigo-600` → `blue-600` (or any Tailwind color)
- Replace `indigo-500` → `blue-500`
- Replace `indigo-400` → `blue-400`
- Replace `indigo-50` → `blue-50`
- Replace `indigo-900` → `blue-900`

### Change the GitHub Pages base path

In `vite.config.js`, update the `base` to match your repository name:

```js
base: '/your-repo-name/',
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deploy to GitHub Pages

### Option A — Manual (recommended for beginners)

1. Run `npm run build`
2. Create a GitHub repository named `project-hub` (or any name)
3. Push the entire project to the `main` branch
4. Go to **Settings → Pages**
5. Under **Source**, select **GitHub Actions**
6. Create `.github/workflows/deploy.yml` (see below)
7. Push — GitHub Actions will build and deploy automatically

**`.github/workflows/deploy.yml`:**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: project-hub/package-lock.json
      - run: npm ci
        working-directory: project-hub
      - run: npm run build
        working-directory: project-hub
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: project-hub/dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Option B — gh-pages package

```bash
npm install --save-dev gh-pages
npm run deploy
```

Make sure `homepage` in `package.json` matches your GitHub Pages URL.

---

## 🔗 After Deployment

Update these placeholders with your real URLs:

- `index.html` → canonical URL, OG image URL
- `src/components/Hero.jsx` → GitHub link, email
- `src/components/ContactSection.jsx` → all contact links
- `src/components/Footer.jsx` → GitHub link
- `src/data/projects.js` → all project URLs

---

## 📋 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19 | UI framework |
| Vite | 8 | Build tool |
| Tailwind CSS | 4 | Styling |
| Lucide React | 1.14 | Icons |

---

## 📄 License

MIT — free to use and modify for personal and commercial projects.
