import React from 'react'

import { storiesOf } from '@storybook/react'

import Typography from './elements/typography'
import Button from './elements/button'

const stories = storiesOf('Elements', module)

Typography(stories)
Button(stories)
