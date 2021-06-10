import React, { useState } from "react";
import Context from "../GlobalState/Context.js"
import axios from "axios"
import {BASE_URL} from "../Constants/url"




const Provider = (props) => {        
    
    const  signupUser =  async (body) => {

        console.log(BASE_URL + "/user/signup")
        
        await axios.put(BASE_URL + "/user/signup", body)
        .then((res) => {
            console.log(res)
        })
        .catch((err)=> {
            console.log(err)
        })
        
    }
    

    const states = {  }
    const setters = {  }
    const requests = { signupUser }

    const data = { states, setters, requests };



    return (
        <Context.Provider value={data}>
            {props.children}
        </Context.Provider>
    );
}

export default Provider;