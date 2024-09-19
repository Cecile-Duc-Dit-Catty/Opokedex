import { Model, DataTypes } from 'sequelize';
import { client } from './client.js';

export class Team extends Model {}

Team.init({

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },

  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

}, {
  sequelize: client,
  tableName: 'team',
  timestamps: false // Désactive les colonnes createdAt et updatedAt puisqu'il n'y en a pas dans la table pokemon
})


export default Team;