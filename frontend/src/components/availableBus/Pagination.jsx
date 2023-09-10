import React from "react";
import { useState } from "react";
import "../../App.css";
const Pagination = () => {
  const d = new Date();
  let month = d.toLocaleString("en-us", { month: "short" })
  // const [date, setDate] = useState(d.getDate());
  let pageData = [
    {
      id: d.getDate(),
      page: d.getDate(),
      day: d.toLocaleString("en-us", { weekday: "short" }),
    },
  ];

  for (let index = 0; index <= 30; index++) {
    d.setDate(d.getDate() + 1);
    pageData.push({
      id: d.getDate(),
      page: d.getDate(),
      day: d.toLocaleString("en-us", { weekday: "short" }),
    });
  }

  // function handleNext() {
  //   if (date < 23) {
  //     setDate(date + 1);
  //     d.setDate(d.getDate() + 1);
  //   }
  // }
  return (
    <div
      class=" d-flex justify-content-center align-items-center border border-1 my-2 rounded shadow"
      style={{ height: "40px"}}
    >
      <div
        className="d-flex justify-content-center py-2 px-3 border border-1 text-primary"
        id="li"
        style={{ width: "40px" }}
        onClick={() =>
          (document.getElementById("pageBox").scrollLeft -= 250)}
      >
        «
      </div>
      <div id="li" className="d-flex justify-content-center py-2 px-2 text-muted" style={{writingMode: "vertical-lr"}}>{month}</div>
      <ul id="pageBox" className="flex-grow-1 d-flex list-unstyled mt-3" style={{overflow:"hidden",width: "600px",overflowX: "scroll",overflowX: "hidden"}}>
      {pageData.map((item) => {
              return (
                <li
                  id="li"
                  className="d-flex flex-column justify-content-center align-items-center px-4"
                  style={{ width: "90px"}}
                >
                  <small
                    className="fw-bold text-muted"
                    style={{ fontSize: "14" }}
                  >
                    {item.page}
                  </small>
                  <small
                    className="fw-bold text-muted"
                    style={{ fontSize: "10px" }}
                  >
                    {item.day}
                  </small>
                </li>
              );
            })}
      </ul>
      <div
        className="d-flex justify-content-center py-2 px-3 border border-1  text-primary"
        id="li"
        style={{ width: "40px" }}
        onClick={() =>
          (document.getElementById("pageBox").scrollLeft += 250)}
      >
        »
      </div>
    </div>
  );
};

export default Pagination;
