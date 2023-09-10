const express = require("express");
const {
  HomeRoutes,
  getbusOperator,
  createbusOperator,
} = require("../controllers/busOperatorController");

const router = express.Router();

// GET request for defaultRoutes
router.get("/", HomeRoutes);
// GET request to get all subscribers
router.get("/busoprator", getbusOperator);

//POST request to add a subscriber
router.post("/busoprator", createbusOperator);


module.exports = router;
