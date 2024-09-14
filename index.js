const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./Routes/jobRouter");
dotenv.config();


const app =express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.use("/api/v1" , router)

mongoose.connect(process.env.DB_MONGO).then(()=>{
    app.listen(port,()=>{
        console.log("server running on port" , port)
    })
}).catch((error)=>{
    console.log(error.message)
})

