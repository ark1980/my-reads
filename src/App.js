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

  updateShelfStatus = (book, shelf) => {
    BooksAPI.update(book, shelf).then(
      this.fetchInitialBooks
    )
  }

  render() {
    const books = this.state.books
    console.log(this.state.books)
    return (
      <div className="App">
        <Header />
        <CurrentlyReading books={books} updateShelfStatus={this.updateShelfStatus} />
        <WantToRead books={books} updateShelfStatus={this.updateShelfStatus} />
        <Read books={books} updateShelfStatus={this.updateShelfStatus} />
      </div>
    );
  }
}

export default App;
