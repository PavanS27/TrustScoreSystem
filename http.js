const Client = require('./client')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

var user ;
app.post('/',(req,res)=>{
    console.log(req.body)
    user = new Client(req.body.jid,req.body.password)
    console.log(user.jid)
    user.startXMPP()
})
app.post("/connect",(req,res)=>{
    const to = req.body.to
    const message = req.body.message
    user.send(to,message)
})
app.get("/msg",(req,res)=>{

})
console.log("running")
app.listen(3000)