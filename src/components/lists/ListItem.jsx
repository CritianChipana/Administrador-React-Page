import React from 'react';

export const ListItem = ({
    nombre,
    apellido,
    puntos,
    foto
}) => {

    return (
        <div className="contenedor-listItem" >
            <div className="juntar">
                <input type="checkbox" name="marcarlista" id="marcarlista" />
                <figure>
                    <img src={ foto } alt="PERFIL DE Usuario" />
                    <div className="fondo-estrella" >
                        <i className="fas fa-star"></i>
                    </div>
                </figure>
                <p className="nombre" > { nombre } </p>
            </div>


            <p className="apellido" > { apellido } </p>

            <div className="final-listItem" >
                <p className="puntos" > { puntos } </p>
                <i className="uil uil-ellipsis-v"></i>
            </div>

        </div>
    )
}
