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
exports.UserController = void 0;
const UserBusiness_1 = require("../Business/UserBusiness");
const BaseDatabase_1 = require("../Data/BaseDatabase");
const UserData_1 = require("../Data/UserData");
const IdGenerator_1 = require("../Services/IdGenerator");
class UserController {
    signupUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    nome: req.body.nome,
                    email: req.body.email,
                    cpf: req.body.cpf,
                    celular: req.body.celular,
                    conhecimentos: req.body.conhecimentos
                };
                const userBusiness = new UserBusiness_1.UserBusiness(new UserData_1.UserDatabase(), new IdGenerator_1.IdGenerator());
                yield userBusiness.signupUser(input);
                res.status(200).send("Validado");
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map