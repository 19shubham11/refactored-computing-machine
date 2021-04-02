import fastify from 'fastify'
import assert from 'assert'
import { router } from '../../src/server/routes'

const server = fastify()
server.register(router)

describe('API Integration Tests', () => {
    afterAll(async () => {
        await server.close()
    })

    describe('/internal/health', () => {
        it('Should return 200', async () => {
            const res = await server.inject().get('/internal/health')
            const { statusCode, body } = res

            assert.strictEqual(statusCode, 200)
            assert.strictEqual(body, 'OK')
        })
    })

    describe('/random', () => {
        it('Should redirect', async () => {
            const res = await server.inject().get('/random')
            const { statusCode } = res

            assert.strictEqual(statusCode, 302)
        })
    })

    describe('/random/search', () => {
        it('Should redirect', async () => {
            const res = await server.inject().get('/random/search?q=dog')
            const { statusCode } = res

            assert.strictEqual(statusCode, 302)
        })

        it('Should return 400 if query param was not present', async () => {
            const res = await server.inject().get('/random/search')
            const { statusCode, body } = res

            assert.strictEqual(statusCode, 400)
            assert.match(body, /Add search param/)
        })
    })
})
