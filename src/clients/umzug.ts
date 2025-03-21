import { Umzug, SequelizeStorage } from 'umzug'
import sequelize from './sequelize'
import { logger } from '../libs/logger'

const devMode = process.env.ENVIRONMENT === 'dev'

export const migrator = new Umzug({
  migrations: {
    glob: devMode ? '**/Migrations/*.ts' : '**/Migrations/*.js'
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({
    sequelize
  }),
  logger
})

migrator.runAsCLI()