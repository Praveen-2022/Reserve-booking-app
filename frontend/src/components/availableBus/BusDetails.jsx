import React, { useEffect, useState } from "react";
import busDate from "./busData";
import { useDispatch, useSelector } from "react-redux";
import { getPrice } from "../../redux/action/action";
import BusSeats from "./BusSeats";
import PayementProceed from "./PayementProceed";
const BusDetails = ({ mainitem }) => {
 const seatPrices = ["All", 699, 899, 1199, 1599]
 console.log("BusDetails")
 const seatInfo = [
    { id: 1, value: "Vacant Seats", selected: false },
    { id: 2, value: "Reserved Seats", selected: false },
    { id: 3, value: "Selexted Seats", selected: false },
  ]
  const dispatch = useDispatch();
  const [seatDate, setSeatData] = useState([mainitem]);
  // const [price, setPrice] = useState();
  const handleSeat = (e) => {
    // setPrice(e.target.value)
    getPrice(dispatch, e.target.value)
  };

  // useEffect(() => {
  //   getPrice(dispatch, price);  
  // }, [price])
  

  return (
    <div className="container">
      <div class="d-flex flex-column">
        <div class=" d-lg-flex d-sm-flex-column">
          <div className="flex-grow-1 p-1 justify-content-center align-items-center">
            <small className="px-3 fw-bold">Select Sheets</small>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <div
                className="px-3 py-1 fw-bold text-muted"
                style={{ fontSize: "12px" }}
              >
                Select Prices
              </div>
              {seatPrices.map((item) => {
                return (
                  <div className="d-flex justify-content-between align-items-center border border-1 px-3 py-1 rounded shadow">
                    <input
                      type="radio"
                      id="vehicle1"
                      name="some name"
                      value={item}
                      style={{ fontSize: "12px" }}
                      onChange={handleSeat}
                      // onChange={(e)=>setPrices(e.target.value)}
                      // onClick={handleSeat}
                    />
                    <label
                      for="vehicle1"
                      className="px-1 fw-bold text-muted"
                      style={{ fontSize: "12px" }}
                    >
                      {item}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-3">
            {seatInfo.map((val) => {
              return (
                <div className="d-lg-flex-column d-sm-flex justify-content-start align-items-center">
                  <input
                    type="radio"
                    id="vehicle1"
                    name="some name"
                    value="Bike"
                    style={{ fontSize: "12px" }}
                  />
                  <label
                    for="vehicle1"
                    className="fw-bold text-muted px-1"
                    style={{ fontSize: "10px" }}
                  >
                    {val.value}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        {seatDate.map((item) => {
          return (
            <div class="d-lg-flex d-sm-flex-column">
              <BusSeats dataBusSeat={item} />
              <PayementProceed mainitem={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BusDetails;
