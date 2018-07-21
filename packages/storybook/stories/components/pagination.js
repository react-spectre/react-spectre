import React from 'react'
import { withInfo } from '@storybook/addon-info'

import { Pagination } from '@react-spectre/pagination'

export default stories => {
  stories.add(
    'Pagination',
    withInfo(`
      React components for Spectre.css avatar element.

      ### Installation

      ~~~shell
      npm install @react-spectre/pagination --save
      ~~~

      ### Usage

      ~~~js
      import { Pagination } from '@react-spectre/pagination'
      ~~~

      **[Complete documentation](https://github.com/react-spectre/react-spectre/tree/master/packages/pagination)**
    `)(() => {
      let value = 5
      return (
        <div style={{ padding: 20 }}>
          <Pagination total={10} />
          <br />
          <Pagination icon total={20} />
          <br />
          <Pagination
            total={10}
            value={value}
            onChange={page => (value = page)}
          />
        </div>
      )
    })
  )
}
