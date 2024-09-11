const mongoose = require("mongoose");
const dbCon = async ()=>{
    // se encargara de realizar la conexion con la base de datos(mongoDB)
     await mongoose.connect("mongodb+srv://banrostin:I6g8uSmDkq6tG2Li@cluster0.hp9cyqd.mongodb.net/movies");
}

module.exports = dbCon;