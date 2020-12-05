const express = require("express");
const router = express.Router();
const todoItemController = require('../controllers/todoItem');




router.post('/:todoId',todoItemController.create)

module.exports = router;