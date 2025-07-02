import http, { type Server as ServerType } from "http";
import express, { type Express, type Router } from "express";
import cors from "cors";
import logger from "./logger.ts";

interface ServerOptionsInterface {
  port: number;
  router: Router;
}

class Server {
  app: Express;
  server: ServerType;
  port: number;
  router: Router;

  constructor(options: ServerOptionsInterface) {
    this.app = express();
    this.server = http.createServer(this.app);
    this.port = options.port;
    this.router = options.router;
    this.init();
  }

  init() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(this.router);
  }

  start() {
    return new Promise((resolve, reject) => {
      this.server.listen(this.port, () => {
        logger.info(`server listening on port [${this.port}]`);
        resolve("connected");
      });

      this.server.on("error", (err) => {
        logger.info(`server failed to start`);
        reject("failed")
      });
    });
  }
}

export default Server;
