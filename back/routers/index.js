import { Router } from 'express';
import { pokemonController } from '../controllers/pokemonController.js';
import { typesController } from '../controllers/typesController.js';
// Importer les fonctions spécifiques du teamController
import { getAllTeams, getTeamWithPokemons } from "../controllers/teamController.js";

export const router = Router();

// Routes pour Pokémon
router.get('/pokemons/:id', pokemonController.getOne);
router.get('/pokemons', pokemonController.getAll);

// Routes pour les types
router.get('/type/:id/pokemons', typesController.getPokemonsByType);
router.get('/types', typesController.getAll);

// Routes pour les équipes
router.get('/teams', getAllTeams); // Récupérer toutes les équipes
router.get('/teams/:id/pokemons', getTeamWithPokemons); // Récupérer une équipe et ses Pokémon
