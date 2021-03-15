import express from 'express'
import { router } from './routes'
import config from '../config'

const app = express()
app.use('/', router)

app.listen(config.server.port, () => {
    console.info(`Server started on port ${config.server.port}`)
})
