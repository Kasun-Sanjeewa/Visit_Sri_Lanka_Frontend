import React from 'react'
import Cards from './card';
import { Hotels } from './Hotels';

export default function CardList() {
    return (
        <div className="card_list">
            {Hotels.map((card) => {
                return (

                    <Cards {...card} key={card.id} />

                );
            })}
        </div>
    )
}
