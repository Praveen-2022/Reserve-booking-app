import React from "react";
import CustomerBusDeatails from "./CustomerBusDeatails";
import FareDetails from "./FareDetails";
import Form from "./Form";

const CustomerInfo = () => {
  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <div class="row">
        <div class="d-flex-column col-md-8 col-sm-12">
          <CustomerBusDeatails />
          <div class="my-4">
            <div className="fw-bold">Enter traveller Details</div>
            <Form />
          </div>
        </div>
        <FareDetails/>
      </div>
    </div>
  );
};

export default CustomerInfo;
