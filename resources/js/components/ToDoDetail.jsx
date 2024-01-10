import { Delete } from '@mui/icons-material'
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from '@mui/material'
import { useDeleteToDoDetailMutateTask, useUpdateToDoDetailMutateTask } from '../hooks/ToDoDetail';
import { useState } from 'react';

const ToDoDetail = ({ detail }) => {
  const [timer, setTimer] = useState(null);

  let toDoDetail = {
    id: detail.id,
    name: detail.name,
    completed_flag: detail.completed_flag,
    to_do_id: detail.to_do_id
  };
  const { updateToDoDetailMutation } = useUpdateToDoDetailMutateTask();

  /* 名称更新イベント */
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

  /* 完了フラグ更新イベント */
  const eventCheckToDoDetail = (e) => {
    let data = {
      ...toDoDetail,
      completed_flag: e.target.checked,
    };
    updateToDoDetailMutation.mutate(data);
  }

  /* 削除イベント */
  const { deleteToDoDetailMutation } = useDeleteToDoDetailMutateTask();
  const eventDeleteToDoDetail = () => {
    deleteToDoDetailMutation.mutate(toDoDetail);
  }

  return (
    <ListItem
      key={detail.id}
      secondaryAction={
        <IconButton onClick={eventDeleteToDoDetail} edge="end" aria-label="delete">
          <Delete />
        </IconButton>
      }
      disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Checkbox edge="start"
            checked={detail.completed_flag}
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