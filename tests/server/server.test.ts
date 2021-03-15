import supertest from 'supertest'
import express from 'express'
import { router } from '../../src/server/routes'
import assert from 'assert'

const app = express()
app.use('/', router)

const request = supertest(app)

describe('Server test', () => {
    describe('/internal/health', () => {
        it('Should return 200', async () =>{
            const res = await request.get('/internal/health')
            const { status, text } = res

            assert.strictEqual(status, 200)
            assert.strictEqual(text, 'OK')
        })
    })
})