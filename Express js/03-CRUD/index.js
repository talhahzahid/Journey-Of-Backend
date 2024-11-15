import express from "express"
import cors from "cors"
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
const users = [
    {
        id: 1,
        title: "talha"
    },
    {
        id: 2,
        title: "arreb"
    }
]

app.get('/', (req, res) => {
    res.send('Hello Todo App!')
})
app.get('/users', (req, res) => {
    res.send(users)
})
app.post('/user', (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.send('Please Enter Title')
    }
    users.push({
        title: title,
        id: Date.now()
    })
    res.status(200).json({
        "message": "User Added Successfully",
        data: users,
    })
})
app.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    const index = users.findIndex((item) => item.id === +id)
    if (index === -1) {
        res.status(200).json({
            message: 'Enter correct id'
        });
        return
    }
    users.splice(index, 1)
    res.status(200).json({
        "message": "User Deleted Successfully",
        data: users
    })
})
app.put('/user/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const index = users.findIndex((item) => item.id === +id)
    if (index === -1) {
        res.status(404).json({
            message: "Enter Correct Id To Update The Title"
        })
        return
    }
    users[index].title = title
    // users.splice(index, 1, title)
    res.status(200).json({
        "messaga": "User Upadeted Successfully",  // Incorrect 'messaga' and misspelled 'Upadeted'
        "data": users
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})