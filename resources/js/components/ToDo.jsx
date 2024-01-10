import { Card, CardContent, CardHeader, List, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useUpdateToDoMutateTask } from '../hooks/ToDo'
import ToDoDetail from './ToDoDetail'

const ToDo = ({ todo }) => {
  const [timer, setTimer] = useState(null);

  let toDo = {
    id: todo.id,
    title: todo.title,
  };

  const { updateToDoMutation } = useUpdateToDoMutateTask();

  const eventUpdateToDo = (e) => {
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      let data = {
        ...toDo,
        title: e.target.value,
      };
      updateToDoMutation.mutate(data);
    }, 500);
    setTimer(newTimer);
  };

  return (
    <Card>
      <TextField
        variant='standard'
        margin='dense'
        defaultValue={todo.title}
        fullWidth
        onChange={eventUpdateToDo} />
      <CardContent>
        <List>
          {todo.to_do_details.map(detail => {
            return <ToDoDetail detail={detail} key={detail.id} />
          })}
        </List>
      </CardContent>
    </Card>
  )
}

export default ToDo