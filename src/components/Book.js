import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import Divider from '@material-ui/core/Divider';

class Book extends Component {

  
  // handleChange = (e) => {
  //   this.setState({ status: e.target.value })
  //   this.updateBookStatus();
  // }
  
  handleChange = (e) => {
    this.props.updateShelfStatus(this.props.book, e.target.value);
  }

  render(){

    const book = this.props.book;
    const bookImage = book.imageLinks.thumbnail;

    return (
      <div className="Book">
        <div className="Book-top">
          <div className="Book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImage})`}} >
            <div className="Book-shelf-changer">
            <form>
              <FormControl>
                <Select className="selection" value={this.props.book.shelf} onChange={this.handleChange}>
                  <MenuItem value="none">
                    <em>None</em>
                  </MenuItem>
                  <Divider />
                  <MenuItem value='currentlyReading'><i className="fas fa-book-reader" style={{margin: "8px"}}/>Currently Reading</MenuItem>
                  <Divider />
                  <MenuItem value='wantToRead'><FontAwesomeIcon icon={faBookOpen} style={{margin: "8px"}}/>Want to Read</MenuItem>
                  <Divider />
                  <MenuItem value='read'><FontAwesomeIcon icon={faBook} style={{margin: "8px"}}/>Read</MenuItem>
                </Select>
              </FormControl>
            </form>
            </div>
          </div>
        </div>
        <div className="Book-title">
          <h4>{book.title}</h4>
        </div>
        <div className="Book-authors">
          <p>{book.authors}</p>
        </div>
      </div>
    )
  }
}

export default Book;