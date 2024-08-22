const db = require('../config/db');

exports.getAllEvents = (req, res) => {
    db.query('SELECT * FROM events', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.elemento = (req, res) => {
    res.send('hola desde elemento');
}

exports.getUserById = (req, res) => {
    // Lógica para obtener un usuario por ID
    const userId = req.params.id;
    res.send(`Usuario con ID: ${userId}`);
};

exports.createUser = (req, res) => {
    // Lógica para crear un nuevo usuario
    res.send('Usuario creado exitosamente');
};