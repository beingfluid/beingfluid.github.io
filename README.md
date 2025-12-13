# The Shuffle Editor (https://shuffle.dev)

NOTE: npm commands overwrite the ./public directory.

## 1. Getting Started

Project's source files are placed in ./src/ directory.

- ./src/assets - default static files (eg. image placeholders). You should replace them with your own files.
- ./src/scss/ - Sass sources used to build Bootstrap theme. Variables used in Theme Customizer are located in custom-variables.scss file.

All your pages (templates) are stored in separated .pug or .html files (depends on your export preferences)

- ./src/pug/\*.pug
- ./src/html/\*.html

## 2. Installation

````
# Install dependencies
npm install

# Run dev server with live preview (Browsersync)
npm run watch

# Or make production build
# beingfluid.github.io

This repository contains a personal/portfolio website with two complementary workflows:

- A **Jekyll** site (Liquid templates, collections, `_layouts`, `_includes`) which builds to `_site/`.
- A **Shuffle/npm** static asset pipeline (sources in `src/`) which builds to `public/`.

This README explains the preferred Jekyll workflow (how to install and preview locally), plus notes about the npm build pipeline.

## Prerequisites

# beingfluid.github.io

This repository is a Jekyll-based personal/portfolio site. The canonical and supported workflow for this project is the Jekyll workflow — editing Liquid templates, collection content, and layouts and building with Jekyll.

If you only work with Jekyll, you can ignore the `src/`/`package.json` Shuffle/npm assets entirely.

## Prerequisites

- Ruby (system Ruby, rbenv, or rvm)
- Bundler (`gem install bundler`)

## Quick start — Jekyll workflow (recommended)

1. Install Ruby dependencies defined in the `Gemfile`:

```bash
bundle install
```

2. Serve the site locally with live-reload (recommended for development):

```bash
bundle exec jekyll serve --watch --livereload
```

The server defaults to `http://127.0.0.1:4000/` (Jekyll prints the URL in the terminal).

3. Build a production static site (one-time build):

```bash
bundle exec jekyll build
```

Notes:

- Jekyll source content and templates live in `_layouts/`, `_includes/`, and the collection folders such as `_blogs/`, `_honors/`, `_certifications/`, `_testimonials/`, `_profile_links/`, and `_aboutme/`.
- The generated static site is written to `_site/`.

## Deploying

- GitHub Pages: push this repository to GitHub and enable GitHub Pages — GitHub will build the site using Jekyll. Ensure `_config.yml` is configured correctly for your collections.
- Manual/static deploy: run `bundle exec jekyll build` and deploy the contents of `_site/` to your hosting provider (or to a `gh-pages` branch).

## Optional: legacy Shuffle / npm pipeline (not required)

This repository contains a legacy Shuffle export and an npm-based frontend pipeline that builds `src/` into `public/`. If you will never use the npm flow, ignore the `src/` folder and `package.json` entirely.

If you ever need it, the commands are (optional):

```bash
npm install
npm run build
npm run watch
```

---

If you want, I can also add a short GitHub Pages deployment example (CI snippet) or clean up the repository by moving the `src/` assets into an `legacy/` folder. Tell me which you'd prefer.
````
