import React from 'react'
// import Modal from 'react-modal';

import {
  AppBar,
  Button,
  Toolbar,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Modal.setAppElement('#yourAppElement')

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: 'transparent',
    },
  },
  appBar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1024px',
    position: 'relative',
    backgroundColor: 'transparent',
    color: 'white',
  },
  toolbar: {
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    color: 'white',
    "&:hover": {
      fontSize: '20px',
    }
    
  },

});
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  

  render() {
    const {classes} = this.props;
    return (
      <AppBar position="static"   color="default" className=  {classes.appBar}>
      <Toolbar className= {classes.toolbar}>
        <Typography variant="h6"  color="inherit" noWrap   className={classes.toolbarTitle}  >
          Marguel Gutierrez
        </Typography>
        <div className="buttons">
        <Button hover className= {classes.button}>Home</Button>
        <Button className= {classes.button}>About</Button>
        <Button hover className= {classes.button}>Projects</Button>
        <Button color=""  variant="raised">
          Resume
        </Button>
        </div>
      </Toolbar>
    </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);
