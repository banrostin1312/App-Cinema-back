const mongoose = require("mongoose");

const dbCon = async () => {
    // Obtiene la URI de conexión desde las variables de entorno
    const uri = "mongodb+srv://banrostin:I6g8uSmDkq6tG2Li@cluster0.hp9cyqd.mongodb.net/movies";

    // Se encarga de realizar la conexión con la base de datos (MongoDB)

    try {
        await mongoose.connect(uri);
        console.log("Conexión a MongoDB exitosa");
    } catch (error) {
        console.error("Error conectando a MongoDB:", error);
    }
};

module.exports = dbCon;
