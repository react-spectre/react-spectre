import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Step = ({ children, className, ...props }) => {
  const classNames = classnames('step', className)
  return (
    <ul className={classNames} {...props}>
      {children}
    </ul>
  )
}

Step.propTypes = {
  children: PropTypes.any
}

export { Step }
