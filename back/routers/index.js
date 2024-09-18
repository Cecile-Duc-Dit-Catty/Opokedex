import { Router } from 'express';
import { pokemonController } from '../controllers/pokemonController.js';

export const router = Router();


router.get('/'),
router.get('/pokemons', pokemonController.getAll )