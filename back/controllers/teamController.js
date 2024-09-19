import { Team, Pokemon } from '../models/index.js';

// Méthode pour récupérer toutes les équipes avec les Pokémon associés
export const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.findAll({
      include: {
        model: Pokemon, // Inclure les Pokémon associés
        through: { attributes: [] } // Ne pas inclure les attributs de la table de jointure
      }
    });

    res.json(teams); // Envoyer toutes les équipes avec leurs Pokémon associés
  } catch (error) {
    console.error('Erreur lors de la récupération des équipes:', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
};

// Méthode pour récupérer une équipe et ses Pokémon associés
export const getTeamWithPokemons = async (req, res) => {
  const { id } = req.params;

  try {
    const team = await Team.findByPk(id, {
      include: {
        model: Pokemon,
        through: { attributes: [] } 
      }
    });

    if (!team) {
      return res.status(404).json({ error: 'Équipe non trouvée' });
    }

    res.json(team); // Envoyer l'équipe avec les Pokémon associés
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'équipe:', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
};
