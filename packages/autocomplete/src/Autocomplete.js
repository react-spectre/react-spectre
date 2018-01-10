import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Autocomplete = ({ children, ...props }) => {
  const { className, ...otherProps } = props
  const classNames = classnames('', className)

  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  )
}

Autocomplete.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

export { Autocomplete }
