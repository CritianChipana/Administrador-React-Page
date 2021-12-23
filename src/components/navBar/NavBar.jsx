import React from 'react';
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="contenedor-flex content-navBar" >
            <ul>
                <li>
                    <i className="uil uil-user"></i>
                    <Link className="link-navBar"  to="/usuario">Usuarios</Link>
                </li>
                <li>
                    <i className="uil uil-apple-alt"></i>
                    <Link className="link-navBar" to="/fruta" >Frutas</Link>
                </li>
                <li>
                    <i className="uil uil-analysis"></i>
                    <Link className="link-navBar" to="/vegetales" >Vegetales</Link>
                </li>
                <li>
                    <i className="uil uil-spin"></i>
                    <Link className="link-navBar" to="/carne" >Carne</Link>
                </li>
                <li>
                    <i className="uil uil-raindrops"></i>
                    <Link className="link-navBar" to="/bebida" >Vebidas</Link>
                </li>
            </ul>
        </div>
    )
}
