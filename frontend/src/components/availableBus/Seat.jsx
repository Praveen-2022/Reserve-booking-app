import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getSeatNumber } from "../../redux/action/action";
import png from "../images/seat.png"

const Seat = ({item}) => {
  // console.log("item", item)
  const prices = useSelector((state)=>state.busPrice.price)
  const priced = prices ==="All" ? prices : parseInt(prices)
  // console.log("price", priced)
  // console.log("img", item.value)
  const [seatColor, setSeatColor] = useState("");
  const [selectSeat, setselectSeat] = useState(false);
  const dispatch = useDispatch()
  function handleSelectSeat() {
    if (selectSeat === false) {
      setSeatColor("blue");
      setselectSeat(true);
    } else {
      setSeatColor("");
      setselectSeat(false);
    }
    getSeatNumber(dispatch, item)
  }
   
  useEffect(() => {
     
  }, [item])
  return (
    <div>
      <img
        alt="busSeat"
        id="li"
        src={png}
        className={`border border-1 text-center rounded ${prices.length===0?"visible":priced==="All"?"visible" :item.price!==priced ? "invisible":"visible"}`}
        onClick={handleSelectSeat}
        style={{
          width: "55px",
          backgroundColor: seatColor
        }}
      />
    </div>
  );
};

export default Seat;
