import assert from 'assert'
import nock from 'nock'
import config from '../../src/config'

import * as unsplash from '../../src/images/unspash'
import { UnsplashResponse } from '../../src/images/model'

describe('Unsplash', () => {
    afterAll(nock.restore)
    afterAll(nock.cleanAll)

    describe('getRandomImage', () => {
        it('Should return a url when the API returns 200', async () => {
            const mockURL = 'https://mock-url-we-want'
            const mockResp: UnsplashResponse = {
                id: '3242352',
                urls: {
                    regular: mockURL
                }
            }

            nock(config.image.baseURL)
                .persist()
                .get(config.image.randomPath)
                .query(true)
                .reply(200, mockResp)
            
            const imageURL = await unsplash.getRandomImage()
            assert.strictEqual(imageURL, mockURL)
        })

        it('Should throw an error when the API does not return 200', async() => {
            nock(config.image.baseURL)
            .persist()
            .get(config.image.randomPath)
            .query(true)
            .reply(400)

            await assert.rejects(unsplash.getRandomImage(), (err) => {
                assert.match(err.message, /Request failed/)
                return true
            })
        })
    })
})
