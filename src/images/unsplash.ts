import { GET } from '../helpers/httpHelpers'
import config from '../config'
import { UnsplashResponse } from './model'

async function getRandomImage(query: string = ''): Promise<string> {
    const queryParams = new URLSearchParams({
        client_id: config.image.clientId,
        query,
    })

    try {
        const url = `${config.image.baseURL}${config.image.randomPath}`
        const resp = await GET(url, queryParams)

        const unsplashResp = resp.body as UnsplashResponse
        return unsplashResp.urls.regular
    } catch (err) {
        throw new Error('Request failed!')
    }
}

export { getRandomImage }
