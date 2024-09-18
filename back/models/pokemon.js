import { Model, DataTypes } from 'sequelize';
import { client } from './client.js';

export class Pokemon extends Model {}

Pokemon.init({

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },

  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  hp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  atk: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  def: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  atk_spe: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  def_spe: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  speed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

}, {
  sequelize: client,
  tableName: 'pokemon',
  timestamps: false // Désactive les colonnes createdAt et updatedAt puisqu'il n'y en a pas dans la table pokemon
})

export default Pokemon;