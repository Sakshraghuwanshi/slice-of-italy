# Slice of Italy

### This is a digital restaurent website having 
 - a frontend developed using Angular 
 - a backend developed using Express server 
 - Mongo DB as the database

***

### Pre-requisites

- Angular CLI v14.2.1
- Node.js v16.17.1
- NPM v8.15.0
- Mongo DB v6.0.2
- Typescript v4.5.2

***

### To run the project

1. Open two set of terminals, one for frontend and one for backend
2. In the `backend` terminal, run following commands:
    - `cd src`
    - Create a `.env` file with the following keys:
        - MONGO_URI
        - JWT_SECRET
    - Populate the MONGO_URI with Mongo DB URL, put any passphrase in the JWT_SECRET
    - `cd ..`
    - `npm install`
    - `npm start`
3. This will start the backend server on `http://localhost:5000`
4. Hit the following API request to the backend server to set pre-requisites:
    - `curl -v http://localhost:5000/api/foods/seed`
5. In the `frontend` terminal, run following commands:
    - cd `frontend`
    - `npm install`
    - `ng serve`
6. This will start the UI on `http://localhost:4200`

***

### LICENSE

See the [LICENSE.md](LICENSE.md) file