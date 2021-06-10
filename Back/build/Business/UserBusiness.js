"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBusiness = void 0;
class UserBusiness {
    constructor(userDatabase, idGenerator) {
        this.userDatabase = userDatabase;
        this.idGenerator = idGenerator;
    }
    signupUser(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!input.nome ||
                !input.email ||
                !input.cpf ||
                !input.celular ||
                !input.conhecimentos) {
                throw new Error("Não Validado, dados incorretos");
            }
            if (input.nome.length > 100 || input.email.length > 100) {
                throw new Error("Não Validado, nome ou email muito longos");
            }
            const mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
            console.log("mailformat", mailformat);
            console.log("verification", input.email.match(mailformat));
            if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.email))) {
                throw new Error("Não Validado, e-mail valido");
            }
            let cpf = input.cpf;
            if (cpf.length !== 14) {
                throw new Error("Não Validado, CPF Invalido");
            }
            cpf = cpf.replace(".", "");
            cpf = cpf.replace(".", "");
            cpf = cpf.replace("-", "");
            let SomaPrimeiroDigito = Number(cpf[0]) * 10 +
                Number(cpf[1]) * 9 +
                Number(cpf[2]) * 8 +
                Number(cpf[3]) * 7 +
                Number(cpf[4]) * 6 +
                Number(cpf[5]) * 5 +
                Number(cpf[6]) * 4 +
                Number(cpf[7]) * 3 +
                Number(cpf[8]) * 2;
            const divPrimeiroDigito = Number(((SomaPrimeiroDigito * 10) % 11).toFixed(0));
            console.log("divPrimeiroDigito", divPrimeiroDigito);
            if (!((Number(cpf[9]) === 0 &&
                (divPrimeiroDigito === 10 || divPrimeiroDigito === 11)) ||
                Number(cpf[9]) === divPrimeiroDigito)) {
                throw new Error("Não Validade, CPF Invalido");
            }
            let SomaSegundoDigito = Number(cpf[0]) * 11 +
                Number(cpf[1]) * 10 +
                Number(cpf[2]) * 9 +
                Number(cpf[3]) * 8 +
                Number(cpf[4]) * 7 +
                Number(cpf[5]) * 6 +
                Number(cpf[6]) * 5 +
                Number(cpf[7]) * 4 +
                Number(cpf[8]) * 3 +
                Number(cpf[9]) * 2;
            const divSegundoDigito = Number(((SomaSegundoDigito * 10) % 11).toFixed(0));
            if (!((Number(cpf[10]) === 0 &&
                (divSegundoDigito === 10 || divSegundoDigito === 11)) ||
                Number(cpf[10]) === divSegundoDigito)) {
                throw new Error("Não Validade, CPF Invalido");
            }
            const id = this.idGenerator.generateId();
        });
    }
}
exports.UserBusiness = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map