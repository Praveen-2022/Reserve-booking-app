import React from 'react'
import { useSelector } from 'react-redux';

const CustomerBusDeatails = () => {
  const item = useSelector((state)=>state.singleBusDetail.singleBusDetails)
  const buslocation = useSelector((state) => state.busLocation.busLocation[2]);
  const month = buslocation.toLocaleString("default", {month: "short"});
  const day = buslocation.toLocaleString("default", {day: "numeric"});
    // const  seatType = ["A/C Sleeper(2+1)", "|", "Left Seat", "|", "Window Seat"]
    
  return (
    <div class="border border-2 my-2 rounded shadow p-1">
            <div class="d-flex-column p-2">
              <small className="d-flex">
                <span className="fw-bold">{item.name}</span>
                <small className="bg-success text-light px-1 mx-2 rounded h-25">
                  <i class="fa-regular fa-star">{item.rating}</i>
                </small>
                <small className="text-muted">Rating</small>
              </small>
              <small className="d-flex gap-3 py-2">
                {item.seatType.map((val) => {
                return <small className="fst-normal text-muted">{val}</small>;
                })}
              </small>
              <div className="d-flex my-1">
                <small className="fw-semobold">{item.depTime},{month},{day}</small>
                <small
                  className="mx-3 text-muted d-flex align-items-center"
                  style={{ fontSize: "12px" }}
                >
                  ---{item.timeduration}---
                </small>
                <small>{item.arrTime},{month},{parseInt(day)+1}</small>
              </div>
              <div className="d-flex my-2 gap-5">
                <div>
                  <div className="fw-bold" style={{ fontSize: "12px" }}>
                    {item.pickPoint}
                  </div>
                  <div className="text-muted" style={{ fontSize: "12px" }}>
                    {item.depPoint}
                  </div>
                </div>
                <div>
                  <div className="fw-bold" style={{ fontSize: "12px" }}>
                  {item.dropPoint}
                  </div>
                  <div className="text-muted" style={{ fontSize: "12px" }}>
                  {item.arrPoint}
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default CustomerBusDeatails