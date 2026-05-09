import { Router } from 'express'
import { createNotes, deleteNote, getAllNotes, getNotesUser } from '../../controllers/notas.controller.js'



const routes = Router()

routes.get('/', getAllNotes)
routes.post('/', createNotes)
routes.get('/user/:userId', getNotesUser)
routes.delete('/:id', deleteNote)

export default routes