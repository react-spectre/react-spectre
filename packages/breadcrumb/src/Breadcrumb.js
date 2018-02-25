import React from 'react'
import proptypes from 'prop-types'
import classnames from 'classnames'
import { Item } from './Item'

const Breadcrumb = props => {
  const { children, className, ...otherProps } = props
  const classNames = classnames('breadcrumb', className)

  return (
    <ul className={classNames} {...otherProps}>
      {children}
    </ul>
  )
}

Breadcrumb.propTypes = {
  children: proptypes.node,
  className: proptypes.string
}

Breadcrumb.Item = Item

export { Breadcrumb }
