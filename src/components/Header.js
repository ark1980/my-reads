import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  
  const styles = {
    typography: {
      margin: 'auto',
      fontSize: '1.6rem'
    },
    appBar: {
      backgroundColor: '#2fd7ea',
      marginBottom: '30px'
    },
    toolbar: {
      height: '70px'
    }
  }

  return (
    <div>
      <AppBar position="static" style={styles.appBar}>
        <Toolbar variant="dense" style={styles.toolbar}>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" style={styles.typography}>
            MY READS
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;