export type UpdateProfilePayload = {
  firstName: string
  lastName: string
}

export type ProfileResponse = {
  status: number
  message: string
  body: {
    email: string
    firstName: string
    lastName: string
    createdAt: string
    updatedAt: string
    id: string
  }
}
