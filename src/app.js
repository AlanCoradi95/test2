const express = require('express');
const app = express();
const movieRoutes = require('../routes/movieRoutes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/movies',movieRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});