const express = require('express')
const cors = require('cors')
const db = require('db.json')

const app = express()
app.use(cors())



app.use('*', (req, res) => {
res.status(404).json({error: "Page not found"})
})