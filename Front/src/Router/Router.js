import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainPage from '../Pages/MainPage/MainPage'
import FormNewUser from "../Pages/FormNewUser/FormNewUser"


export default function Router() {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/">                    
                    <MainPage/>
                </Route>
                
                <Route exact path="/:NameUser/registrar">
                    <FormNewUser/>
                </Route>

                

            </Switch>
        </BrowserRouter>
    )
}