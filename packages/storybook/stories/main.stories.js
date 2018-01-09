import { storiesOf } from '@storybook/react'

import form from './elements/form'
import icon from './elements/icon'
import label from './elements/label'
import media from './elements/media'
import table from './elements/table'
import button from './elements/button'
import typography from './elements/typography'

import grid from './layout/grid'

const elementStories = storiesOf('Elements', module)
const layoutStories = storiesOf('Layout', module)

// Elements Stories
typography(elementStories)
button(elementStories)
table(elementStories)
form(elementStories)
icon(elementStories)
label(elementStories)
media(elementStories)

// Layout Stories
grid(layoutStories)
