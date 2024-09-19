import { Router } from 'express';
import { pokemonController } from '../controllers/pokemonController.js';

export const router = Router();

// Route pour récupérer un pokémon spécifique par ID
router.get('/pokemons/:id', pokemonController.getOne);

// Route pour lister tous les pokémons
router.get('/pokemons', pokemonController.getAll);


