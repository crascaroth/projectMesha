import { useContext, useState } from "react";
import Context from "../../GlobalState/Context";

const FormNewUser = () => {
  const { states, setters, requests } = useContext(Context);

  const [info, setInfo] = useState({});

  const onChange = (event) => {
    console.log(event.target.name, event.target.value);

    setInfo({
      ...info,
      [event.target.name]: `${event.target.value}`,
    });
  };

  //    Nome: campo texto com 100 caracteres, obrigatório
  //    Email: campo texto com 100 caracteres, com validação de email, obrigatório
  //    CPF: campo texto com formatação de cpf (000.000.000-00) e validação com 14 caracteres, obrigatório.
  //    Celular: campo texto com máscara de telefone no formato (xx) xxxxx-xxxx, opcional
  //    Conhecimentos: Uma lista de conhecimentos que podem ser associadas, onde o usuário deve escolher
  //    no mínimo 1 e no máximo 3 (Lista: Git, React, PHP, NodeJS, DevOps, Banco de Dados, TypeScript)
  //    Git, React, PHP, NodeJS, DevOps, Banco de Dados, TypeScript
  return (
    <div>
      <label>Nome:</label>
      <input name="nome" onChange={onChange} value={info.nome}></input>

      <label>E-mail:</label>
      <input name="email" onChange={onChange} value={info.email}></input>

      <label>CPF:</label>
      <input name="cpf" onChange={onChange} value={info.cpf}></input>

      <label>Celular:</label>
      <input name="celular" onChange={onChange} value={info.celular}></input>

      <label>Conhecimentos:</label>
      <label>Git:</label><input type="checkbox"></input>
      <label>React:</label><input type="checkbox"></input>
      <label>PHP:</label><input type="checkbox"></input>
      <label>NodeJS:</label><input type="checkbox"></input>
      <label>DevOps:</label><input type="checkbox"></input>
      <label>Banco de Dados:</label><input type="checkbox"></input>
      <label>TypeScript:</label><input type="checkbox"></input>



      <button onClick={() => console.log(info)}>Enviar</button>
    </div>
  );
};

export default FormNewUser;
