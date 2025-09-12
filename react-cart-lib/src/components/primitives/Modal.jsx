import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose && onClose()
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/40" onClick={() => onClose && onClose()} />
      <div role="dialog" aria-modal="true" className="relative z-10 w-full max-w-lg mx-4">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node
}