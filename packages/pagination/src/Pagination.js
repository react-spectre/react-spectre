import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const MAX_VISIBLE_PAGES = 7

const range = (start, length) => [...Array(length)].map((_, i) => start + i)

/**
 * Returns an array that represents how the pagination should appear.
 *
 * pageRange(7, 5, 100) = [1, '...', 4, 5, 6, '...', 100]
 *
 * This method will throw an exception if visible is less than 7. With less
 * than 7 visible pages it can become impossible to navigate the range.
 */

const pageRange = (visible, current, total) => {
  if (visible < 7) {
    throw new Error('cannot create range with visible pages less than 7')
  }
  const needEllipsis = total > visible
  const hasStartEllipsis = needEllipsis && visible - 3 < current
  const hasEndEllipsis = needEllipsis && current < total - visible + 4
  if (!needEllipsis) {
    return range(1, total)
  } else if (hasStartEllipsis && !hasEndEllipsis) {
    const pageCount = visible - 2
    return [1, '...', ...range(total - pageCount + 1, pageCount)]
  } else if (!hasStartEllipsis && hasEndEllipsis) {
    const pageCount = visible - 2
    return [...range(1, pageCount), '...', total]
  }
  // we have both start and end ellipsis
  const pageCount = visible - 4
  return [
    1,
    '...',
    ...range(current - Math.floor(pageCount / 2), pageCount),
    '...',
    total
  ]
}

const Ellipsis = props => (
  <li className="page-item" {...props}>
    <span>...</span>
  </li>
)

class Pagination extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: this.props.defaultValue
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.defaultValue !== nextProps.defaultValue) {
      this.setState({ current: nextProps.defaultValue })
    }
  }

  getCurrentPage() {
    return this.props.value ? this.props.value : this.state.current
  }

  onPageChange(page) {
    if (this.props.value) {
      this.props.onChange(page)
    } else {
      this.setState({ current: page })
    }
  }

  render() {
    const { total, pageText, icon, iconClassNames } = this.props
    if (!pageText || !pageText.prev || !pageText.next) {
      throw new Error('Pagination component provided unusable pageText Shape')
    }
    const current = this.getCurrentPage()

    return total === 0 ? null : (
      <div>
        <ul className="pagination">
          <li className={classnames('page-item', { disabled: current === 1 })}>
            {!icon ? (
              <a href={'#'} onClick={() => this.onPageChange(current - 1)}>
                {pageText.prev}
              </a>
            ) : (
              <a onClick={() => this.onPageChange(current - 1)}>
                <i className={iconClassNames.prev} />
              </a>
            )}
          </li>
          {pageRange(MAX_VISIBLE_PAGES, current, total).map((pageNum, i) => {
            const isDisabled = pageNum === current
            const classNames = isDisabled
              ? classnames('page-item', 'active')
              : classnames('page-item')
            const key = `${pageNum}-${i}`
            return pageNum === '...' ? (
              <Ellipsis key={key} />
            ) : (
              <li className={classNames} key={key}>
                <a href={'#'} onClick={() => this.onPageChange(pageNum)}>
                  {pageNum}
                </a>
              </li>
            )
          })}

          <li
            className={classnames('page-item', { disabled: current === total })}
          >
            {!icon ? (
              <a href={'#'} onClick={() => this.onPageChange(current + 1)}>
                {pageText.next}
              </a>
            ) : (
              <a onClick={() => this.onPageChange(current + 1)}>
                <i className={iconClassNames.next} />
              </a>
            )}
          </li>
        </ul>
      </div>
    )
  }
}

Pagination.propTypes = {
  icon: PropTypes.bool,
  iconClassNames: PropTypes.shape({
    prev: PropTypes.string.isRequired,
    next: PropTypes.string.isRequired
  }),
  defaultValue: PropTypes.number,
  pageText: PropTypes.shape({
    prev: PropTypes.string.isRequired,
    next: PropTypes.string.isRequired
  }),
  onChange: PropTypes.func,
  total: PropTypes.number.isRequired,
  value: PropTypes.number
}

Pagination.defaultProps = {
  icon: false,
  iconClassNames: {
    prev: 'icon icon-arrow-left',
    next: 'icon icon-arrow-right'
  },
  defaultValue: 1,
  pageText: {
    prev: 'Prev',
    next: 'Next'
  },
  onChange: () => undefined,
  total: 0,
  value: 0
}

export { Pagination }
