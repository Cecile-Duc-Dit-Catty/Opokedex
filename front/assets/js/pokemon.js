// Fonction pour récupérer les données de l'API
async function fetchData() {
  try {
      const response = await fetch('http://localhost:4000/api/pokemons'); // URL de de mon API
      if (!response.ok) {
          throw new Error('Erreur de réseau');
      }
      const data = await response.json();
      updateContent(data);
  } catch (error) {
      console.error('Erreur:', error);
  }
}