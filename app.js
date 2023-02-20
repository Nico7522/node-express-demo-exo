// Config des variables d'environnement
require("dotenv").config();

// Import d'express
const express = require("express");

// Création du serveur
const app = express();

// Middleware application lvl Logger Morgan
const morgan = require("morgan");
app.use(morgan("tiny"));
// Gestion des données POST des formulaires
app.use(express.urlencoded({ extended: true }));

// Connection à la db et synchronisation
// Import de la DB
const db = require("./models");

//Connection

db.sequelize
  .authenticate()
  .then(() => console.log("Connection to DB sucess"))
  .catch(() => console.log("Connection to DB failed, ", err));

//Synchronisation
if (process.env.NODE_ENV === "development") {
  // db.sequelize.sync({ force: true }); //Créer les tables, si existent déjà, les supprime et les refait
  db.sequelize.sync({ alter: { drop: false } }); // Autorise la modification des tables/columns mais n'autorise pas la suppresion des tables/columns
}
// Configuration du moteur de vues
app.set("view engine", "ejs"); // Indique à l'app qu'elle doit utiliser le moteur de vues ejs
app.set("views", "views"); // Pour indiquer le dossier dans lequel les vues doivent être cherchées

// Gestion des dossiers statiques
// Pour rendre accessible le dosssier public et faire en sorte que les images, les fichiers css etc soient géré.
app.use(express.static("public"));

// Configuration de l'app pour qu'elle utilise un router
const router = require("./router"); //Utilisation du router dans l'app
app.use(router);

// Lancement du serveur
app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT ${process.env.PORT}`);
});
