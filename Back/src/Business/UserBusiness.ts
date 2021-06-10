import { UserDatabase } from "../Data/UserDatabase";
import { inputUserComplete, InputUserRaw } from "../Entities/User";
import { HashManager } from "../Services/HashManager";
import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator
  ) {}

  async signupUser(input: InputUserRaw) {
    // console.log("input business", input);
    //Verificando Informações estão completas
    if (
      !input.nome ||
      !input.email ||
      !input.cpf ||
      !input.celular ||
      !input.conhecimentos
    ) {
      throw new Error("Não Validado, dados incorretos");
    }

    //Verificando se nome e e-mail possuem o tamanho correto
    if (input.nome.length > 100 || input.email.length > 100) {
      throw new Error("Não Validado, nome ou email muito longos");
    }

    //Verificando a validade do email!
    //Caso seja invalido, joga o erro

    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        input.email
      )
    ) {
      throw new Error("Não Validado, e-mail valido");
    }

    let cpf = input.cpf;
    if (cpf.length !== 14) {
      throw new Error("Não Validado, CPF Invalido");
    }

    //tratando cpf para transformar apenas em numeros

    cpf = cpf.replace(".", "");
    cpf = cpf.replace(".", "");
    cpf = cpf.replace("-", "");

    //Verificador CPF válido
    let SomaPrimeiroDigito =
      Number(cpf[0]) * 10 +
      Number(cpf[1]) * 9 +
      Number(cpf[2]) * 8 +
      Number(cpf[3]) * 7 +
      Number(cpf[4]) * 6 +
      Number(cpf[5]) * 5 +
      Number(cpf[6]) * 4 +
      Number(cpf[7]) * 3 +
      Number(cpf[8]) * 2;

    const divPrimeiroDigito = Number(
      ((SomaPrimeiroDigito * 10) % 11).toFixed(0)
    );
    console.log("divPrimeiroDigito", divPrimeiroDigito);

    if (
      !(
        (Number(cpf[9]) === 0 &&
          (divPrimeiroDigito === 10 || divPrimeiroDigito === 11)) ||
        Number(cpf[9]) === divPrimeiroDigito
      )
    ) {
      throw new Error("Não Validade, CPF Invalido");
    }

    let SomaSegundoDigito =
      Number(cpf[0]) * 11 +
      Number(cpf[1]) * 10 +
      Number(cpf[2]) * 9 +
      Number(cpf[3]) * 8 +
      Number(cpf[4]) * 7 +
      Number(cpf[5]) * 6 +
      Number(cpf[6]) * 5 +
      Number(cpf[7]) * 4 +
      Number(cpf[8]) * 3 +
      Number(cpf[9]) * 2;
    //toFixed, arredondando para 0 Casas decimais
    const divSegundoDigito = Number(((SomaSegundoDigito * 10) % 11).toFixed(0));

    if (
      !(
        (Number(cpf[10]) === 0 &&
          (divSegundoDigito === 10 || divSegundoDigito === 11)) ||
        Number(cpf[10]) === divSegundoDigito
      )
    ) {
      throw new Error("Não Validade, CPF Invalido");
    }
    // Se nao caiu em nenhum erro, entao o CPF é Valido

    const id = this.idGenerator.generateId();

    const inputData: inputUserComplete = {
      id,
      nome: input.nome,
      email: input.email,
      cpf,
      celular: input.celular,
      conhecimentos: input.conhecimentos

    }
    await this.userDatabase.signupUser(inputData)
  }
}
