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
      backgroundColor: '#00bcd4',
    }
  }

  return (
    <div>
      <AppBar position="static" color="secondary" style={styles.appBar}>
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" style={styles.typography}>
            My Reads
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;