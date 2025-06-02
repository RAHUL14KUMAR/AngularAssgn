require('dotenv').config()
const express = require('express')
const connect=require('./db/connect');
const exployee=require('./router/employes')

const app=express()
const cors = require('cors')

const port=process.env.PORT||5000;

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/api',(req,res)=>{
    res.send('Hello World!')
})
app.use('/employee',exployee);

connect
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})