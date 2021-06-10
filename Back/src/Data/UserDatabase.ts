import { inputUserComplete } from "../Entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public async signupUser(input: inputUserComplete): Promise<void> {
    try {
      await this.getConnection().raw(`
            INSERT INTO ${this.tableNames.UserTableName} (id,
                nome,
                email,
                cpf,
                celular,
                conhecimentos )
            VALUES("${input.id}", "${input.nome}", "${input.email}", "${input.cpf}", "${input.celular}", "${input.conhecimentos}");
            `);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
