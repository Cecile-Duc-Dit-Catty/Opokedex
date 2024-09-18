import 'dotenv/config'; 
import { Sequelize } from 'sequelize';

// Récupération des variables d'environnement
const {
  PGUSER: user,
  PGDATABASE: database,
  PGPASSWORD: password,
  PGHOST: host,
  PGPORT: port,

} = process.env;

// Configuration du client Sequelize
// protocol://user:password@host:port/resource
export const client = new Sequelize(`postgres://${user}:${password}@${host}:${port}/${database}`, {
  define: {
    createdAt: 'created_at',
    updatedAt: 'updated_at', 
  },
  // Désactive les logs SQL dans la console. Cela peut être utile
  // pour éviter trop d'informations dans les logs lors du développement ou en production.
  logging:false, 
});

// Authentification avec la BDD
client.authenticate()
.then(
  () => console.log(`🚀 database ${database} connecté sur le port: ${port}`),
  () => console.log(`❌ impossible de se connecter à la base de donnée ${database}`)
);