const jobModel = require("../Models/job");


async function jobPost(req,res){
    try{
       const newJob = new jobModel(req.body);
        await newJob.save()
        re.status(201).json({
            message : "Job is added successfully "
        })

    }catch(error){
        console.log(error.message);
        res.status(500).json({
             error : error.message,
             message : "InValid details"
        })
    }
}

async function getAllJobs(req,res){
  try{
 const allJobs = await jobModel.find({});
  res.json({
    message: "All jobs are here",
    data: allJobs
  })
  }catch(error){
    console.log(error.message);
    res.status(500).json({
         error : error.message,
         message : "InValid details"
    })
  }
}

async function updateJob(req,res){
    try {
        const job = await jobModel.findByIdAndUpdate(req.params.id, req.body);
        const findJob = await jobModel.findOne({_id: req.params.id});
        res.json({
          message: "Updated job with id: " + job.id,
          data: findJob,
        });
      } catch (error) {
        console.log(error.message)
        res.status(500).json({
          message: error.message,
        });
      }
}

async function deleteJob(req,res){
    try {    
        const job = await jobModel.findByIdAndDelete(req.params.id);
        res.json({
            message: "Deleted job with id: " + job.id,
        })
        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                message: error.message,
            })
        }
}

module.exports = {
    jobPost ,
    getAllJobs,
    updateJob,
    deleteJob
}