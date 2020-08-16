import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import { makeStyles} from '@material-ui/core/styles';

import ScrollHandler from "./components/ScrollHandler"; 
import Menu from './components/menu'
import About from './components/about';
import Timeline from './components/timeline';
import Skills from './components/skills';
import DividerTitle from './components/divider';
import Projects from './components/projects';

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));




function App() {

  const classes = useStyles();
  return ( <div className={classes.root}>

<BrowserRouter>
<ScrollHandler />
<Menu></Menu>
    <main className={classes.content}>
    <div className={classes.toolbar} />

    <Paper id="#section-about" elevation={3}>
    <DividerTitle title="SOBRE MI" subtitle="¿QUIEN SOY?"></DividerTitle>
    <About></About>
    </Paper>

    <Paper id="#section-skills" elevation={3}>
    <DividerTitle title="¿A QUE ME DEDICO?" subtitle="ALGUNOS CONOCIMIENTOS DESTACADOS"></DividerTitle>
    <Skills></Skills>
    </Paper>

    <Paper id="#section-timeline" elevation={3}>
    <DividerTitle title="TRABAJO Y EDUCACION" subtitle="MI HISTORIA DE VIDA"></DividerTitle>
    <Timeline></Timeline>
    </Paper>

    <Paper id="#section-projects" elevation={3}>
    <DividerTitle title="DESARROLLOS" subtitle="MIS ULTIMOS PROYECTOS"></DividerTitle>
    <Projects></Projects>
    </Paper>
  </main>
</BrowserRouter>

  </div>);
}

export default App;
