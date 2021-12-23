import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
//   Link
} from "react-router-dom";
import { Carne } from "../components/alimentos/Carne";
import { Frutas } from "../components/alimentos/Frutas";
import { Vegetales } from "../components/alimentos/Vegetales";
import { Nav } from "../components/nav/Nav";
import { NavBar } from "../components/navBar/NavBar";
import { UsuarioScreen } from "../components/UsuarioScreen";
export const AppRouter = () => {
    return (
        <Router>
          <div>

            <Nav/>
            <div className="AppRouter-content" >
            
              <NavBar/>

              <Switch>
             

                <Route path="/usuario" component={ UsuarioScreen }>
                </Route>

                <Route path="/fruta" component={ Frutas }>
                </Route>

                <Route path="/vegetales" component={ Vegetales }>
                </Route>

                <Route path="/carne" component={ Carne }>
                </Route>

                <Redirect to="/" ></Redirect>
              </Switch>

            </div>
          </div>
        </Router>
      );
}
