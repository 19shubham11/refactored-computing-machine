interface UnsplashConfig {
    baseURL: string
    randomPath: string
    client_id: string
}

interface ServerConfig {
    port: number
}

const unsplashConfig: UnsplashConfig = {
    baseURL: 'https://api.unsplash.com',
    randomPath: '/photos/random',
    client_id: 'welQXbMUild3TvEuB_RUi5V1DPb1gQ9c_9mS17bEJI8'
}

const serverConfig: ServerConfig = {
    port: 2021
}

interface AppConfig {
    server: ServerConfig
    image: UnsplashConfig
}

const config: AppConfig = {
    server: serverConfig,
    image: unsplashConfig
}

export default config
