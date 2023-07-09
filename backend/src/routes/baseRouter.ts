import { Router } from "express";
import { createUserView } from "../views/user";

let baseRouter = Router();

baseRouter.all("", (req, res) => {
  return res.json("200");
});

//v1

baseRouter.route("/v1/user").put(createUserView);

export default baseRouter;
