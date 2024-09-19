import { Router } from 'express';
import { pokemonController } from '../controllers/pokemonController.js';
import { typesController } from '../controllers/typesController.js';

export const router = Router();

router.get('/pokemons/:id', pokemonController.getOne )
router.get('/pokemons', pokemonController.getAll )

router.get('/type/:id/pokemons', typesController.getPokemonsByType);
router.get('/types', typesController.getAll)


