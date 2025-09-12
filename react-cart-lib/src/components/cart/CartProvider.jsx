import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext(null)
const STORAGE_KEY = 'my_cart_v1'

export default function CartProvider({ children, initial = [] }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : initial
    } catch {
      return initial
    }
  })

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)) } catch {}
  }, [items])

  const addItem = (item) => {
    setItems((prev) => {
      const idx = prev.findIndex(i => i.id === item.id)
      if (idx > -1) {
        const copy = [...prev]
        copy[idx].quantity = (copy[idx].quantity || 0) + (item.quantity || 1)
        return copy
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }]
    })
  }

  const updateItem = (id, patch) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, ...patch } : i))
  }

  const removeItem = (id) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  const clear = () => setItems([])

  const getCount = () => items.reduce((s, i) => s + (i.quantity || 0), 0)
  const getTotal = () => items.reduce((s, i) => s + (i.price || 0) * (i.quantity || 0), 0)

  const value = { items, addItem, updateItem, removeItem, clear, getCount, getTotal }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}