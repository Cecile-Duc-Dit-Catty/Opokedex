import { Pokemon } from './pokemon.js';
import { Type } from './types.js';
import Team from './team.js';
import TeamPokemon from './pokemonTeam.js';
import { PokemonType } from './pokemonType.js';

// Associations pour Pokémon et Types
Pokemon.belongsToMany(Type, { through: PokemonType, foreignKey: 'pokemon_id' });
Type.belongsToMany(Pokemon, { through: PokemonType, foreignKey: 'type_id' });

// Associations pour Pokémon et Teams
Pokemon.belongsToMany(Team, { through: TeamPokemon, foreignKey: 'pokemon_id' });
Team.belongsToMany(Pokemon, { through: TeamPokemon, foreignKey: 'team_id' });


export { Pokemon, Type, Team, TeamPokemon, PokemonType };
