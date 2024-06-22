const mysql = require('mysql2');

const conn = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: ''
});

conn.connect((err) => {
    if (err) {
        console.error('Error al conectar con la db: ',err);
        return;
    }
    console.log('DB Conexión exitosa.');

    conn.query('CREATE DATABASE IF NOT EXISTS movies_db', (err, results) => {
        if (err) {
            console.error('Error al crear la base de datos.', err);
        }
        console.log('Base de datos creada exitosamente.');

        conn.changeUser({ database: 'movies_db' }, (err) => {
            if (err){
                console.error('Error al cambiar a movies_db', err);
                return;
            }
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS movies (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    title VARCHAR(255) NOT NULL,
                    director VARCHAR(255) NOT NULL,
                    year INT NOT NULL
                );
            `;
            conn.query(createTableQuery, (err, results) => {
                if (err){
                    console.error('Error al crear tabla:', err);
                    return;
                }
                console.log('Tabla creada exitosamente.');
            });
        });
    });
});

module.exports = conn;