const mongoose = require("mongoose");
const busDetails = require("../models/busDetailsModule");

// Initial add data to database
// const data = require("../database/busDetailsDb");
// busDetails.insertMany(data,function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully saved")
//     }
// })

//get all Subscriber
const getbusDetail = async (req, res) => {
  const {pickPoint,dropPoint,runningDay } = req.query;
  console.log("run",pickPoint,dropPoint,runningDay)
  try {
    // get all subscribers
    const busDetail = await busDetails.find({pickPoint,dropPoint,runningDay});
    //get all subscriber with a status code of 200
    console.log(busDetail)
    return res.status(200).json(busDetail);
  } catch (error) {
    //incase of an error , return status code of 400 with error
    return res.status(400).json({ error: error.message });
  }
};



//POST request for create new subscriber
const createbusDetail = async (req, res) => {
  const postBody = req.body;
  try {
    //create subscriber and add to database
    const busDetail = await busDetails.create(postBody);
    // subscriber add to data base with status code 200
    return res.status(200).json(busDetail);
  } catch (error) {
    //incase of an error , return status code of 400 with error
    return res.status(400).json({ error: error.message });
  }
};


module.exports = {
  getbusDetail,
  createbusDetail,
};
