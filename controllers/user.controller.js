import { User } from '../models/user.model.js';
import catchError from '../middlewares/catchError.js';

export const getAllUsers = catchError(async (req, res) => {
	const users = await User.findAll();
	res.json(users);
});
export const createUser = catchError(async (req, res) => {
	const { username, age, birthday, country, password } = req.body;
	const user = await User.create({
		username,
		age,
		birthday,
		country,
		password,
	});
	res.json({ message: 'usuario creado', user });
});

export const getUser = catchError(async (req, res) => {
	const { id } = req.params;
	const user = await User.findByPk(id);
	res.json(user);
});

export const deleteUser = catchError(async (req, res) => {
	const { id } = req.params;
	await User.destroy({ where: { id } });
	res.send('usuario eliminado');
});

export const findUserByUsername = catchError(async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ where: { username } });
	if (!user) {
		return res.status(404).json({ message: 'Usuario no encontrado' });
	}
	if (user.password !== password) {
		return res.status(401).json({ message: 'Contraseña incorrecta' });
	}
	res.json({ message: 'login exitoso', user });
});
