import React from 'react'
import PropTypes from 'prop-types'
import Button from '../primitives/Button'

export default function CartItem({ item, onUpdate, onRemove }) {
  const changeQty = (delta) => {
    const newQ = Math.max(0, (item.quantity || 0) + delta)
    if (newQ === 0) return onRemove(item.id)
    onUpdate(item.id, { quantity: newQ })
  }

  return (
    <div className="flex items-center gap-3 border-b border-gray-100 py-3">
      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-sm">
        {item.image ? <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" /> : <span className="text-xs text-gray-500">No image</span>}
      </div>
      <div className="flex-1">
        <div className="font-medium">{item.name}</div>
        <div className="text-sm text-gray-500">{item.options ? Object.values(item.options).join(' • ') : null}</div>
        <div className="text-sm mt-1">₫{(item.price || 0).toLocaleString()}</div>
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" onClick={() => changeQty(-1)}>-</Button>
        <div className="px-2">{item.quantity}</div>
        <Button size="sm" onClick={() => changeQty(1)}>+</Button>
        <Button variant="ghost" size="sm" onClick={() => onRemove(item.id)}>Xóa</Button>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  onUpdate: PropTypes.func,
  onRemove: PropTypes.func
}