import React from "react";
import Checkbox from "./Checkbox";
import SearchBox from "./SearchBox";
import filterData from "./Dataset";

const Filter = ({ buslist }) => {
  // console.log("busList", buslist);
  return (
    <div class="col-md-3 col-sm-12 ">
      <div class="d-flex flex-column mb-3 bg-secondry">
        <div
          class="d-flex border border-2 p-2 my-2 rounded shadow align-items-center"
          style={{ height: "40px" }}
        >
          <div className="fw-bold flex-grow-1">Filter</div>
          <small className="fw-bold" style={{ fontSize: "11px" }}>
            Clear All
          </small>
        </div>
        <div className="border border-2 rounded shadow">
          {filterData.map((item, index) => {
            return (
              <div>
                {item.selector === "multiple" ? (
                  <SearchBox dept={item} buslist={buslist}/>
                ) : (
                  <Checkbox dept={item} index={index} buslist={buslist}/>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
