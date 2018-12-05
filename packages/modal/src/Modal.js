import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Header } from './Header'
import { Body } from './Body'
import { Footer } from './Footer'

const Modal = ({ active, small, large, className, children, ...props }) => {
  const classNames = classnames('modal', className, {
    'modal-sm': small,
    'modal-lg': large,
    active
  })
  return (
    <div className={classNames} {...props}>
      <a href="#close" className="modal-overlay" aria-label="Close" />
      <div className="modal-container">{children}</div>
    </div>
  )
}
Modal.propTypes = {
  active: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any
}

Modal.Header = Header
Modal.Body = Body
Modal.Footer = Footer

export { Modal }
