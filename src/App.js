import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import CarOptionsPage from "./Component/CarOptionsPage";
import CarsDetails from "./Component/CarsDetails";
import CarsOnRentPaymentPage from "./Component/CarsOnRentPaymentPage";
import ChooseAction from "./Component/ChooseAction";
import Login from "./Component/Login";
import OrderStatusPage from "./Component/OrderStatusPage";
import OwnerDetailsForm from "./Component/OwnerDetailsForm";
import TentalDetailsForm from "./Component/TentalDetailsForm";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />

        {/* Navigation Options after Login */}
        <Route path="login/chooseaction" element={<ChooseAction />} />

        {/* Owner Details Form */}
        <Route path="ownerdetailsform" element={<OwnerDetailsForm />} />

        {/* Rental Details Form */}
        <Route path="tentaldetailsform" element={<TentalDetailsForm />} />

        {/* Car Options Page */}
        <Route path="caroptionspage" element={<CarOptionsPage />} />

        {/* Car Details */}
        <Route path="carsdetails" element={<CarsDetails />} />

        <Route path="CarsOnRentPaymentPage" element={<CarsOnRentPaymentPage/>} />

      <Route path="OrderStatusPage" element={<OrderStatusPage/>} />
        {/* Fallback or 404 Page (optional) */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </HashRouter>
  );
};

export default App;
