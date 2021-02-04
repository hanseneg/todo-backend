const express = require('express')
const todoRouter = express.Router()
const { v4: uuid }= require('uuid')

const todos = [
    {
        name: "todo 1",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    },{
        name: "todo 2",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    },{
        name: "todo 3",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    }
]


//get all
todoRouter.get('/', (req, res) => {
    res.send(todos)
})

//get one by unique id
todoRouter.get('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
    console.log(`yay we found ${foundTodo}`)
})

//post a new todo by id
todoRouter.post('/', (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send(`Successfully added ${newTodo.name} to the database.`)
})

//put(update) an existing todo with id
todoRouter.put('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const updatedObject = req.body
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], updatedObject)
    res.send(updatedTodo)
})

//delete one by id
todoRouter.delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send('Successfully deleted the todo!')
})


module.exports = todoRouter