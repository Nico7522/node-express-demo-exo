const db = require("../models");

const messagesController = {
  getForm: (req, res) => {
    console.log(`We are here ${req.url}`);
    // res.status(200).send(`<h1>BONJOUR, vous êtes sur ${req.url}</h1>`);
    const data = {
      title: "add message",
    };
    res.render("messages/addMessages", data);
  },

  getMessages: async (req, res) => {
    console.log(`We are here ${req.url}`);
    // res.status(200).send(`<h1>Messages</h1>`);

    // Récupération de tous les messages

    try {
      const messages = await db.Message.findAll();
      const data = {
        title: "messages",
        messages,
      };
      res.render("messages/messages", data);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  postMessage: async (req, res) => {
    console.log(`traitement des datas`);
    try {
      console.log(req.body);
      const data = {
        ...req.body,
        urgent: req.body.urgent === "on" ? true : false,
      };
      await db.Message.create(data);
      res.status(201).redirect("/messages");
    } catch (error) {
      res.sendStatus(500);
    }
  },
};

module.exports = messagesController;
