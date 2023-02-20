const db = require("../models");

const loginController = {
  user: {
    name: "nico",
    logged: false,

    setTrue() {
      this.logged = true;
    },
  },

  getPage: (req, res) => {
    const data = {
      title: "Connexion",
      user: loginController.user,
    };
    console.log("log log ", loginController.user);
    res.render("login/login", data);
  },

  postLogin: async (req, res) => {
    const data = {
      ...req.body,
      user: loginController.user,
    };
    if (loginController.user.name === req.body.nom) {
      data.user.setTrue();
      // console.log(data.user.logged);
      await res.redirect("/");
    } else {
      await res.redirect("errorlogin");
    }
  },

  getErrorLogin: (req, res) => {
    const data = {
      title: "Login failed",
    };
    res.render("login/errorlogin", data);
  },
};

module.exports = loginController;
