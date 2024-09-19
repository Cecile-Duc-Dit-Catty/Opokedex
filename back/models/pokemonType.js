// models/pokemonType.js
import { Model, DataTypes } from 'sequelize';
import { client } from './client.js';

export class PokemonType extends Model {}

PokemonType.init({
  pokemon_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'pokemon',
      key: 'id',
    },
    allowNull: false,
  },
  type_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'type',
      key: 'id',
    },
    allowNull: false,
  },
}, {
  sequelize: client,
  tableName: 'pokemon_type',
  timestamps: false,
});
