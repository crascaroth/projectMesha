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

  let totalChecked = 0;
  let arrayChecked = [];

  const FunctionChecked = (event) => {

    if (event.target.checked == true) {
      totalChecked++;
      arrayChecked.push(event.target.value);
    } else {
      totalChecked = totalChecked - 1;
      arrayChecked.pop();
    }

    if (totalChecked >= 3) {
      let checkboxes = document.querySelectorAll("input[type=checkbox]");
      let selectedCboxes = Array.prototype.slice
        .call(checkboxes)
        .filter((ch) => {
          if (ch.checked === false) {
            ch.disabled = true;
          }
          
        });
    } else {
      let checkboxes = document.querySelectorAll("input[type=checkbox]");      
      let selectedCboxes = Array.prototype.slice
        .call(checkboxes)
        .filter((ch) => {
          ch.disabled = false;
        });
    }
    
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
      <label>Git:</label>
      <input
        type="checkbox"
        value="Git"
        Id="myCheck"
        onClick={FunctionChecked}
      ></input>
      <label>React:</label>
      <input
        type="checkbox"
        value="React"
        Id="myCheck"
        onClick={FunctionChecked}
      ></input>
      <label>PHP:</label>
      <input
        type="checkbox"
        value="PHP"
        Id="myCheck"
        onClick={FunctionChecked}
      ></input>
      <label>NodeJS:</label>
      <input
        type="checkbox"
        value="NodeJS"
        Id="myCheck"
        onClick={FunctionChecked}
      ></input>
      <label>DevOps:</label>
      <input
        type="checkbox"
        value="DevOps"
        Id="myCheck"
        onClick={FunctionChecked}
      ></input>
      <label>Banco de Dados:</label>
      <input
        type="checkbox"
        value="Banco de Dados"
        Id="myCheck"
        onClick={FunctionChecked}
      ></input>
      <label>TypeScript:</label>
      <input
        type="checkbox"
        value="TypeScript"
        Id="myCheck"
        onClick={FunctionChecked}
      ></input>

      <button onClick={() => console.log(info)}>Enviar</button>
    </div>
  );
};

export default FormNewUser;
