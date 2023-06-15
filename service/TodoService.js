let Todos = require('../model/toDo')
async function getToDoById(id)
{
    let todo = await Todos.findById(id);
    console.log('get todo by id',todo);
    return todo;
}
async function getAllToDos() {
    return Todos.find()
  }
async function saveTodo(todo) {
    let todoModel = new Todos(todo);
    return todoModel.save();
  }

async function updateTodo(todoId,todo)
{
  let updateTodo = Todos.findByIdAndUpdate(todoId,todo,{new : true})
  return updateTodo;  
}
async function deleteTodo(todoId,todo)
{
  let deleteTodo = Todos.findByIdAndDelete(todoId)
  return deleteTodo;  
}
async function getAllcompleteToDos(){
  return Todos.find({
    completed : true
  })
}
module.exports = {
    getToDoById,
    getAllToDos,
    getAllcompleteToDos,
    saveTodo,
    updateTodo,
    deleteTodo,
}