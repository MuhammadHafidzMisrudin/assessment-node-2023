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
    @POST to add/register a new data into database.
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


/* 
    @PUT to update current data with new data into database.
*/
app.put('/update/:id', (request, response) => {
    const sql = "UPDATE freelancer SET `username` = ?, `email` = ?, `phonenumber` = ?, `skillsets` = ?, `hobby` = ? WHERE id = ?";
    const values = [
        request.body.username,
        request.body.email,
        request.body.phonenumber,
        request.body.skillsets,
        request.body.hobby
    ];

    // get the id.
    const id = request.params.id;
  
    db.query(sql, [...values, id], (error, data_update) => {
        if (error) {
            return response.json("Error from DB connection!");
        }
        return response.json(data_update);
    });
});


/* 
    @DELETE to delete current data with its id from database.
*/
app.delete('/freelancer/:id', (request, response) => {
    const sql = "DELETE FROM freelancer WHERE id = ?";

    // get the id.
    const id = request.params.id;
  
    db.query(sql, [id], (error, data_delete) => {
        if (error) {
            return response.json("Error from DB connection!");
        }
        return response.json(data_delete);
    });
});


// app to start and listen on server port 8081 for connection.
app.listen(8081, () => {
    console.log("listening");
});