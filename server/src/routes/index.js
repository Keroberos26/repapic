import productRouter from './product.js';

const routes = (app) => {
  app.use('/api/products', productRouter);
};

export default routes;
