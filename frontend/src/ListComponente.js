import React from 'react';
import './App.css';
import ItemComponente from './ItemComponente';

export default function ListComponente(props){
    const items = props.items
    return (
        <div>
            <h2>{props.listName}</h2>
            <ul>
                {items.map(item =><ItemComponente key={item.id} name={item.nome} status={item.finalizado}/>) }
                
            </ul>
        </div>
    )
}
