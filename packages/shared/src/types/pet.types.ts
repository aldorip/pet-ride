export type PetSize = 'TINY' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'GIANT'

export type PetSpecies =
  | 'DOG'
  | 'CAT'
  | 'BIRD'
  | 'RABBIT'
  | 'RODENT'
  | 'REPTILE'
  | 'OTHER'

export interface Pet {
  id: string
  ownerId: string
  name: string
  species: PetSpecies
  breed?: string | null
  size: PetSize
  weightKg?: number | null
  birthDate?: Date | null
  colorDescription?: string | null
  photoUrl?: string | null
  microchipNumber?: string | null
  isVaccinated: boolean
  vaccinationCard?: string | null
  healthNotes?: string | null
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface CreatePetDto {
  name: string
  species: PetSpecies
  breed?: string
  size: PetSize
  weightKg?: number
  birthDate?: string   // ISO date string
  colorDescription?: string
  photoUrl?: string
  microchipNumber?: string
  isVaccinated?: boolean
  vaccinationCard?: string
  healthNotes?: string
}

export interface UpdatePetDto extends Partial<CreatePetDto> {}
