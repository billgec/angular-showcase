# angular-showcase

Showing every JSF component in an Angular environment, meant to replace PrimeFaces.

## Tech stack

- [Angular](https://angular.dev) 22 with standalone components, signals, strict TypeScript, Angular Router and Reactive Forms
- [Angular Material + CDK](https://material.angular.dev) as component library (MIT)
- [date-fns](https://date-fns.org) via `@angular/material-date-fns-adapter` for German date parsing/formatting (locale `de`, week starts on Monday)
- [Material Symbols](https://fonts.google.com/icons) for icons
- [angular-eslint](https://github.com/angular-eslint/angular-eslint) for linting, [Vitest](https://vitest.dev) for unit tests

## Getting started

Requires Node.js 22+.

```bash
npm install
npm start
```

The dev server runs on http://localhost:4200.

| Script          | Description                        |
|-----------------|------------------------------------|
| `npm start`     | Start the dev server               |
| `npm run build` | Production build to `dist/`        |
| `npm run watch` | Development build in watch mode    |
| `npm run lint`  | Lint TypeScript and HTML templates |
| `npm test`      | Run the unit tests                 |

## Structure

```
src/
  main.ts               Bootstraps the app
  styles.scss           Angular Material theme / design tokens
  app/
    app.config.ts       Providers (router, locale de, date adapter)
    app.routes.ts       Route definitions
    layout/shell/       App shell (header, navigation)
    pages/              Static pages (overview, 404)
    showcase/pages.ts   Registry of showcase pages – routes and navigation are generated from it
```

## Adding a showcase page

1. Create a standalone component, e.g. `src/app/showcase/layout/forms-page.ts`.
2. Register it in `src/app/showcase/pages.ts`:

   ```ts
   export const showcasePages: ShowcasePage[] = [
     {
       group: 'Layout',
       label: 'Formulare',
       path: 'layout/formulare',
       loadComponent: () => import('./layout/forms-page').then((m) => m.FormsPage),
     },
   ];
   ```

The route (lazily loaded) and the navigation entry are generated automatically. Paths are kept identical to the React showcase so both implementations can be compared page by page.
