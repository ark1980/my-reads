import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

class Read extends Component {
  render() {
    return(
      <Grid container spacing={16}>
        <Grid item xs>
          <div className="BookshelfTitleBar">
            <div className="BookshelfTitle">
            <FontAwesomeIcon icon={faBook} size="2x" />
            <h3>Read</h3>
            </div>
          </div>
          <div>
            <h1>Hello from Read</h1>
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default Read;