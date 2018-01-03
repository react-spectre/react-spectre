<div align=center>
<img src="assets/react-spectre-logo.png" width="256" height="256">

# `@react-spectre/button`
React components for Spectre.css's buttons.

<br><br><br>
</div>

## Installation

```shell
yarn add @react-spectre/button
```

```shell
npm install @react-spectre/button --save
```

<br><br><br>

## Usage

### Buttons

There is 1 single component used for buttons: `Button`.

```js
import { Button } from '@react-spectre/button'
```

Buttons can have 3 different base styles: default, primary and link. The two latter can be specifed using props with the same name:

```jsx
<Button>Default</Button>
<Button primary>Primary</Button>
<Button link>Link</Button>
```

Buttons can be colored using: `success` or `error` props:

```jsx
<Button success>Success</Button>
<Button error>Error</Button>
```

Buttons can have two sizes using: `small` or `large` props:

```jsx
<Button small>Small</Button>
<Button large>Large</Button>
```

Buttons can have fixed sizes using: `action` or `circle` props:

```jsx
<Button action>Action</Button>
<Button circle>Circle</Button>
```

Buttons can have 3 different states using: `active`, `disabled` or `loading`:

```jsx
<Button active>Active</Button>
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>
```

<div align=center>
<br><br><br>

Made with :heart: by [Rubens Mariuzzo](https://github.com/rmariuzzo).

[MIT License](LICENSE)

</div>
