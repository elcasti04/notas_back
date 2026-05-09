import { DataTypes } from 'sequelize'
import db from '../db/conect.js'
import { User } from './user.model.js';

export const Notas = db.define('notas', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  texto: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  userId: {
  type: DataTypes.INTEGER,
  allowNull: false
}
})

User.hasMany(Notas, { foreignKey: 'userId', as: 'notas' });
Notas.belongsTo(User, { foreignKey: 'userId', as: 'usuario' });