# Changelog

## [4.0.2](https://github.com/currents-dev/cli/compare/v3.1.3...v4.0.2) (2023-01-19)

### Bug Fixes

- update inline documentation ([1e701c6](https://github.com/currents-dev/cli/commit/1e701c6e091f7d3d78df81b909102ca91872d016))

## [4.0.1](https://github.com/currents-dev/cli/compare/v3.1.3...v4.0.1) (2023-01-19)

Version 4+ is fully compatible with Cypress 12+ 🎉. It leaves the local installation of Cypress intact and uses the public Cypress APIs to enable the integration.

### Breaking Changes

The following complimentary scripts from v3 were deprecated:

- `currents-prepare` script is deprecated. Use `run` or `spawn` API instead.
- `currents-reset` script is deprecated, use `run` or `spawn` API instead.
  patch API is deprecated. Use run or spawn instead.
- limit node engine to 14.17+

### Dependencies

- use cy2@4.0.6

## [3.1.3](https://github.com/currents-dev/cli/compare/v3.1.2...v3.1.3) (2022-12-10)

### Bug Fixes

- fixate cy2 version ([9fa72ff](https://github.com/currents-dev/cli/commit/9fa72ffa014ecdb9a5dc34982f4941c3539c2f53))

## [3.1.1](https://github.com/currents-dev/cli/compare/v3.1.0...v3.1.1) (2022-12-07)

### Bug Fixes

- patch function ([d69876a](https://github.com/currents-dev/cli/commit/d69876ad0c8bee763bcf727939ab4e77fb9c69d8))

## [3.1.0](https://github.com/currents-dev/cli/compare/v3.0.0...v3.1.0) (2022-12-07)

### Features

- cypress 12+ ([a3ccb53](https://github.com/currents-dev/cli/commit/a3ccb53d2897cf48ecfbdfec212a9cbc2896851a))

## [3.0.0](https://github.com/currents-dev/cli/compare/v3.0.0-beta.5...v3.0.0) (2022-11-11)

### Features

- support cypress 11 ([13ea03e](https://github.com/currents-dev/cli/commit/13ea03e6908bddd13f6934c15fe32264db0df4fa))
- cy@3.2.0 ([13ea03e](https://github.com/currents-dev/cli/commit/13ea03e6908bddd13f6934c15fe32264db0df4fa))
- expose patch API ([50d19d5](https://github.com/currents-dev/cli/commit/50d19d5b0692d49b6cd11ac985279e218b1813e9))

## [3.0.0-beta.5](https://github.com/currents-dev/cli/compare/v3.0.0-beta.4...v3.0.0-beta.5) (2022-11-11)

### Features

- support cypress 11 ([13ea03e](https://github.com/currents-dev/cli/commit/13ea03e6908bddd13f6934c15fe32264db0df4fa))

## [3.0.0-beta.4](https://github.com/currents-dev/cli/compare/v3.0.0-beta.3...v3.0.0-beta.4) (2022-10-27)

### Bug Fixes

- cy@3.1.7 ([2c317a3](https://github.com/currents-dev/cli/commit/2c317a37cb4433921f649d8daf6a6636ae737365))

## [3.0.0-beta.3](https://github.com/currents-dev/cli/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2022-10-24)

### Bug Fixes

- cy2@3.1.4 ([3d07cb2](https://github.com/currents-dev/cli/commit/3d07cb2445bc754d970cd80d2dfce65d19a389f7))

## [3.0.0-beta.2](https://github.com/currents-dev/cli/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2022-10-24)

### Bug Fixes

- expose patch API ([50d19d5](https://github.com/currents-dev/cli/commit/50d19d5b0692d49b6cd11ac985279e218b1813e9))

### Features

- cy2@2.1.0 ([11db5e4](https://github.com/currents-dev/cli/commit/11db5e43b550bf7dfe0d2da770664fa748c40911))
- use cy2@3.2.1 with non-destructive patches ([15c7e6e](https://github.com/currents-dev/cli/commit/15c7e6eb3e3fa38ab2010db20817ffe20522ba75))

## [2.2.0](https://github.com/currents-dev/cli/compare/v2.1.1...v2.2.0) (2022-10-18)

### Features

- add currents-reset ([40f5b27](https://github.com/currents-dev/cli/commit/40f5b27b59488bf32e128bbfd3ee8044ddbee052))

## [2.1.1](https://github.com/currents-dev/cli/compare/v2.1.0...v2.1.1) (2022-09-07)

### Features

- add `currents-prepare` bin script ([b6e5ad4](https://github.com/currents-dev/cli/commit/b6e5ad45462969e38d8d448ed78aff91f381503f))
- add link to changelog ([260f98e](https://github.com/currents-dev/cli/commit/260f98ea9b6122b8218e4e546286ad100db00bf2))

### Dependencies

- upgrade `cy2@2.0.1`
