import React, { useState } from "react";

const InputAndLabel = ({item,getInput}) => {
    const [val, setVal] = useState("All")
    // function handleSeat(e) {
    //     setVal(e.target.value)
    //   }
  return (
    <div>
      <input
        type="checkbox"
        id="vehicle1"
        name={item}
        value={item}
        style={{ fontSize: "12px" }}
        onChange={(e)=>setVal(e.target.value)}
        getInput={getInput(val)}
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
};

export default InputAndLabel;
