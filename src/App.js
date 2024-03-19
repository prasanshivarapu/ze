import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/Navbar/index"; // Assuming NavbarComp is in or NavbarComp.jsx
import Homepage from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AccountOpenSection from "./components/Account/Account";
import About from "./components/About/About";
import Pricing from "./components/Pricing/Pricing";
import Product from "./components/Products/Product";
import Support from "./components/Support/Support";

function App() {
    return (
        <Router>
            <div>
                <NavbarComp />
                <Routes>
                    <Route path="/" element={<Homepage />} />

                    <Route path="/signup" element={<AccountOpenSection />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/1" element={<Support />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
