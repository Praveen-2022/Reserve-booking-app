import React from "react";
import { useSelector } from "react-redux";
import BusTimings from "../availableBus/BusTimings";
import Filter from "../availableBus/Filter";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const AvailableBus = () => {
  const obj = {
    name:"Javed",
    profile:"Profile"
  }
  const buslist = useSelector((state)=>state.selectedBuses.selectedBuses)
  return (
    <div>
      <Navbar item={obj}/>
      <div class="container" style={{marginTop:"70px"}}>
        <div class="row">
          <Filter buslist={buslist}/>
          <BusTimings buslist={buslist}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AvailableBus;
