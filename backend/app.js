// Importa Express
const express = require('express');
const app = express();

// Define una ruta básica que responde con "Hola, Mundo!"
app.get('/', (req, res) => {
  res.send('Hola, Mundo desde Express!');
});

const eventRoutes = require('./routes/events');
app.use('/events', eventRoutes);

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor Express ejecutándose en http://localhost:3000');
});
