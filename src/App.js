import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Read from './components/Read';
import CurrentlyReading from './components/CurrentlyReading';
import WantToRead from './components/WantToRead';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

class App extends Component {
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
