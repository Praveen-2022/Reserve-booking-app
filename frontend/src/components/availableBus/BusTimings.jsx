import React, { useEffect, useState } from "react";
import Buses from "./Buses";
import Pagination from "./Pagination";
import {useSelector } from "react-redux";

const BusTimings = ({buslist}) => {


  const buslocation = useSelector((state) => state.busLocation);

  return (
    <div class="col-md-9 col-sm-12">
      <div class="d-flex flex-column mb-3">
        <Pagination />
        <div className="">
          {buslist.map((item) => {
            return <Buses item={item} key={item.id} busDate={buslocation.busLocation[2]}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BusTimings;
