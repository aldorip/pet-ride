import type { PublicUser } from './user.types'
import type { Pet } from './pet.types'

export type RideStatus =
  | 'PENDING'
  | 'ACCEPTED'
  | 'DRIVER_ON_WAY'
  | 'ARRIVED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'CANCELLED'
  | 'NO_DRIVER'

export type RideType =
  | 'VET'
  | 'GROOMING'
  | 'DAYCARE'
  | 'HOTEL'
  | 'TRAINING'
  | 'GENERAL'

export interface Coordinates {
  latitude: number
  longitude: number
  address: string
}

export interface RideEstimate {
  distanceKm: number
  durationMinutes: number
  estimatedPriceBrl: number
  fareId: string
}

export interface Ride {
  id: string
  customerId: string
  customer?: PublicUser
  driverId?: string | null
  driver?: PublicUser | null
  petId: string
  pet?: Pet
  type: RideType
  status: RideStatus
  notes?: string | null

  pickupAddress: string
  pickupLatitude: number
  pickupLongitude: number
  pickupAt?: Date | null

  destinationAddress: string
  destinationLatitude: number
  destinationLongitude: number
  destinationName?: string | null

  distanceKm?: number | null
  durationMinutes?: number | null
  routePolyline?: string | null

  acceptedAt?: Date | null
  driverOnWayAt?: Date | null
  arrivedAt?: Date | null
  startedAt?: Date | null
  completedAt?: Date | null
  cancelledAt?: Date | null
  cancelReason?: string | null

  estimatedPriceBrl?: number | null
  finalPriceBrl?: number | null

  createdAt: Date
  updatedAt: Date
}

export interface CreateRideDto {
  petId: string
  type: RideType
  notes?: string
  pickup: Coordinates
  destination: Coordinates & { name?: string }
  fareId?: string
}

export interface CancelRideDto {
  reason: string
}

// WebSocket events
export interface RideLocationUpdate {
  rideId: string
  driverId: string
  latitude: number
  longitude: number
  heading?: number
  updatedAt: string  // ISO
}
