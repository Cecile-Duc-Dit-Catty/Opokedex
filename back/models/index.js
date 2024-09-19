import { Pokemon } from './pokemon.js';
import { Type } from './types.js';
import { PokemonType } from './pokemonType.js';

// Définir les associations
Pokemon.belongsToMany(Type, { through: PokemonType, foreignKey: 'pokemon_id' });
Type.belongsToMany(Pokemon, { through: PokemonType, foreignKey: 'type_id' });

export { Pokemon, Type, PokemonType };
