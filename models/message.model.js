const { DataTypes, Sequelize, ModelStatic } = require("sequelize");

/**
 * Constructeur du modèle Contact
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> }
 */
module.exports = (sequelize) => {
  
  const Message = sequelize.define(
    "Message",
    {
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      msg: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      urgent: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    },
    {
      tableName: "Message", // Pour indiquer le nom de la table qu'il doit créer à la synchronisation, sinon, par défaut, il prend le nom du Model, avec un s à la fin.
    }
  );

  return Message;
};
