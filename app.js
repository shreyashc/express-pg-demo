const express = require('express')

const app =express()

app.use(express.json())

const todosRoute = require('./routes/todos');
const todoItemRoute = require('./routes/todoItems');
app.use('/todos',todosRoute);
app.use('/todos/',todoItemRoute);



app.listen(8000,console.log("Server running on p8000"));
