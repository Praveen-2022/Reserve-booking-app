import React from "react";
import bus from "../images/bus.jpg";
import happy from "../images/happy.jpg";
import ticket from "../images/ticket.jpg";

const Cards = () => {
  const cardData = [
    { id: 1, title: "2000+", value: "Bus Collection", img: bus },
    { id: 2, title: "20Million", value: "Happy Customers", img:happy },
    { id: 3, title: "5000+", value: "Ticket Book Everyday",img:ticket },
  ];
  return (
    <div className="container-fluid ">
      <div
        class="d-flex flex-md-row flex-sm-column justify-content-center align-items-center gap-2"
        style={{ height: "390px" }}
      >
        {cardData.map((item) => {
          return (
            <div class="card shadow px-3" style={{ width: "13rem"}}>
              <img
                src={item.img}
                class="card-img-top"
                alt="..."
                style={{ height: "100px" }}
              />
              <div class="card-body">
                <h6 class="card-title text-center">{item.title}</h6>
                <small className="text-center d-block">{item.value}</small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
