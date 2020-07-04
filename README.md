# LBH Frontend React

![Project maturity](https://img.shields.io/badge/project_maturity-alpha-blue?style=for-the-badge)
![Licence](https://img.shields.io/github/license/LBHackney-IT/lbh-frontend-react?label=licence&style=for-the-badge)

![CircleCI build status](https://img.shields.io/circleci/build/github/LBHackney-IT/lbh-frontend-react?style=for-the-badge)

![GitHub repo size](https://img.shields.io/github/repo-size/LBHackney-IT/lbh-frontend-react?style=for-the-badge)

![Package version](https://img.shields.io/npm/v/lbh-frontend-react?style=for-the-badge)
![Bundle size](https://img.shields.io/bundlephobia/min/lbh-frontend-react?style=for-the-badge)

![TypeScript supported](https://img.shields.io/npm/types/lbh-frontend-react?style=for-the-badge)
![TypeScript version](https://img.shields.io/npm/dependency-version/lbh-frontend-react/dev/typescript?style=for-the-badge)

![Supported React versions](https://img.shields.io/npm/dependency-version/lbh-frontend-react/peer/react?style=for-the-badge)

London Borough of Hackney's React component library.

LBH Frontend React contains Hackney's design patterns as React components. It is
built out of [LBH Frontend](https://github.com/LBHackney-IT/LBH-frontend), which
in turn is based heavily off
[GOV.UK Frontend](https://github.com/alphagov/govuk-frontend).

**Warning: LBH Frontend React is still in alpha. No promises of API stability
are made.**

## For users

### Installation

Install the package from NPM in the usual way. LBH Frontend React supports React
16 or newer. You will need to install it as a peer dependency.

```sh
npm install lbh-frontend-react react@">=16"
```

or

```sh
yarn add lbh-frontend-react react@">=16"
```

### Usage

See the
[documentation website](https://lbhackney-it.github.io/lbh-frontend-react/docs/)
(generated with [TypeDoc](https://typedoc.org/)).

## For contributors

### Running the tests

We use [Jest](https://jestjs.io/) for testing.

To run the unit tests:

```bash
npm run test:unit
```

To run the unit tests, updating changed snapshots:

```bash
npm run test:unit:update
```

To run the full test suite, including building:

```bash
npm run test:all
```

To run the full test suite, including building, updating changed snapshots:

```bash
npm run test:all:update
```

To run the full test suite, including format checking, linting, and building:

```bash
npm test
```

To run the full test suite, including format checking, linting, and building,
fixing any issues and updating snapshots:

```bash
npm run test:update
```

### Documenting the code

We use [TypeDoc](https://typedoc.org/) to generate our documentation website
from the types and comments in our code. We use GitHub pages to
[host that site](https://lbhackney-it.github.io/lbh-frontend-react/docs/).

TypeDoc has a syntax similar to that of [JSDoc](https://jsdoc.app/), but unlike
with JSDoc, we shouldn't specify types or label every property or argument, as
they are generated from the TypeScript directly. See
[here](https://typedoc.org/guides/doccomments/) for the syntax supported by
TypeDoc.

To generate the documentation locally:

```sh
npm run build:docs
```

You can test the output by opening `tmp/docs/index.html` from your local
filesystem in your browser.

### Displaying the components

We use [Storybook](https://storybook.js.org) to generate a visual guide to the
components in the repository.

To add a new story/view existing stories, you will find these in `./stories`.

To generate this documentation locally:

```sh
npm run storybook
```

### Formatting the code

We use [Prettier](https://prettier.io/) to format our code. There are lots of
[editor integrations](https://prettier.io/docs/en/editors.html) available, and
the style is enforced by a Git pre-commit hook.

To run the formatter:

```bash
npm run format
```

### Linting the code

We use [ESLint](https://eslint.org/), in addition to TypeScript's compiler, for
verifying correctness and maintainability of code.

To run the linter:

```bash
npm run lint
```

To run the linter in fix mode:

```bash
npm run lint:fix
```

We can also check that all files (except `package.json` and `package-lock.json`
because Dependabot can get very noisy) have code owners:

```sh
npm run lint:codeowners
```

### Releasing versions

1. Create a new branch called `release/vx.y.z`, where `x.y.z` is the new version
   number, following [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

1. Update `CHANGELOG.md` to batch the changes in this version under a heading in
   the following format:

   ```md
   ## [Unreleased]

   ## [x.y.z] - DD-MM-YYYY

   ### Added

   ...

   ## [a.b.c] - DD-MM-YYYY

   ### Added

   ...

   [unreleased]:
     https://github.com/LBHackney-IT/lbh-frontend-react/compare/vx.y.z...HEAD
   [x.y.z]:
     https://github.com/LBHackney-IT/lbh-frontend-react/compare/va.b.c...vx.y.z
   [a.b.c]: ...
   ```

1. Commit the changes as "Update the changelog in preparation for `vx.y.z`".

1. Run the version bumping script:

   ```sh
   bin/bump-version "x.y.z"
   ```

1. Push the branch and create a pull request, copying the contents of this
   version from the changelog into the description.

1. Get the pull request reviewed.

1. When approved and ready to publish:

   ```sh
   bin/publish "x.y.z"
   ```

1. Merge the pull request and publicize the release.

## Architecture decision records

We use ADRs to document architecture decisions that we make. They can be found
in `docs/adr` and contributed to with
[adr-tools](https://github.com/npryce/adr-tools).
