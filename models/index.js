//Fichier de paramétrage Sequelize

//import de Sequelize
const  { Sequelize, DataTypes } = require('sequelize');

//Récupération des variables d'env
const { DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_SERVER  } = process.env

//Initialisation de l'objet sequelize
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host : DB_SERVER,
    port : DB_PORT,
    dialect : 'mssql'
} )

//Initialisation d'un objet db, qui représentera notre db
const db = {}

db.sequelize = sequelize;

//Liaison des models à db

db.Message = require('./message.model')(sequelize);
db.Contact = require('./contact.model')(sequelize);

//Si y'a, on setup aussi, toutes les relations

module.exports = db;