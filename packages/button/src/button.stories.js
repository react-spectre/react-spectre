import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'

import { Button } from '.'

const stories = storiesOf('Elements', module)

stories.addDecorator(withKnobs)

stories.add(
  'Buttons',
  withInfo(`
    React components for Spectre.css's buttons.

    ## Installation

    ~~~shell
    npm install @react-spectre/button --save
    ~~~

    ## Usage

    ~~~js
    import { Button } from '@react-spectre/button'
    ~~~

    **[Complete documentation](https://github.com/react-spectre/react-spectre/tree/master/packages/button)**
  `)(() => (
    <div>
      <Button>Default Button</Button>
      <br />
      <br />
      <Button primary>Primary Button</Button>
      <br />
      <br />
      <Button link>Primary Button</Button>
      <br />
      <br />
      <Button success>Primary Button</Button>
      <br />
      <br />
      <Button error>Primary Button</Button>
    </div>
  ))
)
