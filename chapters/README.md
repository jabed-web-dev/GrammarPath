# GrammarPath — English Grammar PWA

A mobile-first, installable Progressive Web App for the 35-chapter Bengali-supported English Grammar course.

## Features
- 35 separate grammar chapters, loaded from Markdown files.
- Six learning categories and chapter search/filter.
- Chapter bookmarks and completed status.
- Progress dashboard.
- Dark/light theme.
- Installable PWA with app icons and offline caching.
- Mobile bottom navigation and responsive layout.
- No backend, database, API key, or build step required.

## Publish on GitHub Pages
1. Create a new GitHub repository (for example `grammarpath`).
2. Upload **all files and folders inside this project** to the repository root. Keep the `.md` chapter files in the same root as `index.html`.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for GitHub Pages to publish. Open the generated `https://YOUR-USERNAME.github.io/REPOSITORY/` address.

> If you use a custom domain or deploy under a repository path, the app already uses relative paths and should work from the repository subdirectory.

## Install on Android
1. Open the published HTTPS website in Chrome.
2. Use the browser menu and choose **Install app** or **Add to Home screen**.
3. Confirm. GrammarPath will appear as an app icon and launch in standalone mode.

On iPhone/iPad, open in Safari → Share → Add to Home Screen.

## Offline support
After the first successful visit, the service worker caches the app shell and visited chapter files. Open chapters once while online to ensure they are cached for offline reading. If a new deployment does not appear, close the installed app and reopen it after a moment; the service worker updates its cache version when `CACHE` changes in `sw.js`.

## Progress and privacy
Bookmarks, completed chapters, and theme preference are saved in the browser's `localStorage` on the current device. They are not synced between devices and are cleared if browser site data is deleted.

## Project structure
- `index.html` — app shell
- `styles.css` — responsive interface
- `app.js` — navigation, Markdown rendering, bookmarks and progress
- `manifest.webmanifest` — PWA metadata and install icons
- `sw.js` — offline cache
- `01_...md` to `35_...md` — grammar lessons
- `36_...md`, `37_...md` — reference chapters
- `INDEX.md`, `00_README_Study_Guide.md` — course index and study guide
