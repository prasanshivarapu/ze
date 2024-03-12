import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import NavbarComp from "./components/index"; // Assuming NavbarComp is in NavbarComp.js or NavbarComp.jsx
import Homepage from "./components/Home";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <div>
                <NavbarComp />
                <Homepage />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
