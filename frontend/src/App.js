import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/components/pages/HomePage";
import AvailableBus from "../src/components/pages/AvailableBus";
import CustomerDetails from "./components/pages/CustomerDetails";
import TicketConfirmation from "./components/pages/TicketConfirmation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/AvailableBus" element={<AvailableBus />} />
      <Route path="/CustomerDetails" element={<CustomerDetails />} />
      <Route path="/TicketConfirm" element={<TicketConfirmation />} />
    </Routes>
  );
}

export default App;