const mongoose = require("mongoose");
require("dotenv").config();

const server = "127.0.0.1:27017";
const database = "maDB";

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose.set("strictQuery", false);
    mongoose;
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connecté à la base de données MongoDB");
        // Vous pouvez ajouter du code supplémentaire ici après la connexion réussie
      })
      .catch((error) => {
        console.error(
          "Erreur de connexion à la base de données MongoDB",
          error
        );
      });
  }
}

export default Database;
