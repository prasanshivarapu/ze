import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
import NavbarComp from "./components/index"; // Assuming NavbarComp is in NavbarComp.js or NavbarComp.jsx
import Homepage from "./components/Home";
import Footer from "./components/Footer";
import AccountOpenSection from "./components/Account";

function App() {
    return (
        <Router>
            <div>
                <NavbarComp />
                <Routes>
                    <Route path="/" element={<Homepage />} />

                    <Route path="/signup" element={<AccountOpenSection />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
