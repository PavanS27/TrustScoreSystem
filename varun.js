const Client = require('./client')
const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.sendFile("index.html")
})



var varun = new Client("varun@localhost","password","localhost","5222")
varun.startXMPP()

varun.send("pavan@localhost","Hey pavan")
varun.send("pavan@localhost","how")
varun.send("pavan@localhost","are")
varun.send("pavan@localhost","lusiya")
varun.send("pavan@localhost","puubnf")
varun.send("pavan@localhost","2222")


varun.disconnectXMPP()


app.listen(3000)