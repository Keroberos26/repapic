import productRouter from './product.js';
import authRouter from './auth.js';

const routes = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/api/products', productRouter);
};

export default routes;
