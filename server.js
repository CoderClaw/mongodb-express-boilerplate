const express = require("express")
const dbConnect = require("./db/db")
const home = require("./routes/home")
require('dotenv').config()

//initialization
const app = express()
const port = process.env.PORT || 5000
const url = process.env.MONGODB_ATLAS_URL

app.set("view engine","ejs")

//midleware
app.use(express.json())


//routes
app.use("/",home)


//listening on port
async function start(){
    try{
        await dbConnect(url)
        app.listen(port,()=>{
            console.log(`listening on port ${port}`)
        })
    }catch(err){
        console.log(err)
        console.log(port)
    }
}
start()