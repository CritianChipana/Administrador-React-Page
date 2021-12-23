import React from 'react';

export const Card = ({
    nombre,
    apellido,
    puntos,
    foto
}) => {
    return (
        <div className="card-item" >

            <div className="encabezado" >
                <input type="checkbox" name="marcado" id="marcado" />
                
                <div className="marcador" >
                    <p>TOP CANDIDATO</p>
                    <div className="fondo-estrella" >
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                
                <i className="uil uil-ellipsis-v"></i>
            </div>

            <figure>
                <img src={foto} alt="perfil de candidato" />
            </figure>    

            <h5>{ nombre }</h5>
            <h4>{ puntos }</h4>

        </div>
    )
}
