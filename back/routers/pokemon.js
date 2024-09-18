import { Router } from 'express';
import { pokemonController } from '../controllers/pokemonController';

export const router = Router();

router.get('/pokemons', pokemonController.getAll)