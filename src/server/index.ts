import express from 'express'
import { router } from './routes'
const app = express()
app.use('/', router)


app.listen(2020, () => {
    console.log('Working! on 2020')
})
