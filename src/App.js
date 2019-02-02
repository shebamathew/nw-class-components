import React from 'react';
import List from './List/list.js'
import './App.css';

class App extends React.Component {
  static defaultProps = {
    store: { lists: [], allCards: {}, }
  };

  state = {
    store: this.props.store
  }

  handleDeleteClick = (index) => {
    console.log(`clicked delete button at ${index}`); 
    console.log(this.props.store.lists[0].index); 
    // const newCardIds = this.props.store.lists[0].cardIds.filter(cardId => cardId !== index); 
    // return newCardIds; 
  }
  
  render() {
    const { store } = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              handleDeleteClick = {this.handleDeleteClick}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;