export interface CustomPayload {
  userId?: string
}

declare module "jsonwebtoken" {
  export interface JwtPayload extends CustomPayload {}
}
