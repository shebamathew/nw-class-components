import React from 'react';
import List from './List/list.js'
import './App.css';
import Store from './store'; 

class App extends React.Component {
  static defaultProps = {
    store: { lists: [], allCards: {}, }
  };

  state = {
    store: this.props.store
    // store: Store, 
  }; 

  handleDeleteClick = (index) => {
    // console.log(`clicked delete button at ${index}`); 
    const firstList = this.props.store.lists[0]; 
    const cardsToShow = firstList.cardIds.filter(function(cardId, index) {
      return cardId[index];
    }); 
    console.log(cardsToShow); 
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