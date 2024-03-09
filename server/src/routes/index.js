import productRouter from './product.js';
import authRouter from './auth.js';
import cateRouter from './category.js';
import userRouter from './user.js';
import cartRouter from './cart.js';

const routes = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/api/products', productRouter);
  app.use('/api/categories', cateRouter);
  app.use('/api/users', userRouter);
  app.use('/api/carts', cartRouter);
};

export default routes;
