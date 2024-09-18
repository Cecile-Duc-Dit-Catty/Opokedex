import { Pokemon } from '../models/pokemon.js'

export const pokemonController = {
  getAll: async (req, res) => {
    try {
      const pokemons = await Pokemon.findAll();
      res.json(pokemons);
    } catch (error) {
      console.error('Error getting pokemons', error);
      res.status(500).json({ error: 'Erreur serveur interne' });
    }
  },
};