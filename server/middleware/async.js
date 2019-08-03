import winston from 'winston';
export function asyncMiddleware (handler) {
    return async (req,res) => {
        try {
            await handler(req,res);
        } catch (err) {
            const error = {
                message : err.message || "Something went wrong",
                status : err.status || 500
            };
            winston.error(error.message,err);
            return res.status(error.status || 500).json(error);
        }
    }
}