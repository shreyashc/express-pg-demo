const express = require("express");
const router = express.Router();
const todosController = require('../controllers/todos');

console.log(todosController.create)

router.get('/',todosController.list)
router.post('/',todosController.create)

module.exports = router;
