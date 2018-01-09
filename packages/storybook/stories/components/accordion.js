import React from 'react'
import { withInfo } from '@storybook/addon-info'

import { Accordion } from '@react-spectre/accordion'

export default stories => {
  stories.add(
    'Accordion',
    withInfo(`
      React components for Spectre.css's navigation bar.

      ### Installation

      ~~~shell
      npm install @react-spectre/accordion --save
      ~~~

      ### Usage

      ~~~js
      import { Accordion } from '@react-spectre/accordion'
      ~~~

      **[Complete documentation](https://github.com/react-spectre/react-spectre/tree/master/packages/accordion)**
    `)(() => (
      <div style={{ padding: 20 }}>
        <Accordion>
          <Accordion.Body>
            <span>Example accordion</span>
          </Accordion.Body>
        </Accordion>
      </div>
    ))
  )
}
