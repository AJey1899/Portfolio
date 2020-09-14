import React from 'react';
import { List,ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import FlareIcon from '@material-ui/icons/Flare';
import GradeIcon from '@material-ui/icons/Grade';
import HomeIcon from '@material-ui/icons/Home';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import BuildIcon from '@material-ui/icons/Build';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    active:{
        background: 'orange',
        fill: "black"
    },
}));

function NavLink() {
    const classes = useStyles();
    return (
        <List>
            <ListItem button className={classes.active}>
                <ListItemIcon >
                    <HomeIcon style={{fill: "white"}}/>
                </ListItemIcon>
                <ListItemText primary="Home"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                <ImportContactsIcon style={{fill: "white"}}/>
                </ListItemIcon>
                <ListItemText primary="Academics"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                <FlareIcon style={{fill: "white"}}/>
                </ListItemIcon>
                <ListItemText primary="Acheivements"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                <AllInboxIcon style={{fill: "white"}}/>
                </ListItemIcon>
                <ListItemText primary="Extra-Curicular"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                <BuildIcon style={{fill: "white"}}/>
                </ListItemIcon>
                <ListItemText primary="Projects"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                <GradeIcon style={{fill: "white"}}/>
                </ListItemIcon>
                <ListItemText primary="Skills"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                <PhoneIcon style={{fill: "white"}}/>
                </ListItemIcon>
                <ListItemText primary="Contact"/>
            </ListItem>
        </List>
    )
}
export default NavLink;
