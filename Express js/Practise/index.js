import express from "express"
const app = express()
const port = 3000

app.use(express.json())
const users = []

app.get('/', (req, res) => {
    res.send('Hello world! ')
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
app.delete("/remove", (req, res) => {
    const { id } = req.body;
    const index = users.findIndex((item) => item.id === +id); // Convert id to number if necessary

    // Check if the user with the given id exists (index !== -1)
    if (id === -1) {
        return res.status(404).send({ message: "User not found. Cannot delete." });
    }

    // Remove the user from the array
    users.splice(index, 1);

    // Return success message with updated users list
    res.send({
        message: "User deleted successfully",
        data: users,
    });
});



app.put('/edit', (req, res) => {
    const { id, name } = req.body;
    const index = users.findIndex((item) => item.id === +id)

    users.splice(index, 1, name, id)
    res.status(200).json({
        "message": 'edit',
        data: users
    })
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})