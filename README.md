# REDUX CRUD EXAMPLE FOR LISTINGS 

## Description:
This a basic crud react-redux-featherjs application for managing listings. It currently uses Mongodb for the database and FeathersJS for the REST API server.

## Technologies:
- React
- Redux
- JavaScript
- HTML5
- Sass
- MongoDB
- Node
- Feathers
- Gulp & Browserify

**Main Page**                       |    |**Form Validation**
:----------------------------------:|:--:|:----------------------------------:
![](/public/images/desktop.png)      |    | ![](/public/images/formvalidation.png)

**Listing Card**                    |    |**Edit/Update**
:----------------------------------:|:--:|:----------------------------------:
![](/public/images/cards.png)    |    | ![](/public/images/edit.png)

**Mobile**                          |    |  **Tablet**
:----------------------------------:|:--:|:----------------------------------:
![](/public/images/mobile.png)        |    | ![](/public/images/tablet.png)



##  How to install

```bash
git clone https://github.com/omaracrystal/React-Redux-CRUD-BiggerPockets.git
cd React-Redux-CRUD-BiggerPockets

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
cd React-Redux-CRUD-BiggerPockets/backend
npm start
```
This will run the backend server at localhost:3030. If all is working well, you should be able to access the url http://localhost:3030/listings from your Browser or Postman

### Start the client
Open a separate terminal to start the client:

```bash
cd React-Redux-CRUD-BiggerPockets
npm start
```

Your default web browser will be launched automatically with the url http://localhost:3000
