const db = require('../db/db');

const getAllMovies = (req,res) => {
    const sql = 'SELECT * FROM movies';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

const getMovieById = (req, res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM movies WHERE id= ?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

const createMovie = (req,res) => {
    console.log('BODY EN API=',req.body)
    const {title,director,year} = req.body;
    const sql = 'INSERT INTO movies (title, director, year) VALUES (?, ?, ?)';
    db.query(sql,[title,director,year], (err,result) => {
        if (err) throw err;
        res.json({ mensaje: "Peli creada", movieId: result.insertId });
    });
};

const updateMovie = (req,res) => {
    const {id} = req.params;
    const {title,director,year} = req.body;
    const sql = 'UPDATE movies SET title = ?, director=?, year=? WHERE id=?';
    db.query(sql,[title,director,year,id], (err,result) => {
        if (err) throw err;
        res.json({ mensaje: "Actualización exitosa."});
    });
};

const deleteMovie = (req,res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM movies WHERE id = ?';
    db.query(sql,[id], (err,result) => {
        if (err) throw err;
        res.json({ mensaje: "Eliminación exitosa"});
    });
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};