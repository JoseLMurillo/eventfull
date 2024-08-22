const mysql = require('mysql2');

// Crear la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'eventfull'
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error conectándose a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos como id ' + connection.threadId);
});

module.exports = connection;
