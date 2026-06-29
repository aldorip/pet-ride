export type PaymentStatus =
  | 'PENDING'
  | 'PROCESSING'
  | 'PAID'
  | 'FAILED'
  | 'REFUNDED'
  | 'PARTIALLY_REFUNDED'

export type PaymentMethod =
  | 'PIX'
  | 'CREDIT_CARD'
  | 'DEBIT_CARD'
  | 'BOLETO'
  | 'WALLET'

export interface Payment {
  id: string
  rideId: string
  userId: string
  method: PaymentMethod
  status: PaymentStatus
  amountBrl: number
  taxAmountBrl: number
  driverShareBrl: number
  platformFeeBrl: number
  gatewayProvider?: string | null
  gatewayPaymentId?: string | null
  gatewayPixCode?: string | null
  gatewayPixQrCode?: string | null
  gatewayBoletoUrl?: string | null
  gatewayBoletoBarcode?: string | null
  paidAt?: Date | null
  refundedAt?: Date | null
  refundAmountBrl?: number | null
  refundReason?: string | null
  createdAt: Date
  updatedAt: Date
}

export interface CreatePaymentDto {
  rideId: string
  method: PaymentMethod
}

export interface PixPaymentData {
  qrCode: string     // base64
  copyPaste: string  // copia-e-cola
  expiresAt: string  // ISO
}

export interface CardPaymentData {
  cardNumber: string  // last 4 digits
  brand: string
  holderName: string
}
