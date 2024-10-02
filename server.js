const express = require("express");
const morgan = require("morgan");
const router = require('./src/routes');
const movieServices = require("./src/services/movieServices");

const allowedOrigins = [
  'http://localhost:5500', // URL de desarrollo
  'https://app-cinema-back.onrender.com', // URL de producción (ajusta esto según tu configuración)
  // Agrega otras URLs si es necesario
];
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
      res.header('Access-Control-Allow-Origin', origin);
  }
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
app.use(router);

app.post("/movies",async (req,res)=>{
  const { title, year, director, duration, genre, rate, poster } = req.body;
  
  try {
    const newMovie = await movieServices.createMovies({title,year,director,duration,genre,rate,poster});
    res.status(201).json(newMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.use((err,req,res,next) =>{
  res.status(err.statusCode||500).json({error:err.message})
}) 



module.exports = app;