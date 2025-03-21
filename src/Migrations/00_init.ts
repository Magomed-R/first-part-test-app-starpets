import { User } from "../Models/User"
import { Sequelize } from "sequelize-typescript"

export const up = async ({ context }: { context: ReturnType<Sequelize['getQueryInterface']> }) => {
  await context.createTable('users', User.getAttributes())
}

export const down = async ({ context }: { context: ReturnType<Sequelize['getQueryInterface']> }) => {
  await context.dropTable('users')
}
