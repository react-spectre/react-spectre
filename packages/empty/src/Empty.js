import React from 'react'
import PropTypes from 'prop-types'

const Empty = ({ icon, title, subTitle, children }) => {
  /**
   * Renders icon and replaces the prefix if added.
   * @param {String} icon - icon name prop.
   */
  const renderIcon = (icon) => {
    const iconName = icon.replace('icon-', '')

    return (
      <div class="empty-icon">
        <i class=`icon icon-${iconName}`></i>
      </div>
    )
  }

  return (
    <div class="empty">
      { icon && this.renderIcon(icon) }
      { title && <p class="empty-title h5">{title}</p> }
      { subTitle && <p class="empty-subtitle">{subTitle}</p> }
      { children }
    </div>
  )
}

Empty.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.node,
}

export { Empty }
