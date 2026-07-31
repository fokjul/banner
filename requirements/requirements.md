# Banner-PTS Project Requirements

Create a new React+Vite project called "banner-pts" in the parent directory of bcit-labstats. The project should use the exact same tech stack and configuration as bcit-labstats.

## Environment Requirements
- Node.js 20.x.x (or latest LTS) - create .nvmrc file
- npm 10.x.x

## Tech Stack Requirements

### Core Dependencies
- React 18.3.1
- React DOM 18.3.1
- React Router DOM 7.0.2
- Axios 1.7.9
- Font Awesome (free, pro, pro-webfonts, svg-core, react-fontawesome) - same versions as bcit-labstats

### Dev Dependencies
- Vite 6.3.5
- @vitejs/plugin-react 4.3.4
- sass-embedded 1.82.0
- ESLint 9.15.0 with @eslint/js, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-refresh
- globals 15.12.0
- Storybook 10.2.14 with @storybook/react-vite, @chromatic-com/storybook, @storybook/addon-vitest, @storybook/addon-a11y, @storybook/addon-docs, @storybook/addon-onboarding, eslint-plugin-storybook, prop-types
- Vitest 4.0.18 with @vitest/browser-playwright, @vitest/coverage-v8
- Playwright 1.58.2
- @types/react 18.3.12
- @types/react-dom 18.3.1

## Project Structure
Replicate the same folder structure as bcit-labstats:
- src/components/ (with Atoms, GeneralTemplates, Layout, Navigation, Panels, etc.)
- src/contexts/
- src/data/
- src/prototypes/
- src/routes/
- src/stories/
- src/styles/partials/
- src/utilPages/
- public/
- .storybook/

## Configuration Files
- Copy and adapt vite.config.js from bcit-labstats
- Copy and adapt eslint.config.js from bcit-labstats
- Copy and adapt .npmrc from bcit-labstats (if exists)
- Copy vercel.json from bcit-labstats for Vercel deployment with SPA routing
- Copy .gitignore from bcit-labstats for version control
- Copy and adapt README.md from bcit-labstats
- Copy index.html from bcit-labstats as HTML entry point template
- Create .nvmrc file with Node.js version
- Set up Storybook configuration matching bcit-labstats
- Configure Vitest with Playwright browser

## Scripts in package.json
- dev: "vite"
- build: "vite build"
- lint: "eslint ."
- preview: "vite preview"
- storybook: "storybook dev -p 6006"
- build-storybook: "storybook build"

## Additional Setup
- Copy the SCSS partials structure from bcit-labstats/src/styles/partials/
- Copy any shared utility components or patterns from bcit-labstats
- Set up the same base HTML template
- Configure the same SCSS variables and mixins

## Instructions
1. Create the project in /Users/yfok7/Documents/banner-pts
2. Initialize with npm create vite@latest banner-pts -- --template react
3. Install all dependencies matching bcit-labstats versions
4. Copy and adapt configuration files
5. Set up the folder structure
6. Copy SCSS partials and styles
7. Initialize Storybook with the same configuration
8. Ensure all scripts work correctly
9. Verify the dev server starts successfully
