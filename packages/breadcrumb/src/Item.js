import React from 'react'
import proptypes from 'prop-types'
import classnames from 'classnames'

const Item = props => {
  const { children, className, ...otherProps } = props
  const classNames = classnames('breadcrumb-item', className)

  return (
    <li className={classNames} {...otherProps}>
      {children}
    </li>
  )
}

Item.propTypes = {
  children: proptypes.node,
  className: proptypes.string
}

export { Item }
