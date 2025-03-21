import express from 'express'
import sequelize from './clients/sequelize'
import { logger } from './libs/logger'
import { apiRouter } from './Controllers'
import { errorMiddleware } from './Middlewares/error.middleware'

const { PORT } = process.env

if (!PORT) logger.error('environment variable PORT not defined in .env')

const app = express()

app.use(express.json())
app.use('/api', apiRouter)
app.use(errorMiddleware)

sequelize.authenticate().then(() => logger.info('Connected to DB successfuly'))
app.listen(PORT, () => logger.info(`server started on 0.0.0.0:${PORT}`))