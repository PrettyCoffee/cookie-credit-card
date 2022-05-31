import { route as getCookies } from "./cookies.get"
import { route as postCookies } from "./cookies.post"
import { route as signIn } from "./sign-in.post"
import { route as signUp } from "./sign-up.post"

export default [getCookies, postCookies, signIn, signUp]
