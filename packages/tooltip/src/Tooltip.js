import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

/**
 * The Tooltip component.
 */
const Tooltip = props => {
  const {className, text, position, ...otherProps} = props

  const tooltipPosition = `tooltip-${position}`;
  const tooltipClassName = classname(className, `tooltip-${position}`);

  return (
    <div
      dataTooltip={text}
      className={tooltipClassName}
      {...otherProps}
    >
      {children}
    </div>
  )
}

Tooltip.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  position: PropTypes.string,
}

Tooltip.defaultProps = {
  position: 'top',
}


export {Tooltip}
