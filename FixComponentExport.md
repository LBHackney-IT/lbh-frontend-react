# Fix for components that don't appear to have been exported from lbh-frontend-react npm package

## PROBLEM:

It has been noted that when new components are added to the lbh-frontend-react
library, once they are used in other projects they can cause an error declaring
that no export has been created for that component. This leaves the component
discoverable but unusable.

## FIX:

1. Ensure your project is using the most up to date version of
   lbh-frontend-react npm package by examining its package.json file. If you
   must update it manually, update your npm packages afterwards by running:

```sh
npm i
```

Ensure your package-lock.json file lbh-frontend-react npm version matches the
version in package.json. Check to see if this has resolved the export error for
the lbh-frontend-react component.

2. If error persists, try a clean install by running:

```sh
npm ci
```

Check to see if this has resolved the export error for the lbh-frontend-react
component.

3. If error persists, try a cache clean by running:

```sh
npm cache clean --force
```

Check to see if this has resolved the export error for the lbh-frontend-react
component.

4. Restart your IDE

These steps have been found to resolve export errors for lbh-frontend-react
components.
