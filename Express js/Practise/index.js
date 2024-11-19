import express from "express"
const app = express()
const port = 4000;

app.use(express.json())
const users = []

app.get('/', (req, res) => {
    res.send('Hello world! ')
})
app.get('/users', (req, res) => {
    // res.send('hello users')
    res.send(users)
})
app.post('/users', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({
            "message": "Name is required"
        })
    }
    users.push({
        name: name,
        id: Date.now()
    })
    res.status(200).json({
        "message": "Name entre is succesfully",
        "UserData": users
    })
})

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex((item) => item.id === +id);
    if (index === -1) {
        return res.status(400).json({ "message": "id is not same" })
    }
    users.splice(index, 1)
    res.status(200).json({
        "message": "Name is deleted succesfully "
    })
})
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const index = users.findIndex((item) => item.id === +id)
    if (index === -1) {
        return res.status(404).json({ "Message": "Please enter valid id" })
    }
    if (!name) {
        return res.status(404).json({ "Message": "Name is required " })
    }

    users[index].name = name

    res.status(200).json({
        "Messagae": "Name upadated succesfully",
        "Updated Name": users
    })

})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})