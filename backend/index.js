import express from 'express'

import TaskController from './src/Controllers/TaskController'
import './src/Database/database'

const app = express()
const port = 3333


app.use(express.json())

app.get('/tasks', TaskController.index)
app.post('/tasks', TaskController.create)
app.delete('/tasks/:_id', TaskController.delete)
app.put('/tasks/:_id', TaskController.update)
app.patch('/tasks/:_id', TaskController.updateStatus)

app.listen(port, ()=>{
  console.log(`Backend rodando na porta ${port}`)
})