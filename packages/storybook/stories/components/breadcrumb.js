import React from 'react'
import { withInfo } from '@storybook/addon-info'

import { Breadcrumb } from '@react-spectre/breadcrumb'

export default stories => {
  stories.add(
    'Breadcrumb',
    withInfo(`
      React components for Spectre.css breadcrumb element.

      ### Installation

      ~~~shell
      npm install @react-spectre/breadcrumb --save
      ~~~

      ### Usage

      ~~~js
      import { Breadcrumb } from '@react-spectre/breadcrumb'
      ~~~

      **[Complete documentation](https://github.com/react-spectre/react-spectre/tree/master/packages/breadcrumb)**
    `)(() => (
      <div style={{ padding: 20 }}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="#">Home</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="#">Settings</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="#">Change avatar</a>
          </Breadcrumb.Item>
        </Breadcrumb>

        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="#">Home</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="#">Settings</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Search result: <a href="#">Spectre</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    ))
  )
}
