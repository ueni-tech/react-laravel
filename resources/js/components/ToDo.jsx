import { Card, CardActions, CardContent, CardHeader, IconButton, List, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDeleteToDoMutateTask, useUpdateToDoMutateTask } from '../hooks/ToDo'
import ToDoDetail from './ToDoDetail'
import { Delete } from '@mui/icons-material'

const ToDo = ({ todo }) => {
  const [timer, setTimer] = useState(null);

  let toDo = {
    id: todo.id,
    title: todo.title,
  };

  const { updateToDoMutation } = useUpdateToDoMutateTask();

  /* 名称更新イベント */
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

  /* 削除イベント */
  const { deleteToDoMutation } = useDeleteToDoMutateTask();
  const eventDeleteToDo = () => {
    deleteToDoMutation.mutate(toDo);
  }

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
      <CardActions>
        <IconButton onClick={eventDeleteToDo} edge="end" aria-label="add">
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ToDo