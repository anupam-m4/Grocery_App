export enum OrderStatus {
  Pending = 'pending',
  Accepted = 'accepted',
  Failed = 'failed',
}

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  zone?: string
  area?: string
}
