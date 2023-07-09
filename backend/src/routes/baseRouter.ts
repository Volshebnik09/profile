import { Router } from "express";
import routes from "./routes";

let baseRouter = Router();

baseRouter.all(routes.base, (req, res) => {
  return res.json("200");
});

export default baseRouter;
