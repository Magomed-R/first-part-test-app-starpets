import { NextFunction, Request, Response } from "express";
import { BaseError } from "../Services/errors";

export type ErrorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => void;

export const errorMiddleware: ErrorMiddleware = (error, req, res, next) => {
  if (error instanceof BaseError) {
    return res.status(error.httpStatus).json({
      code: error.code,
      error: error.message,
    });
  }

  return res.status(400).json({
    error,
  });
};
