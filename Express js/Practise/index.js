import express from "express"
const app = express()
const port = 3000

app.use(express.json())
const users = []

app.get('/', (req, res) => {
    res.send('Hello world!')
})
app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/user', (req, res) => {
    const { name, id } = req.body;
    users.push({
        name,
        id
    })
    res.status(201).json({
        "message": 'add successfully',
        "data": users,
    })
})

app.delete('/remove', (req, res) => {
    const { id } = req.body;
    const index = users.findIndex((item) => item.id === +id)
    if (id === -1) {
        res.status(404).json({
            "message": "sorry"
        })
        return
    }
    users.splice(index, 1)
    res.status(200).json({
        "message": "deleted successfully",
        data: users
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})