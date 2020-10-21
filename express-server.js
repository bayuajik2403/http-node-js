const express = require('express')
const app = express()
const port = process.env.PORT || 8081

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/hello', (req, res) => res.send('<h1> Hello World! </h1>'))
app.get('/api', (req, res) => res.json({name: 'Bayu Aji Kurniawan'}))
app.listen(port, () => console.log(`Example app listening on port 8081!`))