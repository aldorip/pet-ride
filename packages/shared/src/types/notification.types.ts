export type NotificationType =
  | 'RIDE_REQUEST'
  | 'RIDE_ACCEPTED'
  | 'DRIVER_ON_WAY'
  | 'DRIVER_ARRIVED'
  | 'RIDE_STARTED'
  | 'RIDE_COMPLETED'
  | 'RIDE_CANCELLED'
  | 'PAYMENT_CONFIRMED'
  | 'PAYMENT_FAILED'
  | 'RATING_RECEIVED'
  | 'PROMO'
  | 'SYSTEM'

export type NotificationChannel =
  | 'PUSH'
  | 'SMS'
  | 'EMAIL'
  | 'WHATSAPP'
  | 'IN_APP'

export interface Notification {
  id: string
  userId: string
  type: NotificationType
  channel: NotificationChannel
  title: string
  body: string
  data?: Record<string, unknown> | null
  isRead: boolean
  readAt?: Date | null
  sentAt?: Date | null
  createdAt: Date
}

export interface MarkNotificationReadDto {
  notificationIds: string[]
}
