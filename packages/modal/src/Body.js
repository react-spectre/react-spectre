import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Body = ({ children, className, ...props }) => {
  const classNames = classnames('modal-body', className)
  return (
    <div className={classNames} {...props}>
      <div className="content">{children}</div>
    </div>
  )
}
Body.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

export { Body }
