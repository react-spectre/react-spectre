import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Footer = ({ children, className, ...props }) => {
  const classNames = classnames('modal-footer', className)
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}
Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

export { Footer }
