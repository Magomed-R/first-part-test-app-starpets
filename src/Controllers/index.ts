import { Router } from 'express'
import userRouter from './users'

export const apiRouter = Router()

apiRouter.use('/v1/users', userRouter)
