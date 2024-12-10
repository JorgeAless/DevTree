import { Request, Response } from "express";
import User from "../models/User";

export const createAccount = async (req: Request, res: Response) => {
  const { email } = req.body;
  const userExist = await User.findOne({ email });
  console.log(userExist);
  
  await User.create(req.body);
  res.send("Registro creado correctamente.");
};

