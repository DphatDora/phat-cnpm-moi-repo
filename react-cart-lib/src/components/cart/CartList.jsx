import React from 'react'
import CartItem from './CartItem'

export default function CartList({ items = [], onUpdate, onRemove }) {
  if (items.length === 0) return <div className="p-4 text-gray-500">Giỏ hàng trống</div>
  return (
    <div>
      {items.map(item => (
        <CartItem key={item.id} item={item} onUpdate={onUpdate} onRemove={onRemove} />
      ))}
    </div>
  )
}