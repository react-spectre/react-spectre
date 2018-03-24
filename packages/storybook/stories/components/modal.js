import React from 'react'
import { withInfo } from '@storybook/addon-info'

import { Modal } from '@react-spectre/modal'

export default stories => {
  stories.add(
    'Modal',
    withInfo(`
      React components for Spectre.css modal element.

      ### Installation

      ~~~shell
      npm install @react-spectre/modal --save
      ~~~

      ### Usage

      ~~~js
      import { modal } from '@react-spectre/modal'
      ~~~

      **[Complete documentation](https://github.com/react-spectre/react-spectre/tree/master/packages/modal)**
    `)(() => (
      <div style={{ padding: 20 }}>
        <Modal active>
          <Modal.Header>
            <Modal.Header.Title className={'h5'}>
              Modal title
            </Modal.Header.Title>
          </Modal.Header>
          <Modal.Body>Modal body...</Modal.Body>
          <Modal.Footer>Modal footer...</Modal.Footer>
        </Modal>
      </div>
    ))
  )
}
