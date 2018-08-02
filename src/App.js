import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Read from './components/Read';
import CurrentlyReading from './components/CurrentlyReading';
import WantToRead from './components/WantToRead';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import * as BookAPI from './BooksAPI';

library.add(fab)

class App extends Component {

  constructor() {
    super()

    const books = BookAPI.getAll();
    console.log(books);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <CurrentlyReading />
        <WantToRead />
        <Read />
      </div>
    );
  }
}

export default App;
