import React from 'react'
import "./home.css";

import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Modal,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  Collapse,
  // ListItemIcon,
  ListItemText
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import {
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons'

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


  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardContainer: {
    width: '50%',
    minWidth: '600px',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '150px',
  }
});



class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutModal: false,
      projectsModal: false,
      collapse1: false,
      collapse2: false,
      collapse3: false,
      collapse4: false,
      collapse5: false,
    }
  }

  handleOpenAbout = () => {
    this.setState({ aboutModal: true });
  }
  
  handleCloseAbout = () => {
    this.setState({ aboutModal: false });
  }
  
  handleOpenProject = () => {
    this.setState({ projectsModal: true });
  }
  
  handleCloseProject = () => {
    this.setState({ projectsModal: false });
  }

  handleCollapse1 = () => {
    this.setState({collapse1: !this.state.collapse1})
  }
  handleCollapse2 = () => {
    this.setState({collapse2: !this.state.collapse2})
  }
  handleCollapse3 = () => {
    this.setState({collapse3: !this.state.collapse3})
  }
  handleCollapse4 = () => {
    this.setState({collapse4: !this.state.collapse4})
  }
  handleCollapse5 = () => {
    this.setState({collapse5: !this.state.collapse5})
  }

  render() {
    const {classes} = this.props;
    return (
    <div>
      <AppBar position="static"   color="default" className=  {classes.appBar}>
        <Toolbar className= {classes.toolbar}>
          <Typography variant="h6"  color="inherit"    className= {classes.toolbarTitle}  >
            Marguel Gutierrez
          </Typography>
          <div className="buttons">
          <Button onClick={this.handleOpenAbout} className= {classes.button}  >About</Button>
          <Button  onClick={this.handleOpenProject} hover className= {classes.button}>Projects</Button>
          <Button color=""  variant="raised">
            Resume
          </Button>
          </div>
        </Toolbar>
      </AppBar> 
      <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.aboutModal}
          onClose={this.handleCloseAbout}
        >
          <div className= {classes.cardContainer}>
            <Card className= {classes.card}>
            <div className='cardBody'>
              <CardContent>
                  <Typography button variant='title' align='center'>
                    ABOUT ME
                  </Typography>
                  <Divider/>
                  <div className="about-container">
                    <div className="about-img"></div>
                      <Typography className='about-text'>
                      Software engineering Bootcamp Student with an emphasis in Full Stack Web/Mobile development.  Dedicated to implementing the newest technologies and strategies. Thinking “out of the box” to   provide software solutions.
                      </Typography>
                    </div>
                  <Typography button variant='title' align='center'>
                    EDUCATION
                  </Typography>
                  <Divider/>
                    <div className="education-container">
                      <div className="about-lambda">
                      <Typography>
                        Lambda School trains people online to be software engineers at no up-front cost. Instead of paying tuition, students can agree to pay a percentage of their income after they're employed, and only if they're making more than $50k per year. If you don't find a job, or don't reach that level of income, you'll never pay a cent.
                        </Typography>
                      </div>
                      <div className="left--container">
                        <List className='education-list'>
                          <ListItem button variant='h6' onClick={this.handleCollapse1}>
                            <ListItemText primary="Programming"/>  
                            {this.state.collapse1 ? <ExpandLess /> : <ExpandMore />}
                          </ListItem>
                        <Collapse in={this.state.collapse1} timeout="auto" unmountOnExit>
                          <Typography align='center'>OO design &amp; development. Algorithm formulation &amp; implementation. Use of underlying environment.</Typography>
                        </Collapse>
                        <ListItem button variant='h6' onClick={this.handleCollapse2}>
                          <ListItemText primary="Data Structures &amp; Algorithms"/>
                          {this.state.collapse2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.collapse2} timeout="auto" unmountOnExit>
                          <Typography align='center'>Algorithm analysis; recursion; sorting &amp; searching; lists, stacks, queues, trees, hashing, graphs; OO data abstraction.</Typography>
                        </Collapse>
                        <ListItem button variant='h6' onClick={this.handleCollapse3}>
                          <ListItemText primary="Design &amp; Testing"/>
                          {this.state.collapse3 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.collapse3} timeout="auto" unmountOnExit>
                          <Typography align='center'>Principles, patterns, representation, testing, refactoring, &amp; QA.</Typography>
                        </Collapse>
                        <ListItem button variant='h6' onClick={this.handleCollapse4}>
                          <ListItemText primary="Front-End/Back-End Web Development"/>
                          {this.state.collapse4 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.collapse4} timeout="auto" unmountOnExit>
                          <Typography align='center'>HTML, CSS, Javascript, React, Redux, Node, Express,MongoDB, Django, RESTful APIs, Bcrypt, JWT, C++, Python.</Typography>
                        </Collapse>
                        <ListItem button variant='h6' onClick={this.handleCollapse5}>
                          <ListItemText primary="Work Ethic"/>
                          {this.state.collapse5 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.collapse5} timeout="auto" unmountOnExit>
                          <Typography align='center'>Utilize agile software development and Git workflow for all code challenges and sprint projects.</Typography>
                        </Collapse>
                      </List>
                      </div>
                  </div>
              </CardContent>
            </div>
            </Card>
          </div>
        </Modal>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.projectsModal}
          onClose={this.handleCloseProject}
        >
          <div className= {classes.cardContainer}>
            <Card className= {classes.card}>
              <div className='cardBody'>
              <Typography variant="h6" id="modal-title">
                Text in a modal
              </Typography>
              <Typography variant="subtitle1" id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
              </div>
            </Card>
            
          </div>
        </Modal>
    </div>
    );
  }
}

export default withStyles(styles)(NavBar);

            