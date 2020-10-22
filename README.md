# Documentation for OfficeLife

This repository is the official documentation of [OfficeLife](https://github.com/djaiss/officelife), a tool used to take the pulse of your company and empower managers to take care of their employees.

This documentation is powered by [Jigsaw](https://jigsaw.tighten.co/docs), a PHP static site generator.

## How to use

As Jigsaw generates static sites, we need to compile the content before being able to read it.

```bash
./vendor/bin/jigsaw build
```

We also need to compile the assets if you’ve changed them.

```bash
npm run dev
```

To serve the site locally, you have to run

```bash
./vendor/bin/jigsaw serve
```

## Deployment

Before deploying the site to production, we need to compile the assets in a certain way.

```bash
npm run production
```

### Netlify

This documentation is hosted on [Netlify](https://app.netlify.com/sites/officelifedocumentation/overview). The page is automatically build after each commit in the Github repository. Also, for each commit, the documentation is generated automatically by Github Action and pushed back to the commit, so you don't have to think of it before creating and pushing your PR.

Netlify takes care of minifying all assets upon deployment.

## Adding content

New content should be added to the `navigation.php` file.