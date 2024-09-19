import { Type } from '../models/types.js'
import { Pokemon } from '../models/pokemon.js'
import { PokemonType } from '../models/pokemonType.js'

export const typesController = {
  getAll: async (req, res) => {
    try {
      const types = await Type.findAll();
      res.json(types);
    } catch (error) {
      console.error('Error getting pokemons', error);
      res.status(500).json({ error: 'Erreur serveur interne' });
    }
  },
  getPokemonsByType: async (req, res) => {
    const typeId = req.params.id; // Récupérer l'ID du type

    try {
      const pokemons = await Pokemon.findAll({
        include: [{
          model: Type,
          through: { attributes: [] }, // Exclut les attributs de la table de jointure
          where: { id: typeId }
        }]
      });

      res.json(pokemons);
    } catch (error) {
      console.error('Erreur lors de la récupération des pokémons:', error);
      res.status(500).json({ error: 'Erreur serveur interne' });
    }
  },

}