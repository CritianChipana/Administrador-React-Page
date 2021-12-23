import React from 'react';
import { candidato } from '../../db/candidatos';
import { ListItem } from './ListItem';

export const List = () => {

    const candidatos = candidato;
    
    return (
        <div className="contenedor-listaAdmi">
            {
                candidatos.map( (datos)=>(
                    <ListItem key={ datos.id }  { ...datos } />
                ) )
            }
        </div>
    )
}
