import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText,
  TableContainer,Table,TableHead,TableRow,TableCell,TableBody, CardContent, CardActions,Button, Link
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Grid from '@material-ui/core/Grid';
import { Card,CardMedia} from '@material-ui/core';
import { Projects } from '../shared/projects.js';
import {skills} from '../shared/skills.js';
import NavLink from './NavLink';
import { contacts } from '../shared/contact.js';
import { Experience } from '../shared/experience.js';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        marginLeft: drawerWidth,
        backgroundColor: 'black',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#242635',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      backgroundColor: '#242635',
      color: 'white'
    },
    navCenter:{
      justifyContent : 'center',
      alignItems: 'center'
    },
    media:{
      width: 250,
      height: 250
    },
    cardBg:{
      backgroundColor: '#323445',
      padding: 50,
      color: 'white',
    },
    heading:{
      color: "#F7BC55",
      marginLeft: 50,
      marginTop: 30,
      marginBottom: 30,
    },
    head: {
      backgroundColor: 'black',
      color: 'white',
    },
    body: {
      fontSize: 14,
    },
    active:{
      background: 'orange',
    }
  }));


  function createData(course, university, year, score, board) {
    return { course, university, year, score, board };
  }

  const rows = [
    createData('BTech CSE', 'KITs College of Engineering', 2021, 8.33, 'Autonomus'),
    createData('Class 12', 'Shahu Dayanand Jr College', 2017, 81.08, 'Maharashtra State Board'),
    createData('Class 10', 'Shree V.J. Deshmukh Highschool', 2015, 93.80, 'Maharashtra State Board'),
  ];

  const extra = [
    "Worked as Freelance Graphic Designer, animator and ui/ux designer for 3 year in multiple organizations with complete customer satisfaction.",
"Photos published in college magazine.",
"Successfully Completed the certification course at NPTEL on the topic “The joy of Computing using python”.",
"Attended 2 Days workshop on “Machine learning and Artificial Intelligence using Python” organized by College of Engineering in 2017.",
"Attended 1 Days workshop on Robotics organized by Robotics Club of KITCOEK.",
"Completed 2 Courses namely:\n 1. Front-End Web UI Frameworks and Tools: Bootstrap 4\n 2. Front-End Web Development with React At Cousera under the course titled as “Full Stack Web Development”.",
"Attended 1 Day workshop on Video Editing in Adobe After Effects and Adobe Premier pro and VFX."
  ]
