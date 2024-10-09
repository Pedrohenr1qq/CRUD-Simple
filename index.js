// Dependencies
const express = require('express');
const userRouters = require('./router/users.router');

// Starting express app
const app = express();
const port = 3000;

app.use(express.json());

//CRUD to users
app.use('/user', userRouters);

//Get main router
app.get('/', (req,res) =>{
  res.send("Home");
});

// Starting server
app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`);
});
