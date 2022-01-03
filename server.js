const express = require('express')
const cors = require('cors')

const tasks = require('./db.json')

const app = express()
app.use(cors())

const PORT = process.env.PORT || 5000

app.listen(PORT)

console.log(`App listening on port ${PORT}`)

app.get('/', (req, res) => {
    console.log('Accessed Root Route')
    res.json(tasks)
})

app.use('*', (req, res) => {
res.status(404).json({error: "Page not found"})
})