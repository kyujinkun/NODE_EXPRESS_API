import Express, { request, response } from "express";
import { v4 as uuidv4 } from "uuid";

const router = Express.Router();

let users = [
  {
    firstName: "Hamza",
    lastName: "bouchtarate",
    age: 25,
  },
  {
    firstName: "Ziyad",
    lastName: "bouchtarate",
    age: 6,
  },
];

// /users === /users/users cuz all routes here start with /users so just let it / YOU GET IT?
router.get("/", (request, response) => {
  console.log(users);

  response.send(`<h1>Hello User</h1>`);
});

router.post("/", (request, response) => {
  const user = request.body;

  const userId = uuidv4(); //=> "9b1deb4d-3b7d-9bdd-2b0d7b3dcb6d"

  const userWithId = { id: userId, ...user };

  users.push(userWithId);

  console.log(users);
  response.send(`<h1>Your request was added successfully</h1>`);
});

router.get("/:id", (request, response) => {
  const { id } = request.params;

  const foundUser = users.find((user) => user.id === id);

  console.log(foundUser);
  response.send(foundUser);
});

router.delete("/:id", (request, response) => {
  const { id } = request.params;

  // const foundUser = users.find((user) => user.id === id);

  users = users.filter((user) => user.id !== id);

  console.log(users);
  response.send(`User with the id ${id} was deleted successfully`);
});

router.patch("/:id", (request, response) => {
  const { id } = request.params;
  const { firstName, lastName, age } = request.body;
  const user = users.find((user) => user.id === id);
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  response.send(`User with the id ${id} has been updated`);
  console.log(user);
});

export default router;
