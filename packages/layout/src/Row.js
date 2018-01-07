import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Row = ({ children, ...props }) => {
  const { className, gapless, oneline, ...otherProps } = props
  const classes = []
  if (gapless) classes.push('col-gapless')
  if (oneline) classes.push('col - oneline')

  const classNames = classnames('columns', classes, className)
  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  gapless: PropTypes.bool,
  oneline: PropTypes.bool
}

export { Row }
