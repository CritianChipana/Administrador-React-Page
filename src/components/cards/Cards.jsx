import React from 'react';

import { candidato } from '../../db/candidatos';
import { Card } from './Card';

export const Cards = () => {

    const candidatos = candidato;



    return (
        <div className="contenedor-cards" >
            {
                candidato.map( (datos)=>(
                    <Card key={ datos.id } { ...datos }  />
                ) )
            }
            
        </div>
    )
}
