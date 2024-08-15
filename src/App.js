import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
          <Route path="/" element={<Home/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
