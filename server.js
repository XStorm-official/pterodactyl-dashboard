const express = require('express');
const app = express();
const port = 80;

// MOTEUR
app.set('view engine', 'ejs');

// Fichiers statiques
app.use(express.static('public'));

// Route principale
app.get('/', (req, res) => {
  res.render('index');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur lancé : http://localhost:${port}`);
});
