import { Grid } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from '../components/Todo';

function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <ToDo />
      </Grid>
    </Grid>
  );
}

export default Home;
