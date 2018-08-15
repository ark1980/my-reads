import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Input, InputLabel, FormControl, TextField, InputAdornment} from '@material-ui/core/';

class Search extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to={"/"}>
           
            <h5>Back to home</h5>
          </Link>
        </div>
        
        <FormControl>
        <InputLabel 
          htmlFor="input-with-icon-adornment">Search by title or author</InputLabel>
        <Input
          style={{
            width: '250px'
          }}
          startAdornment={
            <InputAdornment position="start">
              <i className="fas fa-search"></i>
            </InputAdornment>
          }
        />
      </FormControl>
      </div>
    )
  }
}

export default  Search;
