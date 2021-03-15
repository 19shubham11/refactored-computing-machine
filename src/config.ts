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
    client_id: process.env.UNSPLASH_KEY || '',
}

const serverConfig: ServerConfig = {
    port: 2021,
}

interface AppConfig {
    server: ServerConfig
    image: UnsplashConfig
}

const config: AppConfig = {
    server: serverConfig,
    image: unsplashConfig,
}

export default config
