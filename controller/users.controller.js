// User in memory
const users = [
  {
    id: 1,
    name: "João",
    email: 'joao123@gmail.com',
    login: 'joao_silva_123',
    pass: 'joaozinho_123'
  },
  {
    id: 2,
    name: "Maria",
    email: 'maria2212@hotmail.com',
    login: 'madu_souza22',
    pass: '123456_abc'
  }
];

// Find one user by id
const find = (req, res) =>{
  const id = req.params.id;
  let found = false;

  // Request id OK
  users.map((user) =>{
    if(user.id == id){
      found = true;
      return res.send(user);
    }
  })

  if(!found) res.status(404).send({error: "id not found"});
}

// Find all users
const findAll = (req,res) => {
  res.send(users);
}

// Create new user
const createUser = (req,res) => {
  const newUser = req.body;

  // Validating request body
  if(Object.keys(newUser).length === 0){
    return res.status(400).send({error: "The body is empty"});
  }

  if(!newUser.id){
    return res.status(400).send({error: "The id field is empty"});
  }

  if(!newUser.name){
    return res.status(400).send({error: "The name field is empty"});
  }

  if(!newUser.email){
    return res.status(400).send({error: "The email field is empty"});
  }

  if(!newUser.login){
    return res.status(400).send({error: "The login field is empty"});
  }

  if(!newUser.pass){
    return res.status(400).send({error: "The pass field is empty"});
  }

  // Request body OK
  console.log("User registered sucessfully");
  users.push(newUser);
  res.send(users);
}

// Uptade one user selected by id
const updateUser = (req,res) => {
  const id = req.params.id;
  let found = false;
  const newUser = req.body;

  // Validating request body
  if(Object.keys(newUser).length === 0){
    return res.status(400).send({error: "The body is empty"});
  }

  if(!newUser.id){
    return res.status(400).send({error: "The id field is empty"});
  }

  if(!newUser.name){
    return res.status(400).send({error: "The name field is empty"});
  }

  if(!newUser.email){
    return res.status(400).send({error: "The email field is empty"});
  }

  if(!newUser.login){
    return res.status(400).send({error: "The login field is empty"});
  }

  if(!newUser.pass){
    return res.status(400).send({error: "The pass field is empty"});
  }

  // Request body OK
  users.map((user, index) =>{
    if(user.id == id){
      found = true;
      users[index] = newUser;
      console.log("User updated sucessfully");
      res.send(users);
    }
  })

  if(!found) res.status(404).send({error: "id not found"});
}

// Delete one user by id
const deleteUser = (req, res) =>{
  const id = req.params.id;
  let found = false;

  // Request id OK
  users.map((user, index) =>{
    if(user.id == id){
      found = true;
      users.splice(index, 1);
      return res.send(users);
    }
  })

  if(!found) res.status(404).send({error: "id not found"});
}

//Exporting functions to routers file
module.exports = {
  find, 
  findAll,
  createUser,
  updateUser,
  deleteUser
}