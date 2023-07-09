import { Request, Response } from "express";
import User from "../models/User";

export const createUserView = async (req: Request, res: Response) => {
  const login = req.body.login;
  const password = req.body.password;
  const role = req.body.role;

  const user = await User.create({
    login,
    password,
    role,
  });

  console.log(user);
};
