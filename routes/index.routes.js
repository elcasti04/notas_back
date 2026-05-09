import { Router } from 'express'
import userRoutes from './api/user.api.routes.js'
import notasRoutes from './api/notas.api.routes.js'

const routes = Router()

routes.get('/', (req, res) => {
    res.send('bienvenido')
})

routes.use('/user', userRoutes)
routes.use('/notas', notasRoutes)

export default routes