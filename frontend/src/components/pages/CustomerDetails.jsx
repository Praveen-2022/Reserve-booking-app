import React from "react";
import CustomerInfo from "../customerDetailpage/CustomerInfo";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const CustomerDetails = () => {
  const obj = {
    name:"Javed",
    profile:"Profile"
  }
  return (
    <div>
      <Navbar item={obj}/>
      <CustomerInfo/>
      <Footer />
    </div>
  );
};

export default CustomerDetails;
