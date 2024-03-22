const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = 5001;

const db = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "1234",
    database: "myzer",
});
app.use(cors());

app.use(express.json());

app.get("/financial-data", (req, res) => {
    const financialData = {
        NIFTY50: {
            name: "NIFTY50",
            currentValue: 22082.95,
            change: 71.0,
            percentageChange: 0.32,
        },
        SENSEX: {
            name: "SENSEX",
            currentValue: 72818.33,
            change: 177.14,
            percentageChange: 0.24,
        },
        NIFTY1: {
            name: "NIFTY50",
            currentValue: 22082.95,
            change: 71.0,
            percentageChange: 0.32,
        },
        SENSEX2: {
            name: "NIFTY50",
            currentValue: 72818.33,
            change: 177.14,
            percentageChange: 0.24,
        },
        NIFTY3: {
            name: "NIFTY50",
            currentValue: 22082.95,
            change: 71.0,
            percentageChange: 0.32,
        },
        SENSEX4: {
            name: "NIFTY50",
            currentValue: 72818.33,
            change: 177.14,
            percentageChange: 0.24,
        },
    };

    res.status(200).json(financialData);
});

app.get("/25", (req, res) => {
    res.send("welcome");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
