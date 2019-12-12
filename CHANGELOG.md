# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Support for `aria-*` and `data-*` attributes for all components

### Fixed

- Made component return types `React.ReactElement`s rather than `JSX.Element`s
  to make them compatible with `children` props outside of JSX

## [0.0.4] - 10-12-2019

### Added

- `Header` component

### Fixed

- Made `Container` use `<div>` instead of `<span>`

## [0.0.3] - 10-12-2019

### Added

- `List` component

### Fixed

- Added `@babel/runetime-corejs2` to fix issues with the build process

## [0.0.2] - 05-12-2019

### Added

- `Heading` component
- `Paragraph` component
- `SummaryList` component
- `Main` component
- `Container` component
- `FormGroup` component

## [0.0.1] - 26-11-2019

### Added

- TypeScript support
- SASS support
- `lbh-frontend` library to style components
- `ErrorMessage` component
- `ComponentRegister` class for linking external components to library
  components
- `Link` component
- `Hint` component
- `Label` component
- `Tag` component
- `FieldsetLegend` component
- `Fieldset` component
- `InputButton` component
- `Button` component
- `PageAnnouncement` component

[unreleased]:
  https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.4...HEAD
[0.0.4]:
  https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.3...v0.0.4
[0.0.3]:
  https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.2...v0.0.3
[0.0.2]:
  https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/LBHackney-IT/lbh-frontend-react/releases/tag/v0.0.1
