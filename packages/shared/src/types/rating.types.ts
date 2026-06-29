export interface Rating {
  id: string
  rideId: string
  fromUserId: string
  toUserId: string
  score: number  // 1–5
  comment?: string | null
  tags: string[]
  createdAt: Date
}

export interface CreateRatingDto {
  rideId: string
  toUserId: string
  score: number
  comment?: string
  tags?: string[]
}

// Tags pré-definidas sugeridas ao usuário
export const CUSTOMER_RATING_TAGS = [
  'Pontual',
  'Cuidadoso com o pet',
  'Carro limpo',
  'Comunicativo',
  'Profissional',
  'Veículo adequado',
] as const

export const DRIVER_RATING_TAGS = [
  'Pet bem comportado',
  'Cliente atencioso',
  'Instruções claras',
  'Pet com documentação',
  'Fácil de encontrar',
] as const
