const mongoose = require("mongoose");

const connectToDatabse = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsfullstackclu.g2lm3rm.mongodb.net/database?retryWrites=true&w=majority&appName=CursoNodeJsFullStackClub`
    );
    console.log("Conexão ao banco de dados realizada com sucesso!");
  } catch (error) {
    console.log("Ocorreu um erro ao se conectar com o banco de dados: ", error);
  }
};

module.exports = connectToDatabse;
