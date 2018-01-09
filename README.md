<div align=center>
<img src=".github/react-spectre-logo.png" width="256" height="256">

# react-spectre
React components for Spectre.css - a Lightweight, Responsive and Modern CSS Framework

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

<br><br><br>
</div>

<div align=center>

# This project is under development.
## Not ready for production use.
### [Check the roadmap](#roadmap)

</div>

<br><br><br>

## Packages

### Elements

 Package | Size (min+gzip) | Components 
 :------ | :-------------- | :---------
 [**Typography**](packages/typography) | <!-- markdown-exec(cmd:./node_modules/.bin/gzip-size ./packages/typography/dist/typography.js, match:\d+ \w+) -->714 B<!-- /markdown-exec --> (gzipped!) | `H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `Label`.
 [**Table**](packages/table)   | <!-- markdown-exec(cmd:./node_modules/.bin/gzip-size ./packages/table/dist/table.js, match:\d+ \w+) -->719 B<!-- /markdown-exec --> | `Table`, `Header`, `Body`, `Row`, `Heading`, `Cell`.
 [**Button**](packages/button) | <!-- markdown-exec(cmd:./node_modules/.bin/gzip-size ./packages/button/dist/button.js, match:\d+ \w+) -->777 B<!-- /markdown-exec --> | `Button`, `Group`.
 [**Form**](packages/form)     | <!-- markdown-exec(cmd:./node_modules/.bin/gzip-size ./packages/form/dist/form.js, match:\d+ \w+) -->879 B<!-- /markdown-exec --> | `FormGroup`, `Input`, `TextArea`, `Select`, `Radio`, `CheckBox`, `Switch`.
 [**Icon**](packages/icon)     | <!-- markdown-exec(cmd:./node_modules/.bin/gzip-size ./packages/icon/dist/icon.js, match:\d+ \w+) -->520 B<!-- /markdown-exec --> | `Icon`.
 [**Label**](packages/label)   | <!-- markdown-exec(cmd:./node_modules/.bin/gzip-size ./packages/label/dist/label.js, match:\d+ \w+) -->624 B<!-- /markdown-exec --> | `Label`.
 [**Media**](packages/media)   | <!-- markdown-exec(cmd:./node_modules/.bin/gzip-size ./packages/media/dist/media.js, match:\d+ \w+) -->871 B<!-- /markdown-exec --> | `Image`, `Figure`, `Video`, `Container`.

### Layout

 Package | Size (min+gzip) | Components 
 :------ | :-------------- | :---------
 [**Layout**](packages/layout) | <!-- markdown-exec(cmd:./node_modules/.bin/gzip-size ./packages/layout/dist/layout.js, match:\d+ \w+) -->800 B<!-- /markdown-exec --> | `Grid`, `Row`, `Col`.
 [**Navbar**](packages/navbar) | <!-- markdown-exec(cmd:./node_modules/.bin/gzip-size ./packages/Navbar/dist/Navbar.js, match:\d+ \w+) -->629 B<!-- /markdown-exec --> | `Navbar`, `Section`, `Brand`.

<br><br><br>

## Development

It is recommended to use `yarn` for easy development.

### Setup

 1. `yarn` or `npm install`
 2. `yarn lerna -- bootstrap` o `npm run lerna -- bootstrap`

### Creating a new package

**The script way**:

```shell
yarn package:create -- <name-of-package>
```

**The manual way**:

  1. Create a directory inside [`packages`](packages).
  2. Copy [`LICENSE`](packages/typography/LICENSE) file from another package.
  3. Copy [`README.md`](packages/typography/README.md) file from another package and modify it.
  4. Copy [`assets`](packages/typography/assets) directory from another package.
  5. Run `yarn init` or `npm package` (don't worry for the version, it will be overriden on publishing).
  6. Modify the `package.json` file and add `{ "publishConfig": { "access": "public" } }` (this allow the package to be published with lerna as scoped package).


<br><br><br>

## Roadmap

  - **Elements**
    - [x] Typography
    - [x] Tables
    - [x] Buttons
    - [x] Forms
    - [x] Icons
    - [x] Labels
    - [ ] ~Code~
    - [x] Media

  - **Layout**
    - [x] Flexbox Grid
    - [x] Responsive
    - [x] Navbar

  - **Components**
    - [ ] Accordions - [View issue](https://github.com/react-spectre/react-spectre/issues/4)
    - [ ] Autocomplete - [View issue](https://github.com/react-spectre/react-spectre/issues/5)
    - [ ] Avatars - [View issue](https://github.com/react-spectre/react-spectre/issues/6)
    - [ ] Badges - [View issue](https://github.com/react-spectre/react-spectre/issues/7)
    - [ ] Bars - [View issue](https://github.com/react-spectre/react-spectre/issues/8)
    - [ ] Breadcrumbs - [View issue](https://github.com/react-spectre/react-spectre/issues/9)
    - [ ] Cards - [View issue](https://github.com/react-spectre/react-spectre/issues/10)
    - [ ] Chips - [View issue](https://github.com/react-spectre/react-spectre/issues/11)
    - [ ] Empty states - [View issue](https://github.com/react-spectre/react-spectre/issues/12)
    - [ ] Menus - [View issue](https://github.com/react-spectre/react-spectre/issues/13)
    - [ ] Modals - [View issue](https://github.com/react-spectre/react-spectre/issues/14)
    - [ ] Navs - [View issue](https://github.com/react-spectre/react-spectre/issues/15)
    - [ ] Pagination - [View issue](https://github.com/react-spectre/react-spectre/issues/16)
    - [ ] Panels - [View issue](https://github.com/react-spectre/react-spectre/issues/17)
    - [ ] Popovers - [View issue](https://github.com/react-spectre/react-spectre/issues/18)
    - [ ] Steps - [View issue](https://github.com/react-spectre/react-spectre/issues/19)
    - [ ] Tabs - [View issue](https://github.com/react-spectre/react-spectre/issues/20)
    - [ ] Tiles - [View issue](https://github.com/react-spectre/react-spectre/issues/21)
    - [ ] Toasts - [View issue](https://github.com/react-spectre/react-spectre/issues/22)
    - [ ] Tooltips - [View issue](https://github.com/react-spectre/react-spectre/issues/23)

  - **Utilities**:
    - [ ] ~Colors~
    - [ ] ~Cursors~
    - [ ] ~Display~
    - [ ] Divider - [View issue](https://github.com/react-spectre/react-spectre/issues/24)
    - [ ] Loading - [View issue](https://github.com/react-spectre/react-spectre/issues/25)
    - [ ] ~Position~
    - [ ] ~Shapes~
    - [ ] ~Text~

<div align=center>
<br><br><br>

Made with :heart: by [Rubens Mariuzzo](https://github.com/rmariuzzo).

[MIT License](LICENSE)

</div>
