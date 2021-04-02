import { FastifyInstance } from 'fastify'
import * as handler from './handlers'

async function router(app: FastifyInstance, _: object) {
    app.get('/internal/health', handler.checkHealth)
    app.get('/random', handler.getRandomImage)
    app.get('/random/search', handler.searchImage)
}

export { router }
