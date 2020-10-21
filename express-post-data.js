const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 8081

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/assets', express.static(__dirname + '/public/'))

app.use((req,res,next)=>{
    console.log('MIDDLEWARE')
    next()
})

app.post('/post',(req,res)=>{
    console.log(`its working ${req.body.email} ${req.body.password}`)
})

//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))