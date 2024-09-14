const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
     title : {
        type : String,
        required : true
     },
     description : {
        type : String , 
        require : true
     },
     company :{
        type : String,
        require : true,
     },
     location : {
        type : String,
        require : true
     },
     salary : {
        type : Number,
        require : true
     }
})

const jobModel = mongoose.model("job",jobSchema);

module.exports = jobModel