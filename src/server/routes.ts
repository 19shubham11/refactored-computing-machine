import express from 'express'
import * as handler from './handlers'

const router = express.Router()

router.get('/internal/health', handler.checkHealth)
router.get('/random', handler.getRandomImage)
router.get('/random/search', handler.searchImage)

export { router }
