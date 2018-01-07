import React from 'react'
import { withInfo } from '@storybook/addon-info'

import {
    Grid,
    Col,
    Row
} from '@react-spectre/layout'

export default stories => {
    stories.add(
        'Form',
        withInfo(`
      React components for Spectre.css's flexbox grid system..

      ## Installation

      ~~~shell
      npm install @react-spectre/layout --save
      ~~~

      ## Usage

      ~~~js
      import { Grid, Row, Col } from '@react-spectre/layout'
      ~~~

      **[Complete documentation](https://github.com/react-spectre/react-spectre/tree/master/packages/layout)**
    `)(() => (
            <div style={{ padding: 20, width: 400 }}>
                <Grid>
                    <Row>
                        <Col md={6}> md-6 </Col>
                        <Col md={6}> md-7 </Col>
                    </Row>
                </Grid>
            </div>
        ))
    )
}
