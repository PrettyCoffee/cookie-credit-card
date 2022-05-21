import { encrypt } from "./encrypt"
import { validate } from "./validate"
export { specialChars } from "./validate"

const Password = {
  encrypt,
  validate,
}

export default Password
