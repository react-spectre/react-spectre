<div align=center>
<img src="assets/react-spectre-logo.png" width="256" height="256">

# `@react-spectre/modal`

React components for Spectre.css's modal

<br><br><br>

</div>

## Installation

```shell
yarn add @react-spectre/modal
```

```shell
npm install @react-spectre/modal --save
```

<br><br><br>

## Usage

You just need to import the library by doing so

```js
import { Modal } from '@react-spectre/modal'
```

And in the `render` method

```jsx
<Modal>
  <Modal.Header>
    <Modal.Header.Title className="h5">Modal title</Modal.Header.Title>
  </Modal.Header>
  <Modal.Body>Content here...</Modal.Body>
  <Modal.Footer>Footer here...</Modal.Footer>
</Modal>
```

To show the modal you must pass the `active` prop in the `Modal` component. This prop is a `boolean` type.

You can also choose either to show or hide the close button in the header like so:

```jsx
...
<Modal.Header showCloseButton={false}>...</Modal.Header>
...
```

By default the `showCloseButton` prop is `true`.

### Sizes

For small size you just need to pass `small` and for large just `large` as props for
the `Modal` component.

**Example:**

Small

```jsx
<Modal small>...</Modal>
```

Large

```jsx
<Modal large>...</Modal>
```

<div align=center>
<br><br><br>

Made with :heart: by [Rubens Mariuzzo](https://github.com/rmariuzzo).

[MIT License](LICENSE)

</div>
