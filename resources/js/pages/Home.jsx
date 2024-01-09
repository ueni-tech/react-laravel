import { Grid } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from '../components/Todo';
import { useCurrentToDoList, useGetToDoList } from '../hooks/ToDoList';

function Home() {
  const { isLoading } = useGetToDoList();
  const todoList = useCurrentToDoList();
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <Grid container spacing={2}>
      {todoList.map((toDo) => {
        return (
          <Grid item key={toDo.id} xs={3}>
            <ToDo todo={toDo} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Home;
