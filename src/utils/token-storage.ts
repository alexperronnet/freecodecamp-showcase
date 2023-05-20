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
    for (const storage of Object.values(storages)) {
      const token = storage.getItem(TOKEN_JWT)

      if (token) {
        try {
          const [, payload] = token.split('.')
          const { exp } = JSON.parse(atob(payload))
          const isExpired = exp < Date.now() / 1000

          if (isExpired) {
            storage.removeItem(TOKEN_JWT)
          }

          return isExpired ? undefined : token
        } catch {
          storage.removeItem(TOKEN_JWT)
        }
      }
    }
  },

  set: (token, storageType: StorageType = 'session') => {
    if (!storages[storageType]) {
      throw new Error(`Invalid storage type: ${storageType}`)
    }

    for (const storage of Object.values(storages)) {
      storage.removeItem(TOKEN_JWT)
    }

    storages[storageType].setItem(TOKEN_JWT, token)
  },

  remove: () => {
    for (const storage of Object.values(storages)) {
      storage.removeItem(TOKEN_JWT)
    }
  }
}
