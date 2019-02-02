import React from 'react';
import Card from '../Card/card.js'; 
import './list.css';

function List(props) {
  // console.log(props.cards[0]); 
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card, index) =>
          <Card
            key={index}
            id={index}
            title={card.title}
            content={card.content}
            handleDeleteClick = {props.handleDeleteClick}
          />
        )}
        <button
          type='button'
          className='List-add-button'
        >
          Add Card
        </button>
      </div>
    </section>
  )
}

export default List 