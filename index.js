const express = require("express");
const dotenv = require("dotenv");
const router = require("./Routes/jobRouter");
const mongoose = require("mongoose")
dotenv.config();


const app =express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended : false}));
mongoose.connect(process.env.DB_MONGO).then(()=>{
    app.listen(port,()=>{
        console.log("server running on port" , port)
    })
}).catch((error)=>{
    console.log(error.message)
})




app.use("/api/v1" , router)

