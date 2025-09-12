import React from 'react'
import PropTypes from 'prop-types'

export default function Card({ title, subtitle, children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-gray-100 p-4 shadow-sm bg-white ${className}`}>
      {title && <div className="text-lg font-semibold">{title}</div>}
      {subtitle && <div className="text-sm text-gray-500 mb-3">{subtitle}</div>}
      <div>{children}</div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node
}