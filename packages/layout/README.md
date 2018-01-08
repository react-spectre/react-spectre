<div align=center>
<img src="assets/react-spectre-logo.png" width="256" height="256">

# `@react-spectre/layout`
React components for Spectre.css's flexbox grid system

<br><br><br>
</div>

## Installation

```shell
yarn add @react-spectre/layout
```

```shell
npm install @react-spectre/layout --save
```

<br>

## Usage

### Grid/Row/Col

```js
import { Grid, Row, Col } from '@react-spectre/layout'
```

```jsx
    <Grid>
        <Row>
            <Col md={6}> md-6 </Col>
            <Col md={6}> md-6 </Col>
        </Row>
    </Grid>
```

### Row

Row component has two boolean props `gapless` and `oneline`. Gapless flag will give you the columns without gap.
By default, Spectre grid has multi-line flexbox enabled. You can add the `oneline` class to columns to make all its child columns positioned in the same single row.


```jsx
    <Grid>
        <Row gapless>
            <Col md={6}> md-6 </Col>
            <Col md={6}> md-6 </Col>
        </Row>
    </Grid>
```

### Col

Col component has a the following props:
1. Regarding column sizes: `xs`, `sm`, `lg`, `xl`, `all`.
2. Regarding column offsets: `offset`
3. Regarding visibility of columns: `hide`, `show`

#### Size

* `xs` apply to window width smaller than or equal to 480px.
* `sm` apply to window width smaller than or equal to 600px.
* `md` apply to window width smaller than or equal to 840px.
* `lg` apply to window width smaller than or equal to 960px.
* `xl` apply to window width smaller than or equal to 1280px.
* `all` apply to all window width, including the width wider than 1280px.


```jsx
    <Grid>
        <Row>
            <Col xs={2} md={6}> xs-2 / md-6 </Col>
            <Col xs={8} md={6}> xs-8 / md-7 </Col>
        </Row>
    </Grid>
```

#### Offset

The Flexbox grid provides margin auto utilities to set offset. Assign `mx`, `ml`, `mr` values to the `offset` props to set margins between columns without using empty columns.

```jsx
    <Grid>
        <Row>
            <Col all={4} offset={'mr'}> md-6 / offset-mr </Col>
            <Col all={2}> col-2 </Col>
        </Row>
    </Grid>
```

#### Visibility

The responsive visibility utilities help show and hide elements on specific viewport sizes.
It has two props `hide` and `show` which get an array of sizes.

```jsx
    <Grid>
        <Row>
            <Col all={6} hide={['xs']}{> md-6 / offset-mr </Col>
            <Col all={6} show={['lg']}> col-2 </Col>
        </Row>
    </Grid>
```


<div align=center>
<br><br><br>

Made with :heart: by [Angel Pi?a](https://github.com/0aps).

[MIT License](LICENSE)

</div>
