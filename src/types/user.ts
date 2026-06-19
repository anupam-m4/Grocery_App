export const OrderStatus = {
  Pending: 'pending',
  Accepted: 'accepted',
  Failed: 'failed',
} as const

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  zone?: string
  area?: string
}
