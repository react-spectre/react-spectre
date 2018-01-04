import React from 'react'
import { withInfo } from '@storybook/addon-info'

import { Input, TextArea, Select } from '@react-spectre/form'

export default stories => {
  stories.add(
    'Form',
    withInfo(`
      React components for Spectre.css's form elements.

      ## Installation

      ~~~shell
      npm install @react-spectre/form --save
      ~~~

      ## Usage

      ~~~js
      import { Form } from '@react-spectre/form'
      ~~~

      **[Complete documentation](https://github.com/react-spectre/react-spectre/tree/master/packages/form)**
    `)(() => (
      <div style={{ padding: 20, width: 400 }}>
        <Input label="Name" placeholder="Name" />
        <Input label="Email" placeholder="Email" type="email" />
        <TextArea label="Message" placeholder="Message" />
        <Select>
          <option>Choose an option</option>
          <option>Slack</option>
          <option>Skype</option>
          <option>Hipchat</option>
        </Select>
        <Select multiple>
          <option>Choose an option</option>
          <option>Slack</option>
          <option>Skype</option>
          <option>Hipchat</option>
        </Select>
      </div>
    ))
  )
}
