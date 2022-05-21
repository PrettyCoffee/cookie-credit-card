import { errors } from "./errors"

export type RequestBodyValidation<T extends object> = Record<
  keyof T,
  {
    type: "string" | "number"
    required?: boolean
  }
>

export const validateRequestBody = <T extends object>(
  body: T,
  paramList: RequestBodyValidation<T>
): T => {
  const validateKeys = Object.keys(paramList) as (keyof T)[]
  const requiredKeys = validateKeys.filter(key => paramList[key].required)
  requiredKeys.forEach(key => {
    if (!body[key]) throw errors.BAD_REQUEST
  })

  const bodyKeys = Object.keys(body) as (keyof T)[]
  bodyKeys.forEach(key => {
    const validate = paramList[key]
    if (!validate || typeof body[key] !== validate.type)
      throw errors.BAD_REQUEST
  })

  return body
}
