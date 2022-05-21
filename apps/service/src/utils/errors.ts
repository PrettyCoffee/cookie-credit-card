import { NextFunction, Request, Response } from "express"

export type ErrorId =
  | "BAD_REQUEST"
  | "NAME_ALREADY_EXISTS"
  | "USER_NOT_FOUND"
  | "UNAUTHORIZED"
  | "PASSWORD_NOT_VALID"
  | "UNEXPECTED"

interface Error<Id extends ErrorId> {
  id: Id
  code: number
  message: string
}

type Errors = {
  [id in ErrorId]: Error<id>
}

export const errors: Errors = {
  BAD_REQUEST: {
    id: "BAD_REQUEST",
    code: 400,
    message: "The request could not be processed due to an error in the data.",
  },
  NAME_ALREADY_EXISTS: {
    id: "NAME_ALREADY_EXISTS",
    code: 400,
    message: "The name is already taken.",
  },
  PASSWORD_NOT_VALID: {
    id: "PASSWORD_NOT_VALID",
    code: 400,
    message: "The password does not fit the requirements.",
  },
  USER_NOT_FOUND: {
    id: "USER_NOT_FOUND",
    code: 404,
    message: "The user could not be found.",
  },
  UNAUTHORIZED: {
    id: "UNAUTHORIZED",
    code: 401,
    message: "Missing or insufficient authorization.",
  },
  UNEXPECTED: {
    id: "UNEXPECTED",
    code: 500,
    message: "An unexpected error occurred.",
  },
}

export const errorHandler = (
  error: Error<ErrorId>,
  _req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars
  _next: NextFunction
) => {
  console.error(error)
  if (errors[error.id]) res.status(error.code).send(error)
  else res.status(500).send(errors.UNEXPECTED)
}
