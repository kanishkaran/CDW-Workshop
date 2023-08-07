const express = require("express");
const route = express.Router();

const taskController = require('../controller/taskController');

route.get("/tasks", taskController.getTasks);
route.post('/task', taskController.postTasks);
route.put('/tasks/:id', taskController.updateTasks);
route.delete("/tasks/:id", taskController.deleteTasks)

module.exports = {
    route
}