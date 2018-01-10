import React from 'react'
import { withInfo } from '@storybook/addon-info'

import { Autocomplete } from '@react-spectre/autocomplete'

export default stories => {
  stories.add(
    'Autocomplete',
    withInfo(`
      React components htmlFor Spectre.css autocomplete element.

      ### Installation

      ~~~shell
      npm install @react-spectre/autocomplete --save
      ~~~

      ### Usage

      ~~~js
      import { Autocomplete } from '@react-spectre/autocomplete'
      ~~~

      **[Complete documentation](https://github.com/react-spectre/react-spectre/tree/master/packages/autocomplete)**
    `)(() => (
      <div style={{ padding: 20 }}>

      </div>
    ))
  )
}
