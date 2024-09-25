const mongoose = require("mongoose");

const dbCon = async () => {
    // Obtiene la URI de conexión desde las variables de entorno
    const uri = process.env.MONGO_URI;

    // Se encarga de realizar la conexión con la base de datos (MongoDB)
    if (!uri) {
        console.error("Falta la URI de MongoDB en las variables de entorno");
        return;
    }

    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conexión a MongoDB exitosa");
    } catch (error) {
        console.error("Error conectando a MongoDB:", error);
    }
};

module.exports = dbCon;
