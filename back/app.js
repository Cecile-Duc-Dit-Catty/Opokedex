import express from 'express';
import cors from 'cors';
import { router } from './routers/index.js'
import './models/index.js';


export const app = express();

// Traitement des requêtes JSON
app.use(express.json());

app.use(cors({ origin:process.env.CORS}));

// Fichiers statiques
app.use(express.static('./front'));

// Routes api
app.use('/api', router)

app.listen(process.env.PORT, () => {
  console.log(`🚀 le serveur API est connecté sur le port: ${process.env.PORT}`);
});
