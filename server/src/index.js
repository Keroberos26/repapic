import express from 'express';
import dotenv from 'dotenv';
import { connect } from './config/db/index.js';
import routes from './routes/index.js';
import { error } from './app/middlewares/error.js';

dotenv.config({ path: '.env.development.local' });
connect();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

routes(app);

app.use(error);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
