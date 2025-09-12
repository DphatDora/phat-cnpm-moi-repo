import React, { useState } from 'react'
import { useCart } from '../cart/useCart'
import Input from '../primitives/Input'
import Button from '../primitives/Button'

export default function AddToCartForm({ product }) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [note, setNote] = useState('')

  function onAdd() {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      options: { note },
      quantity: qty
    })
  }

  return (
    <div className="space-y-3">
      <div className="font-semibold">{product.name}</div>
      <div>₫{product.price.toLocaleString()}</div>
      <div className="flex gap-2">
        <Button size="sm" onClick={() => setQty(q => Math.max(1, q - 1))}>-</Button>
        <div className="px-2">{qty}</div>
        <Button size="sm" onClick={() => setQty(q => q + 1)}>+</Button>
      </div>
      <Input label="Ghi chú" value={note} onChange={setNote} placeholder="VD: không giao giờ trưa" />
      <Button onClick={onAdd}>Thêm vào giỏ</Button>
    </div>
  )
}