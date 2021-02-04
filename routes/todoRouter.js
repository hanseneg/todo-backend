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
    }
]


//get all
todoRouter.get('/', (req, res) => {
    res.send(todos)
})

//get one by unique id

//post a new todo by id

//put(update) an existing todo

//delete one by id



module.exports = todoRouter