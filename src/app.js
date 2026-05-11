import express from 'express'
import cors from 'cors'
import routes from '../routes/index.routes.js'
import errorHandler from '../middlewares/errorHandler.js'

const app = express()
app.use(cors({
  origin: process.env.FRONTEND_URL,
}));
app.use(express.json())
app.use('/', routes)

app.use(errorHandler)


export default app