const express= require("express");
const dotenv= require("dotenv");
const {chats}= require("./data/data.js");
const connectDB = require("./config/db.js");
const app=express()

app.get("/",(req,res)=>{
    res.send("running on API successfully");

});
    
dotenv.config();
connectDB();


app.get('/api/chat',(req,res)=>{
    res.send(chats);
})

const PORT=process.env.PORT || 5000


app.listen(5000,console.log(`port running on ${PORT} `));
