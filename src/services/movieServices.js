
const Movie = require("../models/Movie");
module.exports = {
    getMovies:async (searchTerm)=>{
   
   try {
      const movies = await Movie.find({ title: { $regex: new RegExp(searchTerm, 'i') } });
      return movies;
   } catch (error) {
      throw new Error("Error para encontrar la pelicula");
   }
    
  },

  getMovieById: async (id) => {
    try {
       const movie = await Movie.findById(id);
       return movie;
    } catch (error) {
       console.error(error);
       throw new Error("Error while fetching movie by ID");
    }
 },

   createMovies: async (movie)=>{
   const {title,year,director,duration,genre,rate,poster} = movie;
   try {
   const newMovie = await Movie.create({title,year,director,duration,genre,rate,poster});
   return newMovie;
   } catch (error) {
      throw new Error("Error al crear la pelicula");
   }
}

}
