import React from 'react'
import { useCart } from './useCart'
import Button from '../primitives/Button'
import Card from '../primitives/Card'
import CartList from './CartList'

export default function CartSidebar({ onCheckout }) {
  const { items, updateItem, removeItem, getCount, getTotal, clear } = useCart()
  return (
    <div className="w-full max-w-md bg-white p-4">
      <Card title={`Giỏ hàng (${getCount()})`} className="mb-4">
        <CartList items={items} onUpdate={updateItem} onRemove={removeItem} />
        <div className="mt-4 flex justify-between items-center">
          <div>
            <div className="text-sm text-gray-500">Tổng</div>
            <div className="text-lg font-semibold">₫{getTotal().toLocaleString()}</div>
          </div>
          <div className="flex flex-col gap-2">
            <Button onClick={() => onCheckout && onCheckout(items)}>Thanh toán</Button>
            <Button variant="ghost" onClick={() => clear()}>Xóa tất cả</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}