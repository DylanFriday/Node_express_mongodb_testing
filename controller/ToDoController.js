var todoService = require('./../service/TodoService')

// create
async function createTodo(req, res, next) {
    console.log('todo routers post', req.body);
    try{
        const todo = await todoService.saveTodo(req.body);
        if(!todo) throw Error('Cannot save todo')
        await res.status(201).json(todo)
    }
    catch(err){
        console.log(err);
        await res.status(400).json({message : err})
    }  
}
// read
async function getToDoById(req,res,next){
    console.log('ToDo id',req.params['id']);
    console.log('Request time and gete todoByid',req.requestTime);
    let todoId = req.params['id']
    try {
        let todo =await todoService.getToDoById(todoId)
        if(!todo){
            res.status(400).json({
                error : 'todo not found'
            })
        }else{
            res.json({todo})
        }   
    }
    catch(e){
        res.status(400).json({
            error : 'todo not found'
        })
    }
};
// update
async function updateTodo(req, res, next) {
    try{
        let todoId = req.params['id']
        console.log('Id',todoId,'todo',req.body);
        const todo = await todoService.updateTodo(todoId,req.body);
        if(!todo) throw Error('Cannot update todo')
        await res.status(200).json(todo)
    }
    catch(err){
        console.log(err);
        await res.status(400).json({message : err})
    } 
}
// delete
async function deleteTodo(req, res, next) {
    try{
        let todoId = req.params['id']
        console.log('Id',todoId,'todo',req.body);
        const todo = await todoService.deleteTodo(todoId);
        if(!todo) throw Error('Cannot update todo')
        await res.status(200).json(todo)
    }
    catch(err){
        console.log(err);
        await res.status(400).json({message : err})
    }   
}

async function getAllToDos(req,res,next){
    console.log('ToDo Routers');
    let todos =await todoService.getAllToDos()
    console.log();
    res.json(todos)
}
async function getAllcompleteToDos(req,res,next){
    console.log('ToDo Routers');
    let todos =await todoService.getAllcompleteToDos()
    console.log();
    res.json(todos)
}

function todoWildCard(req,res,next){
    console.log('ToDo ab+cd Routers');
    res.json({
        url : req.url
    })
}

function multipleRoute1(req,res,next){
    console.log('multiple first route');
    next();
}

function multipleRoute2(req,res,next){
    console.log('multiple second route');
    res.json({
        data : 'Data from another'
    })
    next();
}

function downloadFile(req, res, next) {
    console.log('todo Download', req.body);
    res.download('./public/images/download.txt')
}

function responseEnd(req, res, next) {
    res.status(401).end();
}

function responseRedirect(req, res, next) {
    console.log('redirect');
    res.redirect('/');
 }

module.exports = {
    getToDoById,
    getAllToDos,
    getAllcompleteToDos,
    todoWildCard,
    multipleRoute1,
    multipleRoute2,
    createTodo,
    downloadFile,
    responseEnd,
    responseRedirect,
    updateTodo,
    deleteTodo,
}