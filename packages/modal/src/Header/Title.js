import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Title = ({ children, className, ...props }) => {
  const classNames = classnames('modal-title', className)
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}
Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

export { Title }
