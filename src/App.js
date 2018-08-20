import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import ListBooks from './components/ListBooks'

import Search from './components/Search';

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

        <Route exact path="/" render={() => (
          <ListBooks 
            books={books}
            updateShelfStatus={this.updateShelfStatus}
          />
        )}/>
        
        <Route path="/search" render={() => (
          <Search 
            updateShelfStatus={this.updateShelfStatus}
          />
        )}/>
      </div>
    );
  }
}

export default App;
