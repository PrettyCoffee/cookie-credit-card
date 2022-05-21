const escapeRegExp = (string: string) =>
  string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

const alphabet = "a-zA-Z"
const numbers = "0-9"
export const specialChars = escapeRegExp("!#$€%&()*+,-./\\:;<=>?@[]^_{|}~]")

const allowedChars = alphabet + numbers + specialChars

const hasInvalidChars = (password: string) => {
  const charRegex = new RegExp(`[^${allowedChars}]`)
  return charRegex.test(password)
}

export const validate = (password: string) =>
  password.length >= 6 && !hasInvalidChars(password)
