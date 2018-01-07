import React from 'react'
import { withInfo } from '@storybook/addon-info'

import { Grid, Row } from '@react-spectre/layout'
import {Col} from "../../../layout/src/Col";

export default stories => {
  stories.add(
    'Grid',
    withInfo(`
      React components for Spectre.css's flexbox grid system..

      ### Installation

      ~~~shell
      npm install @react-spectre/layout --save
      ~~~

      ### Usage

      ~~~js
      import { Grid, Row, Col } from '@react-spectre/layout'
      ~~~

      **[Complete documentation](https://github.com/react-spectre/react-spectre/tree/master/packages/layout)**
    `)(() => (
      <div style={{ padding: 20 }}>
        <Grid>
          <Row>
            <Col md={6}> md-6 </Col>
            <Col md={6}> md-6 </Col>
          </Row>
          <Row gapless>
            <Col md={6}> md-6 </Col>
            <Col md={6}> md-6 </Col>
          </Row>
          <Row>
            <Col all={6}>
              col-6
              <Row oneline>
                <Col all={6}> col-6 </Col>
                <Col all={6}> col-6 </Col>
              </Row>
            </Col>
            <Col all={6}> col-6 </Col>
          </Row>
        </Grid>
      </div>
    ))
  )
}
