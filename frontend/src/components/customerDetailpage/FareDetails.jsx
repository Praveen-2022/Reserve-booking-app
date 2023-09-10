import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
const FareDetails = () => {
  const prices = useSelector((state)=>state.busPrice.price.length>0?state.busPrice.price:"799")
  // console.log("type", typeof(prices))
  let total = parseInt(prices)+150-50
  return (
    <div class="col border border-2 rounded shadow p-3 my-2 mb-4" style={{height:"40%"}}>
          <div className="fw-bold" style={{fontSize:"16px"}}>Fare Details</div>
          <div className="d-flex my-3">
            <div className="flex-grow-1" style={{fontSize:"14px"}}>Base Fare</div>
            <div className="fw-bold" style={{fontSize:"18px"}}>${prices}</div>
          </div>
          <div className="d-flex my-3">
            <div className="flex-grow-1" style={{fontSize:"14px"}}>Tax</div>
            <div className="fw-bold" style={{fontSize:"18px"}}>$150</div>
          </div>
          <div className="d-flex my-3">
            <div className="flex-grow-1" style={{fontSize:"14px"}}>Offer applied</div>
            <div className="fw-bold" style={{fontSize:"18px"}}>$50</div>
          </div>
          <hr className="border border-dark mx-1" />
          <div className="d-flex my-3">
            <div className="flex-grow-1" style={{fontSize:"14px"}}>Total Price</div>
            <div className="fw-bold" style={{fontSize:"18px"}}>${total}</div>
          </div>
          <Link to="/TicketConfirm" className="btn btn-warning rounded fw-bold text-white w-100 mt-1">Proceed to Payment</Link>
        </div>
  )
}

export default FareDetails