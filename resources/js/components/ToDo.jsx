import { Card, CardContent, CardHeader, List } from '@mui/material'
import React from 'react'
import ToDoDetail from './ToDoDetail'

const ToDo = () => {
  return (
    <Card>
      <CardHeader title="Test ToDo" />
      <CardContent>
        <List>
          {[0, 1, 2, 3].map(value => {
            return <ToDoDetail id={value} />
          })}
        </List>
      </CardContent>
    </Card>
  )
}

export default ToDo