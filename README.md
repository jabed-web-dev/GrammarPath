# GrammarPath 📚

A mobile-first English Grammar learning PWA with Bangla-friendly explanations.

## Features
- 45 chapters: 35 grammar + 10 vocabulary (500 entries)
- Search, categories, bookmarks and learning progress
- Dark and light themes
- Installable Progressive Web App (PWA)
- Offline caching for resources and previously opened lessons
- No backend, database, API key or build process required

## Project structure

```text
GrammarPath/
├── index.html              # App homepage
├── app.js                  # App logic and chapter catalogue
├── styles.css              # App styling
├── manifest.webmanifest    # PWA manifest
├── sw.js                   # Service worker
├── icons/                  # App icons
├── chapters/               # All grammar lesson Markdown files
│   ├── 00_README_Study_Guide.md
│   ├── 01_Parts_of_Speech.md
│   ├── ...
│   ├── 35_Advanced_Grammar.md
│   ├── 36_Grammar_Master_Reference.md
│   ├── 37_Vocabulary_and_Usage.md
│   └── INDEX.md
└── README.md
```

The homepage and application files remain in the repository root. All textbook Markdown files are grouped inside `chapters/`.

## Run locally

Use a local static web server (service workers do not work from a `file://` URL). For example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to GitHub Pages

1. Upload the contents of this project to the root of your GitHub repository.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)`, then save.
5. Open the published HTTPS URL.

> Keep the `chapters/` and `icons/` folders in their locations. The app loads lesson files from `chapters/`.

## Install

On Android, open the published site in a supported browser and choose **Install app** or **Add to Home screen**. On iOS, open it in Safari, tap **Share**, then **Add to Home Screen**.

## Data storage

Bookmarks, theme preference and completed-chapter progress are stored in the browser's Local Storage on the current device. They are not synchronized between devices.

## License

No license has been specified. Add a license file if you want to grant others explicit reuse rights.

---

**Keep learning. One chapter at a time.** 🌱


## Vocabulary structure
The 500 vocabulary entries are organized by Part of Speech and related word groups across chapters 36–45: Nouns, Verbs, Adjectives, Adverbs & Prepositions, Pronouns & Question Words, Phrasal Verbs, Collocations, and Expressions.


Vocabulary library: 500 entries across 10 Part-of-Speech and practical-use chapters.


## New in this version
- **Practice tab**: vocabulary flashcards (Leitner spaced repetition, 10 words per session) and 10-question quiz, built automatically from the vocabulary tables.
- **Pronunciation** buttons (browser speech synthesis) and a daily **streak** badge.
- **Hash routing**: the phone Back button works and chapters have shareable links (`#chapter/9`).
- **Backup**: export/import progress, bookmarks and flashcard data as JSON.
- Service worker now precaches all chapters (full offline) and refreshes them in the background. If you change any file, bump `CACHE` in `sw.js`.
- Removed the unused duplicate 240-entry vocabulary chapters.
- **Chapter quizzes** at the end of every lesson (chapters 1–45): 5–6 questions, 80% auto-completes the chapter. Grammar questions come from a hand-written bank in `quiz.js` plus the “ভুল → সঠিক” pairs in each chapter; vocabulary quizzes are generated from the chapter tables. Best scores are stored in `gp_quiz`.
