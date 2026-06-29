// App constants shared across all packages

export const APP_NAME = 'PetRide'
export const APP_VERSION = '0.1.0'

// Ride
export const RIDE_SEARCH_RADIUS_KM = 10
export const RIDE_DRIVER_TIMEOUT_SECONDS = 30  // tempo para motorista aceitar ou rejeitar
export const RIDE_MAX_RETRIES = 3               // tentativas de oferecer a corrida
export const RIDE_CANCEL_FEE_MINUTES = 5        // taxa de cancelamento após N min de espera

// Pets
export const PET_SIZE_WEIGHT_RANGES: Record<string, [number, number]> = {
  TINY:   [0,  3],
  SMALL:  [3,  7],
  MEDIUM: [7,  15],
  LARGE:  [15, 30],
  GIANT:  [30, 999],
}

// Payments
export const PLATFORM_FEE_PERCENT = 0.20        // 20% de comissão
export const DRIVER_SHARE_PERCENT  = 0.80        // 80% para o motorista
export const PIX_EXPIRY_MINUTES    = 30

// Pagination
export const DEFAULT_PAGE_SIZE = 20
export const MAX_PAGE_SIZE     = 100

// Auth
export const ACCESS_TOKEN_TTL  = '15m'
export const REFRESH_TOKEN_TTL = '7d'

// Rating
export const MIN_RATING = 1
export const MAX_RATING = 5
export const DRIVER_MIN_RATING_THRESHOLD = 3.5  // abaixo disso, conta fica em revisão
