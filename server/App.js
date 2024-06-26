const express = require('express');
const port = 3000;
const app = express();

const fs = require("fs");
const { addToTasks } = require('./Utilities');

// Middleware to parse JSON bodies
app.use(express.json());

// Sample JSON 
// {
//     "taskname":"complete cohort",
//     "username":"rupinder"
//     "labels":["important","personel"]
//     "dueDate":"25-06-2024"
// }

app.post('/putInList',(req,res)=>{

    // TODO authentication 
    // writing to a file then returning the id of that task.
    const payloadObject = req.body;
    const {taskname,username,labels,dueDate} = payloadObject;

    const callBack = (id)=>{
        console.log(id);
        res.send(`${id}`);
    }

    addToTasks(username,taskname,labels,dueDate,callBack);
})

app.get('/getList',(req,res)=>{
    // return the whole list of tasks defined to a single name.
    res.send('returns whole list of tasks defined to a single name.');
})

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})