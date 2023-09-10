import React from 'react'
import Seat from './Seat'
// import busSeatData from './busSeatData';

const BusSeats = ({dataBusSeat}) => {
     const seatUppar = dataBusSeat.busSeatData.UpperSheet
     const seatLower = dataBusSeat.busSeatData.lowerSheet

     console.log("BusSeats")
  return (
    <div class="col-lg-8 col-sm-12 d-flex-column">
            <div className="border border-1 d-flex justify-content-between align-items-center shadow rounded">
              <div
                className="p-2 fw-bold text-muted d-flex justify-content-between align-items-center"
                style={{ writingMode: "vertical-lr", fontSize: "10px" }}
              >
                Uppar Sheet
              </div>
              <div className="flex-grow-1  d-flex-column mx-2 p-2">
                <div className="d-flex justify-content-between align-items-center">
                  {seatUppar.seatLeft.map((item,index) => {
                    return (
                      <Seat data={item.value} item={item}/>
                    );
                  })}
                </div>
                <div className="d-flex justify-content-between align-items-center my-2">
                  {seatUppar.seatMid.map((item) => {
                    return (
                      <Seat data={item.value} item={item}/>
                    );
                  })}
                </div>
                <div className="d-flex flex-row-reverse align-items-center gap-3 mt-4">
                  {seatUppar.seatRight.map((item) => {
                    return (
                      <Seat data={item.value} item={item}/>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="border border-1 my-2 shadow rounded">
              <div className="d-flex justify-content-between align-items-center">
                <div
                  className="p-2 fw-bold text-muted d-flex justify-content-between align-items-center"
                  style={{ writingMode: "vertical-lr", fontSize: "10px" }}
                >
                  Lower Sheet
                </div>
                <div className="flex-grow-1  d-flex-column mx-2 p-2">
                <div className="d-flex justify-content-between align-items-center">
                  {seatLower.seatLeft.map((item) => {
                    return (
                      <Seat data={item.value} item={item}/>
                    );
                  })}
                </div>
                <div className="d-flex justify-content-between align-items-center my-2">
                  {seatLower.seatMid.map((item,index) => {
                    return (
                      <Seat data={item.value} item={item}/>
                    );
                  })}
                </div>
                <div className="d-flex flex-row-reverse align-items-center gap-3 mt-4">
                  {seatLower.seatRight.map((item,index) => {
                    return (
                      <Seat data={item.value} item={item}/>
                    );
                  })}
                </div>
              </div>
              </div>
            </div>
          </div>
  )
}

export default BusSeats