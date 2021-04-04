import fastify from 'fastify'
import { router } from './routes'
import config from '../config'

const server = fastify({
    logger: true,
})
server.register(router)

server.listen(config.server.port, () => {
    console.info(`Server started on port ${config.server.port}`)
})
