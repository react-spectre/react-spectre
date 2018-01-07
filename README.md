<div align=center>
<img src=".github/react-spectre-logo.png" width="256" height="256">

# react-spectre
React components for Spectre.css - a Lightweight, Responsive and Modern CSS Framework

<br><br><br>
</div>

<div align=center>

# This project is under development.
## Not ready for production use.

</div>

<br><br><br>

## Packages

 - [**Typography** - `@react-spectre/typography`](packages/typography) - <!-- markdown-exec(cmd:./node_modules/.bin/gzip-size ./packages/typography/dist/typography.js, match:\d+ \w+) -->714 B<!-- /markdown-exec --> (gzipped!)
   - Components: `H1`, `H2`, `H3`, `H4`, `H5`, `H6` and `Label`.

 - [**Table** - `@react-spectre/table`](packages/table) - <!-- markdown-exec(cmd:./node_modules/.bin/gzip-size ./packages/table/dist/table.js, match:\d+ \w+) -->719 B<!-- /markdown-exec --> (gzipped!)
   - Components: `Table`, `Header`, `Body`, `Row`, `Heading` and `Cell`.

 - [**Button** - `@react-spectre/button`](packages/button) - <!-- markdown-exec(cmd:./node_modules/.bin/gzip-size ./packages/button/dist/button.js, match:\d+ \w+) -->777 B<!-- /markdown-exec --> (gzipped!)
   - Components: `Button` and `Group`.

 - [**Form** - `@react-spectre/form`](packages/form) - <!-- markdown-exec(cmd:./node_modules/.bin/gzip-size ./packages/form/dist/form.js, match:\d+ \w+) -->879 B<!-- /markdown-exec --> (gzipped!)
   - Components: FormGroup`, `Input`, `TextArea`, `Select`, `Radio`, `CheckBox` and `Switch`.

 - [**Icon** - `@react-spectre/icon`](packages/icon) - <!-- markdown-exec(cmd:./node_modules/.bin/gzip-size ./packages/icon/dist/icon.js, match:\d+ \w+) -->520 B<!-- /markdown-exec --> (gzipped!)
   - Components: `Button` and `Group`.

  - [**Layout** - `@react-spectre/layout`](packages/layout) - <!-- markdown-exec(cmd:./node_modules/.bin/gzip-size ./packages/layout/dist/layout.js, match:\d+ \w+) -->776 B<!-- /markdown-exec --> (gzipped!)
  - Components: `Grid`, `Row`, `Col`.

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


<div align=center>
<br><br><br>

Made with :heart: by [Rubens Mariuzzo](https://github.com/rmariuzzo).

[MIT License](LICENSE)

</div>
