require('dotenv').config();
const express = require("express");
const app = express();
const dbconfig = require("./dbconfig");

const portfolioroute = require("./portfolioroute");

app.use(express.json());

app.use("/portfolio",portfolioroute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));