import express from "express"
const app = express()
const port = 3000

app.use(express.json())
const users = []

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})