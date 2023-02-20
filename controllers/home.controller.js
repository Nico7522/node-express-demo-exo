// Création du homeController
const homeController = {
  // Définition des différentes méthodes possibles pour le controller
  getHome: (req, res) => {
    console.log(`We are here : ${req.url}`);
    const data = {
      title: "Acceuil",
    };
    res.render("home/index", data);
    // res.status(200).send(`<h1>BONJOUR, vous êtes sur ${req.url}home</h1>`);
  },
};

// Export
module.exports = homeController;
