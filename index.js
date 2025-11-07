const express = require('express');
const app = express();
const databse = require("./config/database")
const routerClient = require("./api/v1/routes/index.router")
// CONFIG ENV
require("dotenv").config();
const port = process.env.POST
// END ENV

// Database connect
databse.connect()
// end Database

// Config router client
routerClient(app)
// end config

app.listen(port,() => {
    console.log(`🐳 Server is running on http://localhost:${port}`);
})