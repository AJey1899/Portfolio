import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText,
  TableContainer,Table,TableHead,TableRow,TableCell,TableBody, CardContent, CardActions,Button
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
    createData('BTech CSE', 'KITs College of Engineering', 2021, 9.44, 'Autonomus'),
    createData('Class 12', 'Vivekanad College Kolhapur', 2017, 81.08, 'Maharashtra State Board'),
    createData('Class 10', 'Oriental English Academy', 2015, 90.60, 'Maharashtra State Board'),
  ];

  const achievements = [
    "Shortlisted for the final round of InfyTQ-2020.",
    "Successfully organized and managed Ebulieanza 2019 a Technical Event as technical cohead of the organizing committee under CSI at KITs College of Engineering.",
    "Successfully organized a Coding Event as a Logistic member of ACSES Committee under Pioneer 2018",
    "Secured Highest CGPA at my branch since 2nd Academic Year of my Engineering",
    "Secured a SGPA of 10 in 5th Semester of my Engineering."
  ]

  const extra = [
    "Delivered a 45 minutes Online Session on “How to Implement Blockchain using Python” under Workshop organized by CSI Committee at KIT COEK.",
"Successfully Completed the certification course at NPTEL on the topic “The joy of Computing using python”.",
"Attended 2 Days workshop on Android Development organized by IIT Bombay titled as “Google Android Developers” in Dec 2018.",
"Attended 2 Days workshop on “Machine learning and Artificial Intelligence using Python” organized by College of Engineering in 2017.",
"Attended 1 Days workshop on Robotics organized by Robotics Club of KITCOEK.",
"Completed 2 Courses namely:\n 1. Front-End Web UI Frameworks and Tools: Bootstrap 4\n 2. Front-End Web Development with React At Cousera under the course titled as “Full Stack Web Development”.",
"Completed certification course title “Algorithmic Toolbox” at Coursera"
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
                  <CardMedia className={classes.media} image="/img/profile2.png">
                  </CardMedia>
                </Grid>
                <Grid item xs={12} sm={12} md={4} justify="center" alignItems="center">
                  <Typography variant="h4" gutterBottom>Aditya Jadhav</Typography>
                  <Typography mt={5} gutterBottom>8237342691</Typography>
                  <Typography mt={5} gutterBottom>18adityajadhav@gmail.com</Typography>
                </Grid >
                <Grid item xs={12}>
                 
                  <Typography style={{marginTop: 10},{fontStyle: 'italic'}}>
                  A Final Year Computer Science Engineering Student who is keenly interested in Front end Development, 
                  Invovative mind wants to make a revolution in the fields of UI/UX.
                  </Typography>
                </Grid>
              </Grid>
            </Card>

            <Typography id="academics" className={classes.heading} variant="h4">Academics</Typography>
            <Card className={classes.cardBg}>
              <Grid container>
                <Grid item xs={12}>
              <TableContainer>
                <Table>
                  <TableHead >
                    <TableRow >
                      <TableCell align="center" className={classes.head}>Course</TableCell>
                      <TableCell align="center" className={classes.head}>University</TableCell>
                      <TableCell align="center" className={classes.head}>Year</TableCell>
                      <TableCell align="center" className={classes.head}>Score</TableCell>
                      <TableCell align="center" className={classes.head}>Board</TableCell>
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

            <Typography id="achievements" className={classes.heading} variant="h4">Achievements</Typography>
            <Grid container>
              <Grid item xs={12} md={12}>
                <Card className={classes.cardBg} >
                  <List>
                  {achievements.map((text, index) => (
                   
                    <ListItem  key={index} activeClassName="Mui-selected">
                       <ListItemIcon><PlayArrowIcon style={{fill:'#F7BC55'}}></PlayArrowIcon></ListItemIcon>
                       <ListItemText primary={text} />
                    </ListItem>
                  ))}
                  </List>
              </Card>
              </Grid>

            </Grid>
            <Typography id="extra" className={classes.heading} variant="h4">Extra Curicular Activities</Typography>
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
            <Typography id="Projects" className={classes.heading} variant="h4">Projects</Typography>
            <Card className={classes.cardBg} >
                  <Grid container spacing={2} justify="center" alignItems="center">
                    
                      {Projects.map((project) =>(
                        <Grid item xs={12} md={6}>
                        <Card>
                          <CardContent>
                      <Typography variant='h6' gutterBottom>Title: {project.title}</Typography>
                      <Typography paragraph>{project.description}</Typography>
                            <CardActions>
                               <Button>Learn More</Button>
                             </CardActions>
                          </CardContent>
                        </Card>
                        </Grid>
                      ))}
                    
                  </Grid>
            </Card>
          
          <Typography id="skills" className={classes.heading} variant="h4">Skills</Typography>
          <Card className={classes.cardBg}>
            <Grid container>
              {
                skills.map((name) => (
                  <Grid item xs={6} sm={4} md={3} gutterBottom>
                    <img src={name} alt=""/>
                  </Grid>
                ))
              }
             
            </Grid>
          </Card>
          <Typography id="contact" className={classes.heading} variant="h4">Contact</Typography>
          <Card className={classes.cardBg}>
            <Grid container>
              {[1,2,3,4].map((i) =>(
                <Grid item xs={6} sm={4} md={3}>
                  Icon {i}
                </Grid>
              ))}
            </Grid>
          </Card>
        </main>
      </div>
    );
  }

  Main.propTypes = {
    window: PropTypes.func,
  };

export default Main
