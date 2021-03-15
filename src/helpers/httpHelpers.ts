import got, { OptionsOfJSONResponseBody } from 'got'

function GET(url: string, queryParams: URLSearchParams = new URLSearchParams()) {
    const options: OptionsOfJSONResponseBody = {
        responseType: 'json',
    }
    const reqURL = url + queryParams
    return got.get(reqURL, options)
}

export { GET }
