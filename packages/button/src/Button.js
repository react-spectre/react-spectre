import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Button = ({ children, ...props }) => {
  const {
    className,
    primary,
    link,
    success,
    error,
    block,
    ...otherProps
  } = props

  const classNames = cn(
    'btn',
    {
      'btn-primary': primary,
      'btn-link': link,
      'btn-success': success,
      'btn-error': error,
      'btn-block': block
    },
    className
  )

  return (
    <button {...otherProps} className={classNames}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  primary: PropTypes.bool,
  link: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  block: PropTypes.bool
}

export { Button }
