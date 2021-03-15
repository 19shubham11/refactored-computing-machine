import express from 'express'
import * as handler from './handlers'
const router = express.Router()

router.get('/internal/health', handler.checkHealth)

export { router }