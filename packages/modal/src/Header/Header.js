import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Title } from './Title'
import { CloseButton } from './CloseButton'

const Header = ({ showCloseButton, className, children, ...props }) => {
  const classNames = classnames('modal-header', className)
  return (
    <div className={classNames} {...props}>
      {showCloseButton && <CloseButton />}
      {children}
    </div>
  )
}
Header.propTypes = {
  showCloseButton: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any
}
Header.defaultProps = {
  showCloseButton: true
}

Header.Title = Title

export { Header }
