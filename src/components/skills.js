import React from 'react';
import Grid from '@material-ui/core/Grid';

import '../assets/css/skills.css';


export default function Skills() {

  return (

    <Grid container spacing={3}>
    <Grid item xs={12} md={4} >
      <div className="card card-1">
        <h3>DESARROLLADOR WEB</h3>
        <p>Construccion de sitios y sistemas tipo web/intranet</p>
      </div>
   </Grid>
      <Grid item xs={12} md={4}>
      <div className="card card-2">
        <h3>PHP Y LARAVEL</h3>
        <p>Mas de 5 años de desarrollos en Laravel.</p>
      </div>
    </Grid>
    <Grid item xs={12} md={4}>
      <div className="card card-3">
        <h3>BASES DE DATOS</h3>
        <p>Desarrollo e implementacion en MySql y SqlServer</p>
      </div>
      </Grid>

      <Grid item xs={12} md={4}>
      <div className="card card-4">
        <h3>ReactJS</h3>
        <p>2 años desarrollando en ReactJS con PHP de backend</p>
      </div>
      </Grid>
      <Grid item xs={12} md={4}>
      <div className="card card-5">
        <h3>NodeJS</h3>
        <p>1 años de experiencia usado para desarrollar API</p>
      </div>
      </Grid>
      <Grid item xs={12} md={4}>
      <div className="card card-6">
        <h3>Angular</h3>
        <p>1 año de experiencia desarrollando sobre angular</p>
      </div>
      </Grid>
      <Grid item xs={12} md={4}>
      <div className="card card-7">
        <h3>MOBILE</h3>
        <p>Creacion de aplicaciones con IONIC 4/5</p>
      </div>
      </Grid>
      <Grid item xs={12} md={4}>
      <div className="card card-8">
        <h3>REDES</h3>
        <p>Configuracion y desarrollos sobre Mikrotik</p>
      </div>
      </Grid>
      <Grid item xs={12} md={4}>
      <div className="card card-9">
        <h3>SOPORTE TECNICO</h3>
        <p>Experto en Tecnologia, Hardware y Software</p>
      </div>
      </Grid>

</Grid>
);

}