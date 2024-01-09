import { Delete } from '@mui/icons-material'
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

const ToDoDetail = ({ id }) => {
  return (
    <ListItem
      key={id}
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <Delete />
        </IconButton>
      }
      disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Checkbox edge="start" />
        </ListItemIcon>
        <ListItemText primary={"Test ToDoDetail" + id} />
      </ListItemButton>
    </ListItem>
  )
}

export default ToDoDetail