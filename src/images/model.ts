interface UnsplashURLs {
    raw?: string
    full?: string
    small?: string
    regular: string
}

interface UnsplashResponse {
    id: string
    urls: UnsplashURLs
}

export { UnsplashResponse }
