const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(cors({ origin: "*", methods: "GET,HEAD,PUT,PATCH,POST,DELETE" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let persons = [
  {
    num: 2,
    nom: "FERRADO",
    prenom: "Adèle",
    service: "comm",
  },
  {
    num: 3,
    nom: "TAILLIEZ",
    prenom: "Anne-Laure",
    service: "pers",
  },
  {
    num: 4,
    nom: "BRIGNARD",
    prenom: "Arnaud",
    service: "prod",
  },
  {
    num: 5,
    nom: "ESPOSITO",
    prenom: "Arsene",
    service: "prod",
  },
  {
    num: 6,
    nom: "DETE",
    prenom: "Audrey",
    service: "pers",
  },
  {
    num: 8,
    nom: "FANTHOU",
    prenom: "Baptiste",
    service: "prod",
  },
  {
    num: 9,
    nom: "CLERIOT",
    prenom: "Camille",
    service: "comm",
  },
  {
    num: 11,
    nom: "EBINI",
    prenom: "Marc",
    service: "prod",
  },
  {
    num: 12,
    nom: "CHARLET",
    prenom: "Cédric",
    service: "prod",
  },
  {
    num: 13,
    nom: "FONTAO",
    prenom: "Clément",
    service: "prod",
  },
  {
    num: 14,
    nom: "DAGHER",
    prenom: "David",
    service: "prod",
  },
  {
    num: 15,
    nom: "BRUNNER",
    prenom: "Elise",
    service: "comm",
  },
  {
    num: 16,
    nom: "GUENOUN",
    prenom: "Elodie",
    service: "pers",
  },
  {
    num: 17,
    nom: "ALDEBERT",
    prenom: "Guillaume",
    service: "prod",
  },
  {
    num: 19,
    nom: "MAILLARD",
    prenom: "Isabelle",
    service: "pers",
  },
  {
    num: 20,
    nom: "CLARET",
    prenom: "Jean-Paul",
    service: "prod",
  },
];

/**************  Send a given person to the client ***********/

app.get("/person/:id", (req, res) => {
  const id = req.params.id;
  const result = persons.filter((person) => {
    return person.num == id;
  });
  res.status(200).json(result[0]);
});

/***************  Send all persons to the client ************/

app.get("/persons/", (req, res) => {
  res.status(200).json(persons);
});

/****************  Delete a given person  ******************/

app.delete("/person/delete/:id", (req, res) => {
  const id = req.params.id;
  const filtered = persons.filter((person) => person.num != id);
  persons = [... filtered];
  res.status(200).json({ "Deleted rows": 1 });
});

/***************  Home Page ************/

app.get("/", (req, res) => {
  res.contentType('text/html');
  res.send(
    "<h1>Welcome to our API</h1><ul><li>Get all persons: [GET] /persons/</li> <li>Get on person: [GET] /person/:id</li><li>Delete on person: [DELETE] /person/:id</li></ul>"
  );
});

app.listen(3000);
