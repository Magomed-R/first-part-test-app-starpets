import { Sequelize } from 'sequelize-typescript'
import { logger } from '../libs/logger'
import { User } from '../Models/User'

const { POSTGRES_URL } = process.env

if (!POSTGRES_URL) throw new Error('environment variable POSTGRES_URL not defined in .env')

const sequelize = new Sequelize(POSTGRES_URL, {
  dialect: 'postgres',
  models: [ User ],
  logging: (msg) => logger.info(msg)
})

sequelize.addModels([User])

export default sequelize
