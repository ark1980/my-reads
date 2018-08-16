import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';

const ListBooks = (props) => {

  const styles = {
      zIndex: '1',
      position: 'fixed',
      right: "0",
      bottom: "0",
      backgroundColor: "#2fd7ea",
      margin: "20px",
      color: "#fff",
  }

  const books = props.books;
  const updateShelfStatus = props.updateShelfStatus;

  return (
    <div>
        <CurrentlyReading
          books={books}
          updateShelfStatus={updateShelfStatus}
        /> 

        <WantToRead 
          books={books}
          updateShelfStatus={updateShelfStatus}
        /> 

        <Read
          books={books}
          updateShelfStatus={updateShelfStatus}
        />

      <Link to={`/search`} >
        <Button variant="fab" aria-label="Add" style={styles} >
          <AddIcon />
        </Button>
      </Link>

    </div>
  )
}

export default ListBooks;