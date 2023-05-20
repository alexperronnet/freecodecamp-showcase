export type LoginUserPayload = {
  email: string
  password: string
  persist?: boolean
}

export type RegisterUserPayload = LoginUserPayload & {
  firstName: string
  lastName: string
}

export type AuthResponse = {
  status: number
  message: string
  body: {
    token: string
  }
}
