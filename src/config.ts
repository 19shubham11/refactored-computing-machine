interface UnsplashConfig {
    baseURL: string
    randomPath: string
    clientId: string
}

interface ServerConfig {
    port: number
}

interface AppConfig {
    server: ServerConfig
    image: UnsplashConfig
}

const unsplashConfig: UnsplashConfig = {
    baseURL: 'https://api.unsplash.com',
    randomPath: '/photos/random',
    clientId: process.env.UNSPLASH_KEY || '',
}

const serverConfig: ServerConfig = {
    port: 2021,
}

const config: AppConfig = {
    server: serverConfig,
    image: unsplashConfig,
}

export default config
