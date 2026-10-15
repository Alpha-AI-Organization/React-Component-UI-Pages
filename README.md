# React Component UI demo

Public deployment repository for the Alpha AI React component demo.

The `site/` directory contains the compiled website. A push to `main` deploys it through GitHub Actions to GitHub Pages. The workflow can also be started manually.

The source library is maintained separately in a private repository. This repository does not contain the original library source or source maps. The browser necessarily receives compiled JavaScript and CSS, and the documentation intentionally includes its example code.

To publish an update, build and verify the documentation in the source repository, then copy only the generated `docs-dist/` contents into `site/`. Review the changed static files before committing and pushing. Do not copy source directories, credentials, environment files, or package caches.

## Deployment

- Website: https://alpha-ai-organization.github.io/React-Component-UI-Pages/
- Workflow: `.github/workflows/docs-pages.yml`
- Deployment artifact: `site/` only

The website URL becomes available after the first successful Pages deployment.
