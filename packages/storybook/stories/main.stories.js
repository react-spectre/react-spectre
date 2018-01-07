import { storiesOf } from '@storybook/react'

import typography from './elements/typography'
import button from './elements/button'
import table from './elements/table'
import form from './elements/form'
import icon from './elements/icon'

import grid from './layout/grid'

const elementStories = storiesOf('Elements', module)
const layoutStories = storiesOf('Layout', module)

// Elements Stories
typography(elementStories)
button(elementStories)
table(elementStories)
form(elementStories)
icon(elementStories)

// Layout Stories
grid(layoutStories)
