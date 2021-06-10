import { Request, Response } from "express";
import { UserBusiness } from "../Business/UserBusiness";
import { BaseDatabase } from "../Data/BaseDatabase";
import { UserDatabase } from "../Data/UserDatabase";
import { InputUserRaw } from "../Entities/User";

import { IdGenerator } from "../Services/IdGenerator";

export class UserController {
  async signupUser(req: Request, res: Response) {
    try {
      const input: InputUserRaw = {
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf,
        celular: req.body.celular,
        conhecimentos: req.body.conhecimentos
      };
      

      const userBusiness = new UserBusiness(
        new UserDatabase(),
        new IdGenerator()
        
        
      );

      await userBusiness.signupUser(input);

      res.status(200).send("Validado");
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
    await BaseDatabase.destroyConnection();
  }
}
