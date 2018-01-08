import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const NavBarBrand = ({ children, ...props }) => {
  const { className, href, ...otherProps } = props
  const classNames = classnames('navbar-brand', className)

  return (
    <a href={href || '#'} className={classNames} {...otherProps}>
      {children}
    </a>
  )
}

NavBarBrand.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  href: PropTypes.string
}

export default NavBarBrand
