import React from "react";
import Cards from "../homepage/Cards";
import Footer from "../footer/Footer";
import Heading from "../homepage/Heading";
import Navbar from "../navbar/Navbar";
import Reviews from "../homepage/Reviews";
import Selector from "../homepage/Selector";

const HomePage = () => {
  const obj = {
    name:"Login",
    profile:"Register"
  }
  return (
    <div>
      <Navbar item={obj}/>
      <Selector />
      <Cards/>
      <Heading/>
      <Reviews/>
      <Footer />
    </div>
  );
};

export default HomePage;
