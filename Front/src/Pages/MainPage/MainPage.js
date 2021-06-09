import { useContext, useState } from "react";
import Context from "../../GlobalState/Context";
import { goToPage } from "../../Router/Walker";
import { useHistory } from "react-router-dom";

const MainPage = () => {
  const history = useHistory();
  const { states, setters, requests } = useContext(Context);
  const [nameUser, setNameUser] = useState("");
  
  const onChange = (event) => setNameUser(event.target.value);

  return (
    <div>
      <input
        placeholder="Escreva Seu Nome"
        value={nameUser}
        onChange={onChange}
      />
      <button onClick={() => goToPage(history, `/${nameUser}/registrar`)}>
        Registrar
      </button>
    </div>
  );
};

export default MainPage;
