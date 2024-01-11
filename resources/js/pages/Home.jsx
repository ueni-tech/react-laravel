import { Fab, Grid } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from '../components/Todo';
import { useCurrentToDoList, useGetToDoList } from '../hooks/ToDoList';
import { Add } from '@mui/icons-material';
import { useStoreToDoMutateTask } from '../hooks/ToDo';

const fabStyle = {
  position: 'fixed',
  bottom: 16,
  right: 16,
};

function Home() {
  /* ToDo追加イベント */
  const { storeToDoMutation } = useStoreToDoMutateTask();
  const eventStoreToDo = () => {
    storeToDoMutation.mutate();
  };

  const { isLoading } = useGetToDoList();
  const todoList = useCurrentToDoList();
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <Grid container spacing={2}>
        {todoList.map((toDo) => {
          return (
            <Grid item key={toDo.id} xs={3}>
              <ToDo todo={toDo} />
            </Grid>
          );
        })}
      </Grid>
      <Fab
        color="primary"
        aria-label="add"
        sx={fabStyle}
        onClick={eventStoreToDo} >
          <Add />
      </Fab>
    </div>
  );
}

export default Home;
