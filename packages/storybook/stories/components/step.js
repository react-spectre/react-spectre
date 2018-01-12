import React from 'react'
import { withInfo } from '@storybook/addon-info'

import { Step, StepItem } from '@react-spectre/step'

export default stories => {
  stories.add(
    'Step',
    withInfo(`
      React components for Spectre.css steps.

      ### Installation

      ~~~shell
      npm install @react-spectre/step --save
      ~~~

      ### Usage

      ~~~js
      import { Step, StepItem } from '@react-spectre/step'
      ~~~

      **[Complete documentation](https://github.com/react-spectre/react-spectre/tree/master/packages/step)**
    `)(() => (
      <div style={{ padding: 20 }}>
        <Step>
          <StepItem>
            <a href="#" className="tooltip" data-tooltip="Step 1">
              Step 1
            </a>
          </StepItem>
          <StepItem active>
            <a href="#" className="tooltip" data-tooltip="Step 2">
              Step 2
            </a>
          </StepItem>
          <StepItem>
            <a href="#" className="tooltip" data-tooltip="Step 3">
              Step 3
            </a>
          </StepItem>
          <StepItem>
            <a href="#" className="tooltip" data-tooltip="Step 4">
              Step 4
            </a>
          </StepItem>
        </Step>
      </div>
    ))
  )
}
