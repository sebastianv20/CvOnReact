import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import '../assets/css/skills.css'

import html5 from '../assets/logos/html5.png'
import php from '../assets/logos/php.png'
import db from '../assets/logos/db.png'
import reactLogo from '../assets/logos/react.png'
import node from '../assets/logos/node.png'
import angular from '../assets/logos/angular.png'
import redes from '../assets/logos/redes.png'
import ionic from '../assets/logos/ionic.png'
import soporte from '../assets/logos/soporte.png'

const useStyles = makeStyles((theme) => ({

  cardsImg: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize:"80px"
  },
  html5: {
    backgroundImage: `url(${html5})`,
  },
  php: {
    backgroundImage: `url(${php})`,
  },
  db: {
    backgroundImage: `url(${db})`,
  },
  reactLogo: {
    backgroundImage: `url(${reactLogo})`,
  },
  node: {
    backgroundImage: `url(${node})`,
  },
  angular: {
    backgroundImage: `url(${angular})`,
  },
  redes: {
    backgroundImage: `url(${redes})`,
  },
  ionic: {
    backgroundImage: `url(${ionic})`,
  },
  soporte: {
    backgroundImage: `url(${soporte})`,
  }
}));



export default function Skills() {

  const classes = useStyles();

  return (

    <Grid container spacing={3}>
    <Grid item xs={12} md={4} >
      <div className={"card "+classes.html5+" "+classes.cardsImg}>
        <h3>DESARROLLADOR WEB</h3>
        <p>Construccion de sitios y sistemas tipo web/intranet</p>
      </div>
   </Grid>
      <Grid item xs={12} md={4}>
      <div className={"card "+classes.php+" "+classes.cardsImg}>
        <h3>PHP Y LARAVEL</h3>
        <p>Mas de 5 años de desarrollos en Laravel.</p>
      </div>
    </Grid>
    <Grid item xs={12} md={4}>
    <div className={"card "+classes.db+" "+classes.cardsImg}>
        <h3>BASES DE DATOS</h3>
        <p>Desarrollo e implementacion en MySql y SqlServer</p>
      </div>
      </Grid>

      <Grid item xs={12} md={4}>
      <div className={"card "+classes.reactLogo+" "+classes.cardsImg}>
        <h3>ReactJS</h3>
        <p>2 años desarrollando en ReactJS con PHP de backend</p>
      </div>
      </Grid>
      <Grid item xs={12} md={4}>
      <div className={"card "+classes.node+" "+classes.cardsImg}>
        <h3>NodeJS</h3>
        <p>1 años de experiencia usado para desarrollar API</p>
      </div>
      </Grid>
      <Grid item xs={12} md={4}>
      <div className={"card "+classes.angular+" "+classes.cardsImg}>
        <h3>Angular</h3>
        <p>1 año de experiencia desarrollando sobre angular</p>
      </div>
      </Grid>
      <Grid item xs={12} md={4}>
      <div className={"card "+classes.ionic+" "+classes.cardsImg}>
        <h3>MOBILE</h3>
        <p>Creacion de aplicaciones con IONIC 4/5</p>
      </div>
      </Grid>
      <Grid item xs={12} md={4}>
      <div className={"card "+classes.redes+" "+classes.cardsImg}>
        <h3>REDES</h3>
        <p>Configuracion y desarrollos sobre Mikrotik</p>
      </div>
      </Grid>
      <Grid item xs={12} md={4}>
      <div className={"card "+classes.soporte+" "+classes.cardsImg}>
        <h3>SOPORTE TECNICO</h3>
        <p>Experto en Tecnologia, Hardware y Software</p>
      </div>
      </Grid>

</Grid>
);







}