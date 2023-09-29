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