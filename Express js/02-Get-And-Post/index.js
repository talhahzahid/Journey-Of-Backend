import express from 'express'
const app = express()
const port = 3000

app.use(express.json())

const users = [
  {
    id: 1,
    name: "Talha",
  }
]

app.get('/', (req, res) => {
  res.send('Hello World herer!')
})
app.get('/users', (req, res) => {
  res.send(users)
})
app.post('/user', (req, res) => {
  const { name } = req.body;
  users.push({
    id: Date.now(),
    name:name
  })
  res.send({
    messaga: 'User Addded Successfully',
    data: users,
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})