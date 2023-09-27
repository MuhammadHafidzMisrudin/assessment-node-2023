const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

// configure cors.
app.use(cors());

// create connection with mysql.
mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

// send response from the server.
app.get('/', (req, res) => {
    res.json("Hello From Backend");
})

// app starts and listens for connection.
app.listen(8081, () => {
    console.log("listening");
});