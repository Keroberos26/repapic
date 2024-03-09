import productRouter from './product.js';
import authRouter from './auth.js';
import cateRouter from './category.js';
import blogRouter from './blog.js';

const routes = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/api/products', productRouter);
  app.use('/api/categories', cateRouter);
  app.use('/api/blogs', blogRouter);
};

export default routes;
