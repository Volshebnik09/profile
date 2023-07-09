import express from "express";
import baseRouter from "./routes/baseRouter";

const port = 3000;

const app = express();

app.use(baseRouter);

app.listen(port, () => {
  console.log(`server: Server is running at http://localhost:${port}`);
});
