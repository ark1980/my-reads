import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

class WnatToRead extends Component {
  render() {
    return(
      <Grid container spacing={16}>
        <Grid item xs>
          <div className="BookshelfTitleBar">
            <div className="BookshelfTitle">
            <FontAwesomeIcon icon={faBookOpen} size="2x" />
            <h3>Want to Read</h3>
            </div>
          </div>
          <div>
            <h1>Hello from Want to Read</h1>
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default WnatToRead;