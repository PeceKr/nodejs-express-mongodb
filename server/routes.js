import appRouter from './routers/appRouter';
export default function routes (app) {
    app.use('/api/v1/app',appRouter);
}