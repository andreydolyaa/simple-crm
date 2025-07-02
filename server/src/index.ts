import { Database } from "./core/database.js";
import Server from "./core/server.js";
import router from "./routes/index.js";

const server = new Server({
  port: Number(process.env.PORT),
  router,
});

const database = new Database(process.env.DB_URL ?? "");

server.start()
  .then(() => database.connect());
