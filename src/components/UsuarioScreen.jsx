import React from 'react'
import { Cards } from './cards/Cards'
import { List } from './lists/List'

export const UsuarioScreen = () => {
    return (
        <div /* className="Principal-cambiante" */ className="hola" >
            <h1>holas</h1>

                {/* ************** BARRA DE TITULO */}

                {/* <div className="contenedor-barra">

                    <div className="item-barra">
                        <p className="sub-titulo" >
                            JOB TITLE
                        </p>
                        <p className="titulo name" >
                            UX DESIGNER CRISTIAN A.
                        </p>
                    </div>
                    

                    <div className="item-barra">
                        <p className="sub-titulo" >
                            CANDIDATES
                        </p>
                        <p className="titulo numero-uno" >
                            169
                        </p>
                    </div>

                    <div className="item-barra">
                        <p className="sub-titulo" >
                            INCOMPLETE
                        </p>
                        <p className="titulo numero-dos" >
                            3
                        </p>
                    </div>

                    <div className="item-barra iconito">
                        <div className="contenedorICon">
                            <i className="uil uil-pen"></i>

                        </div>
                    </div>

                </div> */}

                {/* ************** Buscador */}

                {/* <div className="contenedor-buscador" >

                    <label htmlFor="search">
                        <i className="uil uil-search"></i>
                        <input 
                            type="text" 
                            name="search" 
                            id="search" 
                            placeholder="Buscar Candidato"
                            />
                    </label>

                    <button type="submit">
                        <i className="uil uil-plus-circle"></i>
                        ADD CANDIDATE
                    </button>

                </div> */}


                {/* *************** CARDS */}

                {/* <Cards/> */}
                {/* ///************** lista */ }
                {/* <List/> */}
        </div>
    )
}
