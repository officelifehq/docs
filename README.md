# Documentation for OfficeLife

This repository is the official documentation of [OfficeLife](https://github.com/djaiss/officelife), a tool used to take the pulse of your company.

This documentation is powered by [VuePress](https://vuepress.vuejs.org/), a static site generator based on Vue.

## Installation

```bash
git clone git@github.com:officelifehq/docs.git
cd docs
yarn
```

## How to use locally

As VuePress generates static sites, we need to compile the content before being able to read it.

```bash
yarn serve
```

## Deployment

To deploy, there a simple step: accept the PR, merge it to `main` and it will be auto-deployed within minutes to Netlify.

### Netlify

This documentation is hosted on [Netlify](https://app.netlify.com/sites/officelifedocumentation/overview). The page is automatically build after each commit in the Github repository. Also, for each commit, the documentation is generated automatically by Github Action and pushed back to the commit, so you don't have to think of it before creating and pushing your PR.

Netlify takes care of minifying all assets upon deployment.