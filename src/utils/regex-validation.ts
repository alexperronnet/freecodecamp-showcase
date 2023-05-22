export const regexValidation = {
  name: /^[A-Za-z]([\s'A-Za-z-]*[A-Za-z])?$/,
  email: /^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/,
  securePassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])(?=.{8,})/
}
