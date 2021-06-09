import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainPage from '../Pages/MainPage/MainPage'


export default function Router() {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/">                    
                    <MainPage/>
                </Route>
                
                <Route exact path="/1">
                    
                </Route>

                <Route exact path="/2">
                    
                </Route>

            </Switch>
        </BrowserRouter>
    )
}