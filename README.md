# Example Dev Solution for Assessment

### Technology Stack
- Database: MySQL<br />
- Back End: NodeJS, Express, RESTful API<br />
- Front End: ReactJS (JavaScript)

### Development Directory Structure
Below is the following structure for main js script files.<br />
```
├── frontend
|   └── src
|       ├── App.js
|       ├── Freelancer.js
|       ├── RegisterFreelancer.js
|       └── UpdateUserFreelancer.js
|
|   
├── server
|   └── server.js   
```
1. **frontend**
    - **App.js**: to render main react component with multiple page routes.<br />
    - **Freelancer.js**: a functional component for main page to render the list of users of freelancers.<br />
    - **RegisterFreelancer.js**: a functional component to render a new user registration page.<br />
    - **UpdateUserFreelancer.js**: a functional component to render an update user details page.<br />
2. **server**
    - **server.js**: to describe the implementations of RESTful API using HTTP methods (@GET,@POST @PUT, @DELETE and DB connection.<br />

### Descriptions of Database Creation
1. Used phpMyAdmin to create and access MySQL database.
2. Database was pre-populated with items for testing on server.
3. Created table called freelancer.<br />
<br />**Screenshot - Structure**<br />
![](zimages/04-db-mysql-structure.jpg)<br />
<br />**Screenshot - List of items**<br />
![](zimages/05-db-query-items.jpg)<br />

### Descriptions of Backend Server Implementation
Express framework was used to create and run a server for connection.<br />
It also serves to create a DB connection with MySQL.<br />
```javascript
const express = require("express");
const mysql = require("mysql");

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
    const sql = "SELECT * FROM freelancer";
    db.query(sql, (error, data_load) => {
        if (error) {
            return response.json("Error from DB connection!");
        }
        return response.json(data_load);    
    });
});

// app to start and listen on server port 8081 for connection.
app.listen(8081, () => {
    console.log("listening");
});
```
<br />

### Descriptions of Database Creation