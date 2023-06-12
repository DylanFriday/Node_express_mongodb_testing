var express = require('express');
const todos = require('../controller/ToDoController')
var router = express.Router();

// get todos list
router.get('/',todos.getAllToDos);
router.get('/:id',todos.getToDoById);
router.get('/ab+cd',todos.todoWildCard);
router.get('/multiple/another',todos.multipleRoute1)
router.get('/multiple/another', todos.multipleRoute2)

router.get('/download/file', todos.downloadFile)
router.get('/response/end', todos.responseEnd)
router.get('/response/redirect', todos.responseRedirect)

router.post('/', todos.createTodo)

       

module.exports = router; 