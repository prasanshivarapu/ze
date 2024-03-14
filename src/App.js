import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
import NavbarComp from "./components/Navbar/index"; // Assuming NavbarComp is in NavbarComp.js or NavbarComp.jsx
import Homepage from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AccountOpenSection from "./components/Account/Account";
import NavbarComp1 from "./components/New";

function App() {
    return (
        <Router>
            <div>
                <NavbarComp />
                <Routes>
                    <Route path="/" element={<Homepage />} />

                    <Route path="/signup" element={<AccountOpenSection />} />
                    {/* <Route path="/1" element={<NavbarComp1 />} /> */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
