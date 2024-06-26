const { log } = require('console');
const fs = require('fs')
// TODO below tasks can be promisified and written in a better manner
const  addToTasks =   (username,taskname,labels,dueDate,cb)=>{

    fs.readFile('idtaskMap.json','utf-8',(err,data)=>{
        const idArray = JSON.parse(data);
        const taskId = idArray.length;
        const task = {
            username,taskname,labels,dueDate,taskId
        };
        fs.readFile('tasks.json','utf-8', (err,data)=>{
            const dataObject = JSON.parse(data);
            let userTasks = dataObject[username];
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
            })
        })
        idArray.push(task);
        fs.writeFile('idtaskMap.json',JSON.stringify(idArray),(err)=>{
            console.log('wrtie complete 2');
            cb(taskId);
        })
    })


}


module.exports = {
    addToTasks
}