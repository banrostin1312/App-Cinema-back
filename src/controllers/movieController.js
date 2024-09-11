const movieServices = require("../services/movieServices");
const catchAsync = require("../utils/catchAsync");

const getAllMovies = async (req,resp)=>{
    
    const searchTerm = req.query.search || '';
    const movieData = await movieServices.getMovies(searchTerm);
    resp.status(200).send(movieData);
   
   
}

const getMovieById = async (req,resp)=>{
    const { id } = req.params;
    
      const movie = await movieServices.getMovieById(id);
      resp.status(200).json(movie);   
     
     
}

        


const createMovie = async (req,resp) =>{
     const { title,year,director,duration,genre,rate,poster } = req.body;
    
        const newMovie = movieServices.createMovies({title,year,director,duration,genre,rate,poster});
        resp.status(201).json(newMovie);
       

    }

    module.exports = {
        getAllMovies: catchAsync(getAllMovies),
        getMovieById: catchAsync(getMovieById),
        createMovie: catchAsync(createMovie),
    }