export class BaseError {
  httpStatus: number
  code: string
  message: string
  constructor({ httpStatus, code, message }: { httpStatus: number; code: string; message: string }) {
    this.httpStatus = httpStatus
    this.code = code
    this.message = message
  }
}

export class NotFoundError extends BaseError {
  constructor({ code, message }: { code: string; message: string }) {
    super({ httpStatus: 404, code, message })
  }
}

export class ForbiddenError extends BaseError {
  constructor({ code, message }: { code: string; message: string }) {
    super({ httpStatus: 403, code, message })
  }
}
