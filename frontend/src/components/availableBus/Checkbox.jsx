import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSeletedBuses } from "../../redux/action/action";

const Checkbox = ({ dept,buslist}) => {
  // console.log("busdetails",buslist)
  const dispatch = useDispatch()
  // const filterBusList = buslist
  const[filterBusList, setFilterBusList]  =useState(buslist)
  const handleChange=(e)=>{
    if(dept.name==="Departure" && e.target.value==="Morning Session"){
      const filterdata = filterBusList.filter((item)=>{
        const depTime = item.depTime.split(":")
        return depTime[0]<=12
      })
      getSeletedBuses(dispatch,filterdata)
    }else if(dept.name==="Departure" && e.target.value==="Afternoon Session"){
      const filterdata = filterBusList.filter((item)=>{
        const depTime = item.depTime.split(":")
        return depTime[0]>=12 && depTime[0] <= 18
      })
      getSeletedBuses(dispatch,filterdata)
    }
    else{
      getSeletedBuses(dispatch,filterBusList )
    }
  }
  return (
    <div class="p-2 px-3">
      <small className="fw-bold">{dept.name}</small>
      <form className="my-3" action="/action_page.php" method="get">
        {dept.name1.map((item) => {
          return (
            <div>
              <input type="radio" name="some name" value={item.value} onChange={(e)=>handleChange(e)}/>
              <label className="px-2" htmlFor="vehicle1">
                <small className="">{item.value}</small>
              </label>
              <br />
              <input className="d-none" type="submit" defaultValue="Submit" />
            </div>
          );
        })}
      </form>
      <hr className="border border-primary border-1 m-0 p-0" />
    </div>
  );
};

export default Checkbox;
