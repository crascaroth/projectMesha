import React, { useState } from "react";
import Context from "../GlobalState/Context.js"



const Provider = (props) => {    

    const [teste,setTeste] = useState("oie")
    

    

    const states = { teste }
    const setters = {  }
    const requests = {  }

    const data = { states, setters, requests };



    return (
        <Context.Provider value={data}>
            {props.children}
        </Context.Provider>
    );
}

export default Provider;