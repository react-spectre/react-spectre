import { storiesOf } from '@storybook/react'

import typography from './elements/typography'
import button from './elements/button'
import table from './elements/table'

const stories = storiesOf('Elements', module)

typography(stories)
button(stories)
table(stories)
