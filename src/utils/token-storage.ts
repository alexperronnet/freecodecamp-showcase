const TOKEN_JWT = 'ab_auth_token'

const storages = {
  local: localStorage,
  session: sessionStorage
}

type StorageType = keyof typeof storages

type TokenStorage = {
  get: () => string | undefined
  set: (token: string, storageType?: StorageType) => void
  remove: () => void
}

export const tokenStorage: TokenStorage = {
  get: () => {
    // Looping through each type of storage
    for (const storage of Object.values(storages)) {
      const token = storage.getItem(TOKEN_JWT)

      if (token) {
        try {
          // Trying to parse the token and check if it's expired
          const [, payload] = token.split('.')
          const { exp } = JSON.parse(atob(payload))
          const isExpired = exp < Date.now() / 1000

          if (isExpired) {
            storage.removeItem(TOKEN_JWT)
          }

          return isExpired ? undefined : token
        } catch {
          // If there's an error parsing the token, remove it from storage
          storage.removeItem(TOKEN_JWT)
        }
      }
    }
  },

  set: (token, storageType: StorageType = 'session') => {
    // Validate the provided storageType
    if (!storages[storageType]) {
      throw new Error(`Invalid storage type: ${storageType}`)
    }

    // Remove the token from all storages before setting it
    for (const storage of Object.values(storages)) {
      storage.removeItem(TOKEN_JWT)
    }

    // Set the token in the specified storage
    storages[storageType].setItem(TOKEN_JWT, token)
  },

  // Remove the token from all storages
  remove: () => {
    for (const storage of Object.values(storages)) {
      storage.removeItem(TOKEN_JWT)
    }
  }
}
