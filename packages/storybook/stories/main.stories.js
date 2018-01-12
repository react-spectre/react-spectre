import { storiesOf } from '@storybook/react'

import form from './elements/form'
import icon from './elements/icon'
import label from './elements/label'
import media from './elements/media'
import table from './elements/table'
import button from './elements/button'
import typography from './elements/typography'

import grid from './layout/grid'
import navbar from './layout/navbar'

import bar from './components/bar'
import avatar from './components/avatar'
import accordion from './components/accordion'
import autocomplete from './components/autocomplete'
import step from './components/step'
import toast from './components/toast'

const elementStories = storiesOf('Elements', module)
const layoutStories = storiesOf('Layout', module)
const componentsStories = storiesOf('Components', module)

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
navbar(layoutStories)

// Components Stories
accordion(componentsStories)
autocomplete(componentsStories)
avatar(componentsStories)
bar(componentsStories)
step(componentsStories)
toast(componentsStories)
