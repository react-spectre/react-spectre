import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const CloseButton = ({ className, ...props }) => {
  const classNames = classnames('btn', 'btn-clear', 'float-right', className)
  return (
    <a href="#close" className={classNames} aria-label="Close" {...props} />
  )
}
CloseButton.propTypes = {
  className: PropTypes.string
}

export { CloseButton }
