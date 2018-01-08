import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const NavbarSection = ({ children, ...props }) => {
  const { className, center, ...otherProps } = props
  const classNames = classnames(
    {
      'navbar-section': !center,
      'navbar-center': center
    },
    className
  )

  return (
    <section className={classNames} {...otherProps}>
      {children}
    </section>
  )
}

NavbarSection.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  center: PropTypes.bool
}

export { NavbarSection }
