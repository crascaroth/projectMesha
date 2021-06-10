export type AuthenticationData = {};

export type InputUserRaw = {
  nome: string;
  email: string;
  cpf: string;
  celular: string;
  conhecimentos: Array<any>;
};

export type inputUserComplete = {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  celular: string;
  conhecimentos: Array<any>;
};
