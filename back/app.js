import express from 'express';
import cors from 'cors';
import { router } from './routers/index.js'


export const app = express();

app.use(cors({ origin:process.env.CORS}));

// Fichiers statiques
app.use(express.static('./front'));

// Traitement des requêtes JSON
app.use(express.json());

// Routes api
app.use('/api', router)

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 4000');
});
