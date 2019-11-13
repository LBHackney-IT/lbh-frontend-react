# LBH Frontend React

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
[documentation website](https://lbhackney-it.github.io/lbh-frontend-react/api/)
(generated with [TypeDoc](http://typedoc.org/)).

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

We use [TypeDoc](http://typedoc.org/) to generate our documentation website from
the types and comments in our code. We use GitHub pages to
[host that site](https://lbhackney-it.github.io/lbh-frontend-react/api/).

TypeDoc has a syntax similar to that of [JSDoc](https://jsdoc.app/), but unlike
with JSDoc, we shouldn't specify types or label every property or argument, as
they are generated from the TypeScript directly. See
[here](http://typedoc.org/guides/doccomments/) for the syntax supported by
TypeDoc.

Documentation is generated as part of the build step (which you should be doing
after making any changes to types or comments), but to regenerate the
documentation on its own:

```sh
npm run build:docs
```

You can (and should) test the output by opening `docs/api/index.html` from your
local filesystem in your browser and commit it alongside the changes.

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

## Architecture decision records

We use ADRs to document architecture decisions that we make. They can be found
in `docs/adr` and contributed to with
[adr-tools](https://github.com/npryce/adr-tools).
