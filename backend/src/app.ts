import express from "express";
import baseRouter from "./routes/baseRouter";
import { sequelize } from "./settings/sequelize";
import User from "./models/User";

const port = 3000;

const app = express();

app.use(baseRouter);

(async () => {
  await sequelize.authenticate();
  // sync modeles
  await User.sync({
    alter: true,
    logging: false,
  });

  app.listen(port, () => {
    console.log(`server: Server is running at http://localhost:${port}`);
  });
})();
