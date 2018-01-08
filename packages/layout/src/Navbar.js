import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import NavbarSection from './NavbarSection'
import NavbarBrand from './NavbarBrand'

const NavBar = ({ children, ...props }) => {
  const { className, ...otherProps } = props
  const classNames = classnames('navbar', className)

  return (
    <header className={classNames} {...otherProps}>
      {children}
    </header>
  )
}

NavBar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

NavBar.Section = NavbarSection
NavBar.Brand = NavbarBrand

export { NavbarSection }
