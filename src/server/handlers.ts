import { Request, Response } from 'express'
import * as image from '../images/unsplash'

function checkHealth(_: Request, res: Response) {
    res.send('OK')
}

async function getRandomImage(_: Request, res: Response) {
    try {
        const url = await image.getRandomImage()
        res.redirect(url)
    } catch (err) {
        res.status(500).send('Internal Server Error')
    }
}

async function searchImage(req: Request, res: Response) {
    const query = req.query.q as string
    if (!query) {
        return res.status(400).send('Add search param!')
    }
    try {
        const url = await image.getRandomImage(query)
        res.redirect(url)
    } catch (err) {
        res.status(500).send('Internal Server Error')
    }
}

export { checkHealth, getRandomImage, searchImage }
