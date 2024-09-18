import 'dotenv/config';
import { createServer } from 'node:http';
import { app } from './back/app.js';

const PORT = process.env.PORT ?? 3000;

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});