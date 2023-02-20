const { Contact } = require("../models");
const db = require("../models");
// const querySelectorAll = require('query-selector');
// const jsdom = require("jsdom").jsdom;

// function recupValue() {
  // const namePersonne = document.querySelector('.nom');
//   return namePersonne
// }

const contactsController = {
  getContacts: async (req, res) => {
    try {
      const contacts = await db.Contact.findAll();
      const data = {
        title: "Contact",
        contacts,
      };
      res.render("contacts/contacts", data);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  getFormContacts: (req, res) => {
    console.log("Page ajouter contact HERE");
    const data = {
      title: "Ajouter un contact",
    };
    res.render("contacts/addContacts", data);
  },

  postFormContacts: async (req, res) => {
    try {
      const data = {
        ...req.body,
        favori: req.body.favori === "on" ? true : false,
      };
      console.log('log contact ici ', data);
      await db.Contact.create(data);
      res.status(201).redirect("/contacts");
    } catch (error) {
      res.sendStatus(500);
    }
  },

  // getPostContacts: async (req, res) => {
  //   try {
  //     const contacts = await db.Contact.findAll();
  //     const data = {
  //       title: "Contact",
  //       contacts,
  //     };
  //     res.render("contacts/postDelete", data);
  //   } catch (error) {
  //     console.log(error);
  //     res.sendStatus(500);
  //   }
  // },

  deleteMessage: (req, res) => {
    // const recup = recupValue();
    // console.log('log req ici', recup);
    db.Contact.destroy({ where: { name: "nicolas" } }).then((n) => {
      // console.log('log ici ', nom);
      res.redirect("/contacts");
    });
  },
};

module.exports = contactsController;
