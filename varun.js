const Client = require('./client')

var varun = new Client("varun@localhost","password","localhost","5222")
varun.startXMPP()

varun.send("pavan@localhost","Hey pavan")
varun.send("pavan@localhost","how")
varun.send("pavan@localhost","are")
varun.send("pavan@localhost","lusiya")
varun.send("pavan@localhost","puubnf")
varun.send("pavan@localhost","2222")


varun.disconnectXMPP()
