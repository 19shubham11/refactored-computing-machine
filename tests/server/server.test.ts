import supertest from 'supertest'
import express from 'express'
import { router } from '../../src/server/routes'
import assert from 'assert'

const app = express()
app.use('/', router)

const request = supertest(app)

describe('API Integration Tests', () => {
    describe('/internal/health', () => {
        it('Should return 200', async () => {
            const res = await request.get('/internal/health')
            const { status, text } = res

            assert.strictEqual(status, 200)
            assert.strictEqual(text, 'OK')
        })
    })

    describe('/random', () => {
        it('Should redirect', async () => {
            const res = await request.get('/random')
            const { status } = res

            assert.strictEqual(status, 302)
        })
    })

    describe('/random/search', () => {
        it('Should redirect', async () => {
            const res = await request.get('/random/search?q=hello')
            const { status } = res

            assert.strictEqual(status, 302)
        })

        it('Should return 400 if query param was not present', async () => {
            const res = await request.get('/random/search')
            const { status, text } = res

            assert.strictEqual(status, 400)
            assert.match(text, /Add search param/)
        })
    })
})
