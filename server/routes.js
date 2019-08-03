import appRouter from './routers/appRouter';
import userRouter from './routers/userRouter';
import brandsRouter from './routers/brandsRouter';
import shoesRouter from './routers/shoesRouter';
import ordersRouter from './routers/ordersRouter';
export default function routes (app) {
    app.use('/api/v1/app',appRouter);
    app.use('/api/v1/users',userRouter);
    app.use('/api/v1/brands',brandsRouter);
    app.use('/api/v1/shoes', shoesRouter);
    app.use('/api/v1/orders',ordersRouter);
}