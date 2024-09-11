

const validateMovies = (req,res,next)=>{
    const { title, year, director, duration, genre, rate, poster } = req.body;
    
        if (!title || !year || !director || !duration || !genre || !rate || !poster) {
            next({ message: "Ingresa todos los datos para proseguir", statusCode: 400 });
        } else {
            
            next();
        }
       if (!/^\d{4}$/.test(year)) {
        next({message: "El año no tiene 4 digitos",statusCode: 400});
       }
}

module.exports = validateMovies
