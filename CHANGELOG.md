# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0] - 22-07-2020

### Added

- Added phase banner component

## [0.2.0] - 14-07-2020

### Added

- Added tabs component
- Added table component
- Added worktray component

## [0.1.0] - 06-07-2020

### Added

- Added storybook to the repository for visual documentation of components

## [0.0.15] - 05-06-2020

### Added

- Updated `lbh-frontend` to include Heading Levels in Page Announcements

## [0.0.14] - 29-03-2020

### Changed

- Updated `lbh-frontend` and `govuk-frontend` to use latest stylesheets

## [0.0.13] - 19-02-2020

### Added

- Updated `lbh-frontend` to get lobotomised owl spacing with component styles
- `Input` component

### Fixed

## [0.0.12] - 12-02-2020

### Fixed

- Fix `Textarea` by making sure the onChange function is given the correct value

## [0.0.11] - 12-02-2020

### Fixed

- Fix `Textarea`

## [0.0.10] - 06-02-2020

### Fixed

- Fix `Textarea` to use `value`, not `children`

### Added

### Fixed

## [0.0.9] - 06-02-2020

### Added

- `Checkboxes` component
- Option to make `Radios` a required field
- `Textarea` component

### Fixed

- Stop `homepageUrl` from defaulting to '/'. Now if `homepageUrl` is not present
  there will be no logo link in the header.

## [0.0.8] - 30-01-2020

### Added

- `Radios` component
- Updated `SummaryList` so that a row's value can be a ReactNode rather than
  just a string
- Updated `SummaryList` to allow actions to appear in summary lists

## [0.0.7] - 15-01-2020

### Added

- Add optional target prop to Link component

## [0.0.6] - 09-01-2020

### Fixed

- Fix fonts (includes update to lbh-frontend package)

## [0.0.5] - 12-12-2019

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

[unreleased]: https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.14...HEAD
[0.0.14]: https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.13...v0.0.14
[0.0.13]: https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.12...v0.0.13
[0.0.12]: https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.11...v0.0.12
[0.0.11]: https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.10...v0.0.11
[0.0.10]: https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.9...v0.0.10
[0.0.9]: https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.8...v0.0.9
[0.0.8]: https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.7...v0.0.8
[0.0.7]: https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/LBHackney-IT/lbh-frontend-react/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/LBHackney-IT/lbh-frontend-react/releases/tag/v0.0.1
