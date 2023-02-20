const { DataTypes, Sequelize, ModelStatic } = require("sequelize");

/**
 * Constructeur du modèle Message
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> }
 */
module.exports = (sequelize) => {
  const Contact = sequelize.define(
    "Contact",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tel: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      favori: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: "Contact",
    }
  );
  return Contact;
};
