import { User } from '../Models/User'

export const up = async () => {
  const user = await User.findOne()
  if (!user) await User.create({ balance: 10_000 })
}

export const down = async () => {
  await User.destroy({ where: { id: 1 } })
}
