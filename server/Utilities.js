const fs = require('fs')

const  addToTasks =   (username,taskname,labels,dueDate,cb)=>{
    fs.readFile('tasks.json','utf-8', (err,data)=>{
        const dataObject = JSON.parse(data);
        let userTasks = dataObject[username];
        const task = {
            username,taskname,labels,dueDate
        };
        if(userTasks === undefined){
            userTasks = [];
            userTasks.push(task);
            dataObject[username] = userTasks;  
        }
        else{
            userTasks.push(task);
        }
        fs.writeFile('tasks.json',JSON.stringify(dataObject),(err)=>{
            console.log("write completed");
            cb('1');
        })
    })
}


module.exports = {
    addToTasks
}