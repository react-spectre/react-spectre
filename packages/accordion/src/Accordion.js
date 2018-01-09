import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Body } from './Body'

const Accordion = ({ children, ...props }) => {
  const { className, ...otherProps } = props
  const classNames = classnames('accordion', className)

  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  )
}

Accordion.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

Accordion.Body = Body

export { Accordion }
