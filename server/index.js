import Express from "express";
import helmet from "helmet";
import "./common/env";
import Server from "./common/server";
import routes from "./routes";

export default new Server(new Express().use(helmet()))
  .router(routes)
  .listen(process.env.PORT);
