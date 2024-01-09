import { Delete } from '@mui/icons-material'
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

const ToDoDetail = ( {detail} ) => {
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
          <Checkbox edge="start" />
        </ListItemIcon>
        <ListItemText primary={detail.name} />
      </ListItemButton>
    </ListItem>
  )
}

export default ToDoDetail