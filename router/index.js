const { getContacts, getFormContacts, postFormContacts, deleteMessage,  getPostContacts } = require('../controllers/contacts.controller');
const { getHome } = require('../controllers/home.controller');
const { getForm, postMessage, getMessages, } = require('../controllers/messages.controller');
const { getPage, postLogin, getErrorLogin } = require ('../controllers/login.controller')

// Création du router grâce à express
const router = require('express').Router();

// Configuration des routes possibles

// Lien vers la homepage
router.get('/', getHome);
// Vers liste de tous les messages
router.get('/messages/', getMessages);
// Vers form pour add un message
router.get('/messages/ajouter', getForm);

// Post du message
router.post('/messages/ajouter', postMessage);

// Vers liste des contacts
router.get('/contacts', getContacts);

router.get('/contacts/ajouter', getFormContacts)

router.post('/contacts/ajouter', postFormContacts)

router.get('/contacts/supprimer', deleteMessage)
// router.post('/contacts/supprimer', )

router.get('/login', getPage );
router.post('/login', postLogin);
router.get('/errorlogin', getErrorLogin)


// Export du router
module.exports = router;