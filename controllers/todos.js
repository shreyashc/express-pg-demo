const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;
module.exports ={
	create: (req,res,next)=>{
		return Todo.create({
			title:req.body.title,
		})
		.then(todo=>res.status(201).send(todo))
		.catch(err=>res.status(400).send(err))
	},
	list:(req,res,next)=>{
		return Todo
			    .findAll({
			      include: [{
			        model: TodoItem,
			        as: 'todoItems',
			      }],
			    })
			    .then(todos => res.status(200).send(todos))
			    .catch(error => res.status(400).send(error));
	},
}