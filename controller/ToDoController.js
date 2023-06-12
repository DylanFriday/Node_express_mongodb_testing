var todoService = require('./../service/TodoService')
function getToDoById(req,res,next){
    console.log('ToDo id',req.params['id']);
    console.log('Request time and gete todoByid',req.requestTime);
    let todoId = req.params['id']

    let todo = todoService.getToDoById(todoId)
    
    res.json({todo})
};
function getAllToDos(req,res,next){
    console.log('ToDo Routers');
    res.json([{
        id :1,
        title :'task1'
    },
    {
        id : 2,
        title : 'task2'
    }
])
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
function createTodo(req, res, next) {
    console.log('todo routers post', req.body);
    res.json({
       ...req.body,
       done : true
    })
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
    todoWildCard,
    multipleRoute1,
    multipleRoute2,
    createTodo,
    downloadFile,
    responseEnd,
    responseRedirect
}