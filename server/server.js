const express = require('express');
const cors = require('cors'); // Import the cors middleware

const app = express();
app.use(cors());
app.use(express.json())

const issues = [{
        'id': 1,
        'title': 'Fix the issue with dashboard',
        'description': "Dashboard is facing the issue that analytics widget are not loading on runtime"
    },
    {    
        'id': 2,
        'title': 'User authentication issue',
        'description': "Token of a signed in user don't expire even after a day"
    }
]

app.get('/list', (req, res) => {    
    return res.json(issues);
})

app.post('/create', (req, res) => {    
    const id = issues.length + 1;
    const fields = {
        id:id,
        title:req.body.title,
        description:req.body.description,
    };
    issues.push(fields);
    console.log(issues);
    return res.json(issues);
})

app.get('/read/:id', (req, res) => {   
    const id = req.params.id;
    const issue = issues.find(issue => issue.id == id)
    return res.json(issue);
})

app.put('/update/:id', (req, res) => {   
    const id = req.params.id;
    const issueIndex = issues.findIndex(issue => issue.id == id);
    issues[issueIndex].title = req.body.title;
    issues[issueIndex].description = req.body.description;
    console.log(issues);
    return res.json(issues);
})

app.delete('/delete/:id', (req, res) => {   
    const id = req.params.id;
    const issueIndex = issues.findIndex(issue => issue.id == id);
    if (issueIndex !== -1) {
        issues.splice(issueIndex, 1); // Remove 1 item at issueIndex
        console.log(issues);
        return res.json(issues);
    } else {
        return res.status(404).json({ error: 'Issue not found' });
    }
})


app.listen(8080, () =>{
    console.log("Listen");
})