function Main() {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

    return (
        <div className={classes.root}>
        
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <CssBaseline />
            <AppBar  className={classes.appBar}>
              <Toolbar position="static" style = {{backgroundColor: '#000000'}}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <NavLink/>
            </Drawer>
          </Hidden>
         
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                <NavLink/>
              </Drawer>
            </Hidden>
          
        </nav>
        <main className={classes.content}>
          <div className = {classes.toolbar} id="home"/>
            <Card className={classes.cardBg} variant="outlined">
              <Grid container spacing={1} justify="center" alignItems="center">
                <Grid item xs={12} sm={12} md={4} justify="center" alignItems="center" >
                  <CardMedia className={classes.media} image="/img/profile.png">
                  </CardMedia>
                </Grid>
                <Grid item xs={12} sm={12} md={4} justify="center" alignItems="center">
                  <Typography variant="h4" gutterBottom>Aditya Jadhav</Typography>
                  <Typography mt={5} gutterBottom>7057789800</Typography>
                  <Typography mt={5} gutterBottom>18adityajadhav@gmail.com</Typography>
                </Grid >
                <Grid item xs={12}>
                 
                  <Typography style={{marginTop: 10}}>
                  A Final Year Computer Science Engineering Student who is keenly interested in Front end Development, 
                  Invovative mind wants to make a revolution in the fields of UI/UX.
                  </Typography>
                </Grid>
              </Grid>
            </Card>

            <Typography id="academics" className={classes.heading} style={{fontWeight: "bold" }} variant="h4">Academics</Typography>
            <Card className={classes.cardBg}>
              <Grid container>
                <Grid item xs={12}>
              <TableContainer>
                <Table>
                  <TableHead >
                    <TableRow >
                      <TableCell align="center" style={{color:'#F7BC55'}} className={classes.head}>Course</TableCell>
                      <TableCell align="center" style={{color:'#F7BC55'}} className={classes.head}>University</TableCell>
                      <TableCell align="center" style={{color:'#F7BC55'}} className={classes.head}>Year</TableCell>
                      <TableCell align="center" style={{color:'#F7BC55'}} className={classes.head}>Score</TableCell>
                      <TableCell align="center" style={{color:'#F7BC55'}} className={classes.head}>Board</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {
                    rows.map((row)=>(
                      <TableRow >
                        <TableCell align="center" style={{color:'white'}}>{row.course}</TableCell>
                        <TableCell align="center" style={{color:'white'}}>{row.university}</TableCell>
                        <TableCell align="center" style={{color:'white'}}>{row.year}</TableCell>
                        <TableCell align="center" style={{color:'white'}}>{row.score}</TableCell>
                        <TableCell align="center" style={{color:'white'}}>{row.board}</TableCell>
                    </TableRow>
                    ))
                  }
                  </TableBody>
                </Table>
              </TableContainer>
              </Grid>
              </Grid>
            </Card>

            <Typography id="Experience" className={classes.heading} style={{fontWeight: "bold" }} variant="h4">Experience</Typography>
            <Card className={classes.cardBg} >
                  <Grid container spacing={2} justify="center" alignItems="center">
                      {Experience.map((experience) =>(
                        <Grid item xs={12} md={6}>
                        <Card style={{background:"#F7BC55"}}>
                          <CardContent>
                      <Typography variant='h6' gutterBottom >Title: {experience.title}</Typography>
                      <Typography paragraph>{experience.description}</Typography>
                            
                          </CardContent>
                        </Card>
                        </Grid>
                      ))}
                    
                  </Grid>
            </Card>
            
            <Typography id="extra" className={classes.heading} style={{fontWeight: "bold" }} variant="h4">Extra Curricular Activities</Typography>
            <Grid container>
              <Grid item xs={12} md={12}>
                <Card className={classes.cardBg} >
                  <List>
                  {extra.map((text, index) => (
                   
                    <ListItem  key={index} activeClassName="Mui-selected">
                       <ListItemIcon><PlayArrowIcon style={{fill:'#F7BC55'}}></PlayArrowIcon></ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                  </List>
              </Card>
              </Grid>
            </Grid>

            <Typography id="Projects" className={classes.heading} style={{fontWeight: "bold" }} variant="h4">Projects</Typography>
            <Card className={classes.cardBg} >
                  <Grid container spacing={2} justify="center" alignItems="center">
                    
                      {Projects.map((project) =>(
                        <Grid item xs={12} md={6}>
                        <Card >
                          <CardContent>
                      <Typography variant='h6' gutterBottom>Title: {project.title}</Typography>
                      <Typography paragraph>{project.description}</Typography>
                            <CardActions>
                               <Button style={{background:'#F7BC55'}} href={project.link} target ="_blank" capta ><Typography style={{textTransform: 'capitalize'}}>Learn More</Typography></Button>
                             </CardActions>
                          </CardContent>
                        </Card>
                        </Grid>
                      ))}
                    
                  </Grid>
            </Card>

            <Typography id="skills" className={classes.heading} style={{fontWeight: "bold" }} variant="h4">Skills</Typography>
            <Card className={classes.cardBg} >
                  <Grid container spacing={5} justify="center" alignItems="center">
                    
                      {skills.map((skl) =>(
                        <Grid item xs={6} sm={4} md={3} gutterBottom >
                        <Card  >
                          <CardContent align='center'>
                         
                    <img style={{height:'100px'}} src={skl.icon} alt=""/>
                  
                      <Typography variant="h6" style={{fontWeight: "bold" }}>{skl.name}</Typography>
                            
                          </CardContent>
                        </Card>
                        </Grid>
                      ))}
                    
                  </Grid>
            </Card>

            <Typography id="contact" className={classes.heading} style={{fontWeight: "bold" }} variant="h4">Contact</Typography>
            <Card className={classes.cardBg} >
                  <Grid container spacing={10} justify="center" alignItems="center">
                    
                      {contacts.map((cnt) =>(
                        <Grid item xs={6} sm={4} md={3} gutterBottom >
                        <Card  >
                          <CardContent align='center'>
                         
                          <IconButton href={cnt.link} target ="_blank">

                          <img style={{height:'50px'}} src={cnt.icon} alt=""/>
                          
                          </IconButton>
                            
                          </CardContent>
                        </Card>
                        </Grid>
                      ))}
                    
                  </Grid>
            </Card>

         
          
          <Typography className={classes.heading} variant="h4"></Typography>
          <Card style={{background:"#242635"}}>
            <Typography style={{color:"white"}}> © This site is developed by Vageshwar Yadav and Aditya Jadhav.</Typography>
          </Card>
        </main>
      </div>
    );
  }

  Main.propTypes = {
    window: PropTypes.func,
  };

export default Main
