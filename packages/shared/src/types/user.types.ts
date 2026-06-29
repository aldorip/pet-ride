export type UserRole = 'CUSTOMER' | 'DRIVER' | 'ADMIN'

export type UserStatus =
  | 'ACTIVE'
  | 'INACTIVE'
  | 'SUSPENDED'
  | 'PENDING_VERIFICATION'

export interface User {
  id: string
  name: string
  email: string
  phone: string
  avatarUrl?: string | null
  role: UserRole
  status: UserStatus
  emailVerifiedAt?: Date | null
  phoneVerifiedAt?: Date | null
  createdAt: Date
  updatedAt: Date
}

export interface PublicUser {
  id: string
  name: string
  avatarUrl?: string | null
  rating?: number
}

export interface CreateUserDto {
  name: string
  email: string
  phone: string
  password: string
  role?: UserRole
}

export interface UpdateUserDto {
  name?: string
  avatarUrl?: string
  phone?: string
}

export interface LoginDto {
  email: string
  password: string
}

export interface AuthTokens {
  accessToken: string
  refreshToken: string
  expiresIn: number
}

export interface AuthResponse {
  user: User
  tokens: AuthTokens
}
