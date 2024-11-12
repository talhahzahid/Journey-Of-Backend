import express from "express"
const app = express()
const port = 3000

app.use(express.json())
const users = [{}]

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello About!')
})
app.get('/users', (req, res) => {
    res.send(users)
})
app.post('/user', (req, res) => {
    const name = req.body.name;
    users.push(
        {
            id: Date.now(),
            name: name,
        }
    )

    res.send({
        message: 'save data '
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
