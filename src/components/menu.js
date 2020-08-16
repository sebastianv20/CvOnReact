import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Avatar from '../assets/img/about.jpg'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  linkStyle:{
    textDecoration: 'none', 
    color: 'black' 
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  divider:{
    backgroundColor:"rgba(94, 90, 90,0.8)",
  },

  appBar: {
    background: "#bdc3c7",  /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #2c3e50, #bdc3c7)",  /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #2c3e50, #bdc3c7)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    zIndex:"99999 !important",
    

    //backgroundColor:"rgba(200, 222, 255,0.8)",
    [theme.breakpoints.up('sm')]: {
      width: `100%`,
      marginLeft: drawerWidth,
      
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    background: "#8e9eab",  /* fallback for old browsers */
    background: "-webkit-linear-gradient(to bottom, #eef2f3, #8e9eab)",  /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to bottom, #eef2f3, #8e9eab)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


function Menu(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />

      <Grid
        container
        spacing={0}
        align="center"
        justify="center"
        style={{height:"200px",marginTop:"25px"}}
      >

        <img src={Avatar} className='avatar'></img>

        <strong>Sebastianv20@gmail.com</strong>
      </Grid>

      
      <Divider className={classes.divider}/>
      <List>
        <Link className={classes.linkStyle} to={'/#section-about'}>
          <ListItem button>
            <ListItemText primary={"Sobre Mi"} />
          </ListItem>
        </Link>
      
          <Link className={classes.linkStyle} to={'/#section-skills'}>
          <ListItem button>
            <ListItemText primary={"Conocimiento"} />
          </ListItem>
          </Link>

          <Link className={classes.linkStyle} to={'/#section-timeline'}>
          <ListItem button>
            <ListItemText primary={"Trabajo y Educacion"} />
          </ListItem>
          </Link>

          <Link className={classes.linkStyle} to={'/#section-projects'}>
          <ListItem button>
            <ListItemText primary={"Desarrollos"} />
          </ListItem>
          </Link>
     
      </List>
      <Divider className={classes.divider}/>
      <List>
      <ListItemLink href="https://www.linkedin.com/in/sebastianv20">
          <ListItem button>
            <ListItemIcon><InboxIcon /> </ListItemIcon>
            <ListItemText primary={"Linkedin"} />
          </ListItem>
         </ListItemLink>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Sebastian Argañaras
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
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
            {drawer}
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
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default Menu;