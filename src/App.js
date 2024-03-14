import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/Navbar/index"; // Assuming NavbarComp is in or NavbarComp.jsx
import Homepage from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AccountOpenSection from "./components/Account/Account";
import About from "./components/About/About";
import Pricing from "./components/Pricing/Pricing";

function App() {
    return (
        <Router>
            <div>
                <NavbarComp />
                <Routes>
                    <Route path="/" element={<Homepage />} />

                    <Route path="/signup" element={<AccountOpenSection />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/1" element={<Pricing />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
