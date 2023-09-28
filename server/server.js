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

/* 
    send response from the server.
    @GET to fetch data from mysql database into the server.
*/
app.get('/', (request, response) => {
    // res.json("Hello From Backend");

    const sql = "SELECT * FROM freelancer";
    db.query(sql, (error, data_load) => {
        if (error) {
            return response.json("Error from DB connection!");
        }
        return response.json(data_load);    
    });
});

/* 
    @POST to add a new data into database.
*/
app.post('/register', (request, response) => {
    const sql = "INSERT INTO freelancer (`username`, `email`, `phonenumber`, `skillsets`, `hobby`) VALUES (?)";
    const values = [
        request.body.username,
        request.body.email,
        request.body.phonenumber,
        request.body.skillsets,
        request.body.hobby
    ];
  
    db.query(sql, [values], (error, data_insert) => {
        if (error) {
            return response.json("Error from DB connection!");
        }
        return response.json(data_insert);
    });
});


// app to start and listen on server port 8081 for connection.
app.listen(8081, () => {
    console.log("listening");
});