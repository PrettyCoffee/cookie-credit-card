import { route as getCookies } from "./cookies.get"
import { route as postCookies } from "./cookies.post"
import { route as login } from "./login.post"
import { route as register } from "./register.post"

export default [getCookies, postCookies, login, register]
