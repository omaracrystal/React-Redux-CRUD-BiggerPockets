# REDUX CRUD EXAMPLE

## Introduction
This a basic crud react-redux-featherjs application for managing listings. It currently uses Mongodb for the database and FeathersJS for the REST API server.

##  How to install

```bash
git clone https://github.com/omaracrystal/React-CRUD-Listings.git
cd react-listing-manager

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
```


## How to run
Ensure you have mongodb installed in your system and that it is running

### Start the backend server
Start the backend server first:

```bash
cd react-listing-manager/backend
npm start
```
This will run the backend server at localhost:3030. If all is working well, you should be able to access the url http://localhost:3030/listings from your Browser or Postman

### Start the client
Open a separate terminal to start the client:

```bash
cd react-listing-manager
npm start
```

Your default web browser will be launched automatically with the url http://localhost:3000
