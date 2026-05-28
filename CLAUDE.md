# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal web resume / portfolio (single-page app). Built with **Vite 5 + React 18 + Redux**. Deployed to Netlify (`netlify.toml` describes the build); a legacy GitHub Pages target still exists via `npm run deploy`. The `homepage` field in `package.json` points to the Netlify URL.

The project was originally bootstrapped with Create React App; CRA was retired in favour of Vite because CRA 5's webpack 4 toolchain is unmaintained and breaks on Node 22+.

## Commands

- `npm start` / `npm run dev` — Vite dev server with HMR.
- `npm run build` — production build into `build/` (kept as the output dir for compatibility with `gh-pages` and `netlify.toml`).
- `npm run preview` — serve the built bundle locally to verify production output.
- `npm test` — Vitest, single run. Run a single file: `npm test -- src/components/navigation/__tests__/Navigation.test.jsx`. Filter by name: `npm test -- -t "renders the section"`. Watch mode: `npm run test:watch`.
- `npm run deploy` — runs `predeploy` (build) then publishes `build/` to GitHub Pages via `gh-pages`. The active target is Netlify, so this is a legacy fallback.

There is no lint script. ESLint config was dropped together with CRA.

## Architecture

### Top-level composition
`src/index.js` wraps `<App>` in `<ReduxProvider>` and `<React.StrictMode>`, then renders into `#root` via React 18's `createRoot`. `src/App.js` is a flat composition of section components rendered in scroll order: `Navigation`, `WelcomePage`, `AboutPage`, `SkillsPage`, `ExperiencePage`, `LinksPage`, `ContactForm`. Each section receives an `id` prop used as the anchor target for in-page scrolling (`react-scroll`). There is no router — the whole resume is one scrolling page.

### Component layout convention
Every section in `src/components/<section_name>/` follows the same shape:
- `<SectionName>.js` — the component (JSX in `.js` is allowed via `vite.config.js > esbuild.loader`)
- `<SectionName>.css` — its styles
- `enums/<SectionName>Enum.js` — static text/data (titles, copy, list items) kept out of JSX
- `images/` — section-specific assets

When adding or editing copy, update the matching enum file rather than hard-coding strings in JSX. When adding a new section, mirror this folder layout and register it in `src/App.js`. Multi-card sections like `ExperiencePage` map over a constant array of enum keys (see `ExperiencePage.js` `COMPANIES`) — adding a new entry is a one-liner.

### Redux
Store is built in `src/redux/configureStore.js` with `redux-thunk` middleware. `redux-immutable-state-invariant` is included only when `import.meta.env.MODE !== "production"`; Vite tree-shakes the dev branch out of the production bundle.

State slices (`src/redux/reducers/index.js`): `scrolled`, `hamClicked`, `name`, `email`, `phone`, `message`. The `name`/`email`/`phone`/`message` slices back the `ContactForm` controlled inputs; `scrolled` and `hamClicked` drive `Navigation` UI state. Each slice has a paired action file in `src/redux/actions/` and a single action type constant in `src/redux/actions/actionTypes.js`. To add new state, follow this one-file-per-slice pattern and register the reducer in `reducers/index.js`.

Components consume the store via `connect` + `bindActionCreators` (classic pattern, not hooks) — see `ContactForm.js` for the canonical example.

### Contact form / external services
`ContactForm.js` calls EmailJS (`emailjs-com`) at module load via `init(...)`, then `emailjs.send(...)` inside the submit handler. The credentials read from `import.meta.env.VITE_EMAILJS_USER_ID`, `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`. Copy `.env.example` to `.env.local` for local dev; Netlify gets the same vars via build environment. Errors and successes surface through `sweetalert2` (`Swal.fire`).

### Tests
- `src/__tests__/App.test.js` is a thin smoke test: it renders the whole `<App>` and asserts every section's `data-testid` is present.
- Per-section assertions live in `src/components/<section>/__tests__/<Section>.test.jsx`.
- `src/test-utils/renderWithStore.jsx` wraps `render()` with a fresh Redux store per call.
- `src/setupTests.js` wires `@testing-library/jest-dom/vitest` matchers and globally stubs `@tsparticles/*` so the engine never runs in jsdom.

Test patterns to know: `describe.each([...])` is used in `SkillsPage.test.jsx` and `ExperiencePage.test.jsx` to parametrize over the windows/companies — adding a new card means adding one row to the array, not a new test block. Mocks use Vitest's `vi.mock` + `vi.hoisted` (the ContactForm suite is the canonical example with EmailJS and Swal mocked).

### Vite specifics
`vite.config.js` does three non-default things worth knowing:
1. `react({ include: "**/*.{js,jsx}" })` and matching `esbuild.loader: "jsx"` for `src/**/*.js` — the codebase has JSX in `.js` files, inherited from CRA. Renaming everything to `.jsx` would be cosmetic.
2. `assetsInclude: ["**/*.JPG"]` — one image (`profile.JPG`) uses an uppercase extension; Vite's default asset list is lowercase only.
3. `build.outDir: "build"` — kept as the legacy CRA output dir so `gh-pages` and `netlify.toml` continue to work without changes.
