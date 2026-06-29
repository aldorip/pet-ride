import type { RideType } from './ride.types'
import type { PetSize } from './pet.types'

export interface Fare {
  id: string
  name: string
  rideType: RideType
  basePriceBrl: number
  pricePerKmBrl: number
  pricePerMinBrl: number
  minimumPriceBrl: number
  surgeMultiplier: number
  petSizeExtra: Partial<Record<PetSize, number>>
  isActive: boolean
  validFrom: Date
  validUntil?: Date | null
  createdAt: Date
  updatedAt: Date
}

export interface FareEstimateRequest {
  pickupLatitude: number
  pickupLongitude: number
  destinationLatitude: number
  destinationLongitude: number
  petSize: PetSize
  rideType: RideType
}

export interface FareEstimateResponse {
  fareId: string
  fareName: string
  distanceKm: number
  durationMinutes: number
  estimatedPriceBrl: number
  breakdown: {
    base: number
    distanceFee: number
    timeFee: number
    petSizeExtra: number
    surgeMultiplier: number
  }
}
