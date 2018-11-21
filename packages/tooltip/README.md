<div align=center>
<img src="assets/react-spectre-logo.png" width="256" height="256">

# `@react-spectre/tooltip`
React components for Spectre.css's icons.

<br><br><br>
</div>

## Installation

```shell
yarn add @react-spectre/tooltip
```

```shell
npm install @react-spectre/tooltip --save
```

<br><br><br>

## Usage

### Tooltip

There is 1 single component used for tooltip: `Tooltip`.

```js
import { Tooltip } from '@react-spectre/tooltip'
```

### Tooltip position

The `Tooltip` component position:

```jsx
<Tooltip position="top">
  {wrappedElement}
</Tooltip>

<Tooltip position="right">
  {wrappedElement}
</Tooltip>

<Tooltip position="bottom">
  {wrappedElement}
</Tooltip>

<Tooltip position="left">
  {wrappedElement}
</Tooltip>

```

### Tooltip text

The `Tooltip` the text to display in the tooltip:

```jsx
<Tooltip text="My cool tooltip">
  {wrappedElement}
</Tooltip>

```

<div align=center>
<br><br><br>

Made with :heart: by [William Cabrera](https://github.com/williamcabrera4).

[MIT License](LICENSE)

</div>
