# Harb Group Website

Next.js + React + Tailwind CSS application.

## Development Server

Run `pnpm dev` to start the local development server. Changes to source files are hot-reloaded.

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `app/layout.tsx` - Root HTML layout and global stylesheet import
- `app/[[...slug]]/page.tsx` - Catch-all page that keeps existing client-side URLs working
- `src/App.tsx` - Primary client application component
- `src/index.css` - Global CSS entrypoint and Tailwind CSS v4 import
- `package.json` - Project dependencies and Next.js build, development, and formatting scripts
- `.mise.toml` - Toolchain versions for Node.js and pnpm

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the PostCSS plugin
- Build tooling: Next.js and TypeScript
- Formatting: oxfmt

## Styling

This project uses **Tailwind CSS v4** through the PostCSS plugin configured in `postcss.config.mjs`. `src/index.css` imports Tailwind with `@import 'tailwindcss';`. Use Tailwind utility classes directly in JSX and put global CSS or Tailwind v4 theme customization in `src/index.css`.

`src/main.tsx` imports `src/index.css`, so global font wiring belongs in `src/index.css`. Keep CSS `@import` statements first, then add any `@font-face` rules and font-family defaults there.

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export components as default exports.
