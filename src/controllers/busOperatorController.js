const mongoose = require("mongoose");
const busOperators = require("../models/busOperatorModule");

//Initial add data to database
// const data = require("../data");

// busOperators.insertMany(data,function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully saved")
//     }
// })

// default routes
const HomeRoutes = async (req, res) => {
  try {
    //get all subscriber with a status code of 200
    return res
      .status(200)
      .json(
        "Its a Home route after the URL endpoint using /busOperator for geting all busOperator"
      );
  } catch (error) {
    //incase of an error , return status code of 400 with error
    return res.status(400).json({ error: error.message });
  }
};

//get all Subscriber
const getbusOperator = async (req, res) => {
  try {
    // get all subscribers
    const busOperator = await busOperators.find({});
    //get all subscriber with a status code of 200
    return res.status(200).json(busOperator);
  } catch (error) {
    //incase of an error , return status code of 400 with error
    return res.status(400).json({ error: error.message });
  }
};



//POST request for create new subscriber
const createbusOperator = async (req, res) => {
  const postBody = req.body;
  try {
    //create subscriber and add to database
    const busOperator = await busOperators.create(postBody);
    // subscriber add to data base with status code 200
    return res.status(200).json(busOperator);
  } catch (error) {
    //incase of an error , return status code of 400 with error
    return res.status(400).json({ error: error.message });
  }
};


module.exports = {
  HomeRoutes,
  getbusOperator,
  createbusOperator,
};
