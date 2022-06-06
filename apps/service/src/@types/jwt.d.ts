import { TokenPayload } from "@ccc/api-definition"

declare module "jsonwebtoken" {
  export interface JwtPayload extends TokenPayload {}
}
