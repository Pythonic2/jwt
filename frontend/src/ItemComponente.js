import React from 'react';

export default function ItemComponente(props){
    const status = props.status;
    console.log(status)
    return <li>{props.name} 

        <p>Status: {status ? <div>Finalizado</div> : <div>Não Finalizado</div>}</p>
    </li>
    
}   