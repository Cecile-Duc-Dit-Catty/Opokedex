import { Model, DataTypes } from 'sequelize';
import { client } from './client.js';
import Pokemon from './pokemon.js';
import { PokemonType } from './pokemonType.js';

export class Type extends Model {}

Type.init({

  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  color: {
    type: DataTypes.STRING(7),
    allowNull: false,
    defaultValue: '#000000'
  },

}, {
  sequelize: client,
  tableName: 'type',
  timestamps: false // Désactive les colonnes createdAt et updatedAt puisqu'il n'y en a pas dans la table pokemon
})


export default Type;