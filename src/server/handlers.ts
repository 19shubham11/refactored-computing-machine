import { FastifyRequest, FastifyReply } from 'fastify'
import * as image from '../images/unsplash'
import { QueryParams } from './models'

function checkHealth(_: FastifyRequest, reply: FastifyReply) {
    reply.send('OK')
}

async function getRandomImage(_: FastifyRequest, reply: FastifyReply) {
    try {
        const url = await image.getRandomImage()
        reply.redirect(url)
    } catch (err) {
        reply.log.error('Failed to get image!')
        reply.code(500).send('Internal Server Error')
    }
}

async function searchImage(req: FastifyRequest, reply: FastifyReply) {
    const query = req.query as QueryParams
    if (!query.q) {
        return reply.code(400).send('Add search param!')
    }
    try {
        const { q } = query
        const url = await image.getRandomImage(q)
        reply.redirect(url)
    } catch (err) {
        reply.log.error('Failed to get image!')
        reply.code(500).send('Internal Server Error')
    }
}

export { checkHealth, getRandomImage, searchImage }
