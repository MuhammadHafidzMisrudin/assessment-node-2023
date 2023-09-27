const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

// configure cors.
app.use(cors());

// create connection with mysql.
const db =  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

// send response from the server.
app.get('/', (req, res) => {
    // res.json("Hello From Backend");
    const sql = "SELECT * FROM freelancer";
    db.query(sql, (err, data_q) => {
        if (err) {
            return res.json("Error from DB connection!");
        }
        return res.json(data_q);    
    });
});

// app to start and listen for connection.
app.listen(8081, () => {
    console.log("listening");
});