import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Input, InputLabel, FormControl, InputAdornment} from '@material-ui/core/';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class Search extends Component {
  
  state = {
    query: "",
    searchedBooks: []
  }

  handleChange = (e) => {
    this.updateQuery(e.target.value)
  }

  updateQuery = (query) => {
    this.setState({
      query
    })
    this.updateSearchedBooks(query)
  }

  updateSearchedBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then(searchedBooks => {
        searchedBooks.error ? this.setState({searchedBooks: []}) 
        : this.setState({searchedBooks})
      })
    } else {
      this.setState({searchedBooks: []});
    }
  }




  render() {
    return (
      <div className="App">
        <div>
          <Link to={"/"}><h5>Back to home</h5></Link>
        </div>
        
        <FormControl>
          <InputLabel 
            htmlFor="input-with-icon-adornment">Search by title or author</InputLabel>
          <Input
            value={this.state.query}
            onChange={this.handleChange}
            style={{width: '250px'}}
            startAdornment={
              <InputAdornment position="start">
                <i className="fas fa-search"></i>
              </InputAdornment>
            }
          />
        </FormControl>
        <ol>
          {this.state.searchedBooks.map(book => (
            <li key={book.id}>
              <Book 
                book={book}
              />
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default Search;
