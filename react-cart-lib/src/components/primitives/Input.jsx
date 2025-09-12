import React from 'react'
import PropTypes from 'prop-types'

export default function Input({ label, value, onChange, placeholder, type = 'text', error, className = '' }) {
  return (
    <label className={`block text-sm ${className}`}>
      {label && <div className="mb-1 text-gray-700">{label}</div>}
      <input
        type={type}
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-200"
      />
      {error && <div className="text-xs text-red-500 mt-1">{error}</div>}
    </label>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string
}