const fs = require('fs');

const filename = "data.json";

const getTasks = (req, res) => {
    let tasksList = [];
    tasksList = JSON.parse(fs.readFileSync(filename));

    res.JSON({
        details : tasksList,
        message: "list of tasks"
    })

    console.log("This is from get method");
    res.send('This is from get method');
}

const postTasks = (req, res) => {
    let tasks = [];
    tasks = JSON.parse(fs.readFileSync(filename));
    tasks.push(req.body)

    fs.writeFile(filename, JSON.stringify(tasks), (err) => {
        console.log(err);
    })

    res.json({
        details: tasks,
        message: "The tasks was uploaded successfully"
    });
}

const updateTasks = ((req, res) => {
    let tasks = [];
    tasks = JSON.parse(fs.readFileSync(filename));
    let temp;
    tasks.map((data, index) => {
        if(data.taskID === req.params.id){
            temp = index;
        }
    })
    tasks[temp] = req.body;
    console.log(tasks);

    fs.writeFileSync(filename, JSON.stringify(tasks), (err) => {
        console.log(err);
    })

    res.json({
        details : tasks,
        message : "The task has been updated successfully"
    })

})


const deleteTasks = ((req, res) => {
    let tasks = [];
    tasks = JSON.parse(fs.readFileSync(filename));
    let temp;
    tasks.map((data, index) => {
        if(data.tasksID === req.params.id) {
            temp = index;
        }
    })
    tasks.splice(temp, 1);

    console.log(tasks); 
    fs.writeFileSync(filename, JSON.stringify(tasks), (err) => {
        console.log(err);
    })
    
    res.json({
        details : tasks,
        message : "the task has been deleted successfully"
    })

})


module.exports = {
    getTasks,
    postTasks,
    updateTasks,
    deleteTasks
}