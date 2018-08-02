import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Read from './components/Read';
import CurrentlyReading from './components/CurrentlyReading';
import WantToRead from './components/WantToRead';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import * as BooksAPI from './BooksAPI';

library.add(fab)

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.fetchInitialBooks()
  }

  fetchInitialBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }


  render() {
    console.log(this.state.books)
    return (
      <div className="App">
        <Header />
        <CurrentlyReading books={this.state.books} />
        <WantToRead books={this.state.books} />
        <Read books={this.state.books} />
      </div>
    );
  }
}

export default App;
