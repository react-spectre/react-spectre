import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { NavbarSection } from './NavbarSection'
import { NavbarBrand } from './NavbarBrand'

const Navbar = ({ children, ...props }) => {
  const { className, ...otherProps } = props
  const classNames = classnames('navbar', className)

  return (
    <header className={classNames} {...otherProps}>
      {children}
    </header>
  )
}

Navbar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

Navbar.Section = NavbarSection
Navbar.Brand = NavbarBrand

export { Navbar }
