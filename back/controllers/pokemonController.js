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

  getOne: async (req, res) => {
    const id = req.params.id; // Récupérer l'ID depuis l'URL
    
    try {
        const pokemon = await Pokemon.findByPk(id);
        if (!pokemon) {
            return res.status(404).json({ error: 'Pokémon non trouvé' });
        }
        console.log('Pokémon trouvé:', pokemon);
        res.json(pokemon);
    } catch (error) {
        console.error('Error getting pokemon', error);
        res.status(500).json({ error: 'Erreur serveur interne' });
    }
},
}