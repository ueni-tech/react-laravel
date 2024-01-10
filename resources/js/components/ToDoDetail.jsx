import { Delete } from '@mui/icons-material'
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from '@mui/material'
import { useUpdateToDoDetailMutateTask } from '../hooks/ToDoDetail';
import { useState } from 'react';

const ToDoDetail = ({ detail }) => {
  const [timer, setTimer] = useState(null);

  let toDoDetail = {
    id: detail.id,
    name: detail.name,
    completed_flag: detail.completed_flag == 1,
    to_do_id: detail.to_do_id
  };
  const { updateToDoDetailMutation } = useUpdateToDoDetailMutateTask();

  const eventUpdateToDoDetail = (e) => {
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      let data = {
        ...toDoDetail,
        name: e.target.value,
      };
      updateToDoDetailMutation.mutate(data);
    }, 500);
    setTimer(newTimer);
  };

  const eventCheckToDoDetail = (e) => {
    let data = {
      ...toDoDetail,
      completed_flag: e.target.checked,
    };
    updateToDoDetailMutation.mutate(data);
  }

  return (
    <ListItem
      key={detail.id}
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <Delete />
        </IconButton>
      }
      disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Checkbox edge="start"
          defaultChecked = {detail.completed_flag == 1} 
          onChange={eventCheckToDoDetail} />
        </ListItemIcon>
        <TextField
          variant='standard'
          margin='dense'
          defaultValue={detail.name}
          fullWidth
          onChange={eventUpdateToDoDetail} />
      </ListItemButton>
    </ListItem>
  )
}

export default ToDoDetail