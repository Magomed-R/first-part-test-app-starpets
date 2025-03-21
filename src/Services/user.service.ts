import { Op } from '@sequelize/core'
import { User } from '../Models/User'
import { updateBalanceDto } from './dto/user.dto'
import { NotFoundError, ForbiddenError } from './errors'

class UserService {
  async updateBalance({ userId, amount }: updateBalanceDto): Promise<User> {
    const raw = await User.increment('balance', {
      by: amount,
      where: {
        id: userId,
        ...(amount < 0 && {
          balance: { [Op.gte]: Math.abs(amount) }
        })
      }
    })

    const [affectedRows, affectedCount]: [affectedRows: User[], affectedCount: number] = raw[0] as any

    if (affectedCount === 0 && amount < 0) {
      const user = await User.findOne({ where: { id: userId } })

      if (!user)
        throw new NotFoundError({
          code: 'USER_NOT_FOUND',
          message: `user ${userId} not found`
        })

      if (user.dataValues.balance < Math.abs(amount))
        throw new ForbiddenError({
          code: 'INSUFFICIENT_FUNDS',
          message: "there are not enough funds on the user's balance to complete the transaction"
        })
    }

    return affectedRows[0]
  }
}

export default new UserService()
