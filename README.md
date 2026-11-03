# GrammarPath 📚

**A mobile-first English Grammar learning app with Bangla-friendly
learning support.**

GrammarPath is a lightweight, installable Progressive Web App (PWA)
designed to help learners study English grammar chapter by chapter. It
organizes grammar topics into a structured learning path and provides a
clean reading experience on mobile devices.

https://jabed-web-dev.github.io/GrammarPath/

## ✨ Features

-   **35 Grammar Chapters** --- study individual topics in a clear
    sequence.
-   **Organized Categories** --- browse grammar lessons by subject area.
-   **Search** --- quickly find a chapter.
-   **Bookmarks** --- save lessons for quick access.
-   **Learning Progress** --- keep track of completed chapters.
-   **Dark and Light Themes** --- choose a comfortable reading
    appearance.
-   **Responsive Interface** --- designed mobile-first and adapts to
    larger screens.
-   **Progressive Web App** --- install GrammarPath on supported
    devices.
-   **Offline Caching** --- previously cached app resources and lessons
    can remain available offline.

## 🚀 Getting Started

No build step, backend, database, or API key is required.

### Run locally

1.  Download or clone this repository.
2.  Open the project folder.
3.  Serve the files using a local static web server.
4.  Open the local address in your browser.

For example, if you have Python installed:

``` bash
python -m http.server 8000
```

Then visit:

``` text
http://localhost:8000
```

> A local web server is recommended because service workers and PWA
> installation require a secure context. `localhost` is treated as
> secure by modern browsers.

## 🌐 Deploy to GitHub Pages

1.  Create a GitHub repository (for example, `GrammarPath`).
2.  Upload the project files and folders to the repository's root.
3.  Open **Settings → Pages**.
4.  Under **Build and deployment**, select **Deploy from a branch**.
5.  Select the `main` branch and the `/ (root)` folder.
6.  Save and wait for GitHub Pages to publish the site.

Your site will be available at a URL similar to:

``` text
https://YOUR-USERNAME.github.io/GrammarPath/
```

Replace `YOUR-USERNAME` with your GitHub username and `GrammarPath` with
your repository name.

### Important: GitHub Pages project path

If the repository is published as a project site (for example,
`/GrammarPath/`), make sure the app's manifest, service worker
registration, icons, and asset paths work under that subpath.
Root-relative paths such as `/manifest.webmanifest` may point to the
domain root instead of the repository site.

## 📱 Install as an App

1.  Open the published website in a supported browser.
2.  On Android, open the browser menu and choose **Install app** or
    **Add to Home screen** (the wording varies by browser).
3.  Follow the installation prompt.

On iPhone and iPad, open the site in Safari, tap **Share**, then choose
**Add to Home Screen**.

Installation availability depends on the browser, operating system,
manifest configuration, and whether the site is served over HTTPS.

## 💾 Data and Privacy

-   Bookmarks and learning progress are stored locally in the browser
    using Local Storage.
-   The app does not require an account or send learning progress to a
    backend.
-   Clearing browser site data, changing browsers, or using a different
    device may remove or not transfer locally stored progress.
-   Offline availability depends on which resources have already been
    cached and the browser's storage policies.

## 🧭 Project Structure

The project includes:

-   `index.html` --- application interface and entry point.
-   `00_README_Study_Guide.md` --- study guide and instructions.
-   `01_...md` through `35_...md` --- individual grammar chapters.
-   `36_Grammar_Master_Reference.md` --- grammar reference.
-   `37_Vocabulary_and_Usage.md` --- vocabulary and usage reference.
-   `INDEX.md` --- chapter index.

The PWA may also include a web app manifest, service worker, icons,
stylesheets, and JavaScript files.

## 📖 Learning Approach

A suggested way to use GrammarPath:

1.  Start with the study guide.
2.  Follow the chapter order or choose a topic from the categories.
3.  Read the explanations and examples carefully.
4.  Complete the practice questions in each lesson.
5.  Bookmark difficult topics and revisit them.
6.  Mark chapters as completed as you progress.

## 🛠️ Technology

GrammarPath is built as a static web application and PWA using
browser-native web technologies. It is suitable for static hosting such
as GitHub Pages.

## 🤝 Contributing

Suggestions, corrections, and improvements are welcome.

1.  Fork the repository.
2.  Create a feature branch.
3.  Make your changes.
4.  Test the app on a mobile browser.
5.  Open a pull request describing your changes.

For grammar corrections, please include a reliable reference or a clear
explanation so the learning material can be reviewed accurately.

## 📄 License

No license has been specified yet. Unless a license is added to this
repository, the default copyright rules apply and reuse is not
automatically granted.

------------------------------------------------------------------------

**Keep learning. One chapter at a time.** 🌱
