const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

// parse data into json load.
app.use(express.json());

// configure cors to to relax the security applied to an API.
app.use(cors());

// create connection with mysql.
const db =  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

// send response from the server.
// @GET to fetch data from mysql database into the server.
app.get('/', (req, res) => {
    // res.json("Hello From Backend");
    const sql = "SELECT * FROM freelancer";
    db.query(sql, (error, data_q) => {
        if (error) {
            return res.json("Error from DB connection!");
        }
        return res.json(data_q);    
    });
});

// @POST to add a new data into database.


// app to start and listen for connection.
app.listen(8081, () => {
    console.log("listening");
});