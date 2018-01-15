import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Title } from './Title'
import { SubTitle } from './SubTitle'

const Header = props => {
  const { children, className, ...otherProps } = props
  const classNames = classnames('card-header', className)

  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Header.Title = Title
Header.SubTitle = SubTitle

export { Header }
