import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const StepItem = ({ children, className, active, ...props }) => {
  const classNames = classnames('step-item', className, {
    active
  })
  return (
    <li className={classNames} {...props}>
      {children}
    </li>
  )
}

StepItem.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool
}

export { StepItem }
