import productRouter from './product.js';
import categoryRouter from './category.js';
// import blogRouter from './blog.js';
// import cartRouter from './cart.js';
// import userRouter from './user.js';
// import reviewRouter from './review.js';

const routes = (app) => {
  app.use('/api/products', productRouter);
  app.use('/api/categories', categoryRouter);
  // app.use('/api/blogs', blogRouter);
  // app.use('/api/carts', cartRouter);
  // app.use('/api/users', userRouter);
  // app.use('/api/reviews', reviewRouter);
};

export default routes;
