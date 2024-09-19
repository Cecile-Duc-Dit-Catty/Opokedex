import { Model, DataTypes } from 'sequelize';
import { client } from './client.js';
import Pokemon from './pokemon.js'; 
import Team from './team.js'; 
export class pokemonTeam extends Model {}

pokemonTeam.init({

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },

  pokemon_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pokemon', // Nom de la table pokemon
      key: 'id',
    },
  },
  team_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'team', // Nom de la table Team
      key: 'id',
    },
  },
}, {
  sequelize: client,
  tableName: 'team_pokemon',
  timestamps: false // Désactive les colonnes createdAt et updatedAt puisqu'il n'y en a pas dans la table pokemon
})


export default pokemonTeam;