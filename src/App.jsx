import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import cart from "./cart/cart";
import placeholder from "./Component/placeholder/placeholder";
import home from "./Home/home";


const App = () => {
  

  return (
      <div className="app">
        <Navbar />


        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/cart" element={<cart />} />
          <Route path="/contact-us" element={<placeholder />} />
        </Routes>
      </div>
      
  );
};

export default App;
