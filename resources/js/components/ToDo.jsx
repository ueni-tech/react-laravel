import { Card, CardContent, CardHeader, List } from '@mui/material'
import React from 'react'
import ToDoDetail from './ToDoDetail'

const ToDo = ({todo}) => {
  return (
    <Card>
      <CardHeader title={todo.title} />
      <CardContent>
        <List>
          {todo.to_do_details.map( detail => {
            return <ToDoDetail detail={detail} key={detail.id} />
          })}
        </List>
      </CardContent>
    </Card>
  )
}

export default ToDo