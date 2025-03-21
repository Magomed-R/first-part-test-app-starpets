import { Request, Response, Router } from 'express'
import userService from '../Services/user.service'
import { createHandler } from '../utils/createHandler'
import { updateBalanceRules } from '../validators/user.validator'

const namespace = Router()

namespace.patch(
  '/balance',
  updateBalanceRules,
  createHandler(async (req: Request, res: Response) => {
    const { userId, amount } = req.body

    const updatedUser = await userService.updateBalance({ userId, amount })

    res.json({ updatedUser })
  })
)

export default namespace
