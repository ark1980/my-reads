import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

// const styles = {
//   paper: {
//     padding: "10px",
//     textAlign: 'center',
//     width: "80vw",
//     margin: "20px auto",
//     border: "none",
//     borderRadius: 0,
//   },
// };

class CurrentlyReading extends Component {
  render() {
    return(
      <Grid container spacing={16}>
        <Grid item xs>
          <div className="BookshelfTitleBar">
            <div className="BookshelfTitle">
            <i className="fas fa-book-reader fa-2x"></i>
            <h3>Currently Reading</h3>
            </div>
          </div>
          <div>
            <h1>Hello from Currently Reading</h1>
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default CurrentlyReading;