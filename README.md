# Healthify – Healthy Meals Landing Page

A responsive, single-page marketing website for **Healthify**, a Dubai-based healthy meal delivery brand. It is built with **React**, **Vite** and **Tailwind CSS**, and recreates the supplied design pixel-for-pixel at desktop width (1440px), adapting cleanly to tablet and mobile screens.

**Live demo:** https://healthify-meals.vercel.app

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Requirements](#requirements)
4. [How to Run the Project](#how-to-run-the-project)
5. [Available Scripts](#available-scripts)
6. [Project Structure](#project-structure)
7. [Editing the Content](#editing-the-content)
8. [Styling and Design Tokens](#styling-and-design-tokens)
9. [Building for Production](#building-for-production)
10. [Deployment](#deployment)
11. [Troubleshooting](#troubleshooting)
12. [Credits](#credits)

---

## Features

**Page sections (top to bottom):**

| #   | Section          | What it shows                                                        |
| --- | ---------------- | -------------------------------------------------------------------- |
| 1   | Header           | Logo, navigation links and a "Get Started" button (sticky on scroll) |
| 2   | Hero             | "Healthy Meals, Happier Lives" headline, call-to-action buttons, hero image |
| 3   | Stats            | 1M+ meals, 30K+ customers, 4.8/5 rating, 550+ corporate clients       |
| 4   | About            | "Your Trusted Healthy Food Partner" with image collage                |
| 5   | Services         | Four meal-plan service cards                                          |
| 6   | Advantages       | "Why Choose Healthify" with four benefit cards                        |
| 7   | Growth Plans     | Essential, Balanced (most popular) and Performance pricing cards      |
| 8   | Steps            | "Healthy Eating in 3 Simple Steps"                                    |
| 9   | Testimonials     | Three customer reviews with star ratings                              |
| 10  | FAQ              | Expandable question-and-answer accordion                              |
| 11  | Call to Action   | "Transform Your Health, One Meal At A Time" banner                    |
| 12  | Footer           | Quick links, services, contact details and social media links         |

**Behaviour and quality:**

- Fully responsive (mobile, tablet, desktop) with a collapsible mobile menu
- The active navigation link updates as you scroll through sections
- Smooth scrolling to sections from the navigation
- Accessible FAQ accordion (`aria-expanded`, `aria-controls`, `inert` on closed panels)
- Floating WhatsApp chat button
- Hover, focus and pressed states on every interactive element
- Skip-to-content link, semantic HTML landmarks and descriptive image `alt` text
- Respects the user's "reduce motion" system setting
- Below-the-fold images are lazy-loaded

---

## Tech Stack

| Purpose    | Tool                                                          |
| ---------- | ------------------------------------------------------------- |
| UI library | [React 19](https://react.dev)                                 |
| Build tool | [Vite 8](https://vite.dev)                                    |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com) (via the Vite plugin) |
| Icons      | [lucide-react](https://lucide.dev) plus custom SVG icons       |
| Fonts      | Google Fonts: Newsreader, Inter, Caveat, Aref Ruqaa, Roboto Condensed |
| Linting    | ESLint 9 (flat config) with React Hooks rules                 |

The project has **no backend, database, API keys or environment variables**. It is a static front-end site.

---

## Requirements

Before you start, install:

1. **Node.js** version **20.19 or newer** (or **22.12 or newer**). npm is installed automatically with Node.js.
   - Download it from <https://nodejs.org> (choose the **LTS** version).
2. A code editor (optional), such as [VS Code](https://code.visualstudio.com).

Check that Node.js and npm are installed by opening a terminal and running:

```bash
node --version
npm --version
```

Both commands should print a version number, for example `v22.12.0` and `10.9.2`.

> An internet connection is needed the first time you install packages, and while the site runs, to load the Google Fonts.

---

## How to Run the Project

Follow these steps in order.

### Step 1 – Get the project files

Either clone the repository:

```bash
git clone <your-repo-url>
```

or download and unzip the project folder.

### Step 2 – Open a terminal in the project folder

Open a terminal (Command Prompt, PowerShell, Git Bash or the VS Code terminal) and move into the folder that contains `package.json`:

```bash
cd "path/to/Healthify"
```

Example on Windows:

```bash
cd "F:\UMAR LAKHANY\Projects\Healthify"
```

> Tip: in VS Code, open the folder with **File → Open Folder**, then open a terminal with **Terminal → New Terminal**. It opens in the project folder automatically.

### Step 3 – Install the dependencies

```bash
npm install
```

This downloads every package the project needs into a `node_modules` folder. You only need to do this once, and again if `package.json` changes.

### Step 4 – Start the development server

```bash
npm run dev
```

You should see output like this:

```
  VITE v8.x.x  ready in 500 ms

  ➜  Local:   http://localhost:5173/
```

### Step 5 – Open the website

Open **<http://localhost:5173>** in your browser.

The site reloads automatically when you save a file, so you can see changes immediately.

### Step 6 – Stop the server

In the terminal, press **`Ctrl + C`**.

---

## Available Scripts

Run these from the project folder:

| Command           | What it does                                                   |
| ----------------- | -------------------------------------------------------------- |
| `npm install`     | Installs all dependencies (run this first)                     |
| `npm run dev`     | Starts the development server at `http://localhost:5173`       |
| `npm run build`   | Creates an optimised production build in the `dist/` folder    |
| `npm run preview` | Serves the production build locally at `http://localhost:4173` |
| `npm run lint`    | Checks the code for errors and style problems with ESLint      |

---

## Project Structure

```
Healthify/
├── public/
│   └── favicon.svg              # Browser tab icon
├── src/
│   ├── assets/images/           # Photos used on the page
│   ├── components/
│   │   ├── cards/               # ServiceCard, PlanCard, AdvantageCard, TestimonialCard, FaqItem
│   │   ├── icons/               # Social media icons, custom health icons, decorative SVGs
│   │   ├── layout/              # Header, Footer, WhatsAppButton
│   │   ├── sections/            # One component per page section (Hero, About, Plans, ...)
│   │   └── ui/                  # Reusable pieces: Button, Logo, SectionHeader, TextLink, StarRating, IconLabel
│   ├── data/                    # All page text and content (see "Editing the Content")
│   ├── hooks/
│   │   └── useActiveSection.js  # Highlights the nav link for the section on screen
│   ├── App.jsx                  # Puts all sections together in order
│   ├── index.css                # Tailwind import, colours, fonts and base styles
│   └── main.jsx                 # App entry point
├── index.html                   # HTML template, page title, meta tags, Google Fonts
├── package.json                 # Dependencies and scripts
├── vite.config.js               # Vite configuration (React + Tailwind plugins)
└── eslint.config.js             # Linting rules
```

---

## Editing the Content

All text and content live in **`src/data/`**, separate from the layout code. To change what the page says, edit these files. You don't need to touch any components.

| File                 | Controls                                                       |
| -------------------- | -------------------------------------------------------------- |
| `site.js`            | Navigation links, phone number, email, location, WhatsApp link |
| `highlights.js`      | Hero benefits, the stats bar and the About section features     |
| `services.js`        | The four service cards (title, description, image)             |
| `advantages.js`      | The four "Why Choose Healthify" cards                          |
| `plans.js`           | Pricing plans: name, price, features, "most popular" flag      |
| `steps.js`           | The three "Simple Steps"                                       |
| `testimonials.js`    | Customer reviews, names, photos and star ratings               |
| `faqs.js`            | FAQ questions and answers                                      |
| `footer.js`          | Footer service list, social media links, legal links           |

**Example: change a plan's price.** Open `src/data/plans.js` and edit the `price` value:

```js
{
  name: 'Essential Plan',
  price: 299, // change this number
  ...
}
```

**Example: change the WhatsApp number.** Open `src/data/site.js` and update `phone`, `phoneHref` and `whatsappHref`.

**Replace an image:** put the new file in `src/assets/images/` with the same file name, or update the `import` line in the matching data or section file.

---

## Styling and Design Tokens

Styling uses Tailwind CSS utility classes directly in the components. The brand colours, fonts and shadows are defined once in `src/index.css` inside the `@theme { ... }` block:

```css
@theme {
  --font-serif: 'Newsreader', ...;   /* headings */
  --font-sans: 'Inter', ...;         /* body text */
  --color-forest-800: #13301f;       /* dark green */
  --color-olive-700: #53632d;        /* primary button green */
  ...
}
```

Change a value there and it updates everywhere it is used (for example, `bg-olive-700` or `text-forest-800`).

The page content area is limited to 1144px wide by the `container-page` utility, also in `index.css`.

---

## Building for Production

```bash
npm run build
```

This creates a `dist/` folder of optimised static files (HTML, CSS, JS and images). To check the production build locally:

```bash
npm run preview
```

Then open <http://localhost:4173>.

You can upload the `dist/` folder to any static hosting service.

---

## Deployment

### Vercel

1. Push the project to a GitHub repository.
2. Go to <https://vercel.com>, click **Add New → Project** and import the repository.
3. Vercel detects **Vite** automatically:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Deploy**. Every later push to the main branch redeploys automatically.

---

## Troubleshooting

| Problem | Solution |
| ------- | -------- |
| `'npm' is not recognized` or `command not found: npm` | Node.js isn't installed or isn't on your PATH. Install it from <https://nodejs.org>, then **restart the terminal**. |
| `Vite requires Node.js version 20.19+ or 22.12+` | Your Node.js is too old. Install the latest LTS version from <https://nodejs.org>. |
| PowerShell: `npm.ps1 cannot be loaded because running scripts is disabled` | Run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once in PowerShell, or use Command Prompt or Git Bash instead. |
| `Port 5173 is in use` | Vite picks the next free port automatically. Use the URL shown in the terminal. To pick a port yourself, run `npm run dev -- --port 3000`. |
| Errors after pulling new changes | Delete the `node_modules` folder and `package-lock.json`, then run `npm install` again. |
| Fonts look different from the design | The fonts load from Google Fonts. Check your internet connection. |
| Changes don't appear in the browser | Make sure `npm run dev` is still running, then hard-refresh with `Ctrl + Shift + R`. |
| Want to open the site on your phone (same Wi-Fi) | Run `npm run dev -- --host` and open the **Network** URL it prints. |

---

## Credits

- **Icons:** [Lucide](https://lucide.dev) (ISC License), plus custom line icons in `src/components/icons/HealthIcons.jsx`
- **Fonts:** [Google Fonts](https://fonts.google.com) (Newsreader, Inter, Caveat, Aref Ruqaa, Roboto Condensed), all under the SIL Open Font License
- **Photography:** the images in `src/assets/images/` are placeholders matching the design.

---

© Healthify. All rights reserved.
