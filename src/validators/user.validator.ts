import { body } from 'express-validator'
import { validateMiddleware } from '../Middlewares/validate.middleware'

export const updateBalanceRules = [body('userId').isNumeric(), body('amount', 'field must be number').isNumeric(), validateMiddleware]
