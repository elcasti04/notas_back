import { Notas } from '../models/notas.model.js'
import catchError from '../middlewares/catchError.js'

export const getAllNotes = catchError(async (req, res) => {
    const notas = await Notas.findAll()
    res.json(notas)
})

export const createNotes = catchError(async (req, res) => {
    const { texto, titulo, fecha, userId } = req.body
    await Notas.create({ texto, titulo, fecha, userId })
    res.send('nota creada')
})

export const getNotesUser = catchError(async (req, res) => {
    const { userId } = req.params
    const notas = await Notas.findAll({ where: { userId } })
    res.json(notas)
})

export const deleteNote = catchError(async (req, res) => {
    const { id } = req.params 
    await Notas.destroy({ where: { id } })
    res.send('nota eliminada')
})