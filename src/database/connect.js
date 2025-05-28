const mongoose = require("mongoose");

const connectToDatabse = async () => {
  await mongoose.connect(
    "mongodb+srv://raianebatistasc:<db_password>@cursonodejsfullstackclu.g2lm3rm.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJsFullStackClub",
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o banco de dados: ",
          error
        );
      }
      return console.log("Conexão ao banco de dados realizada com sucesso!");
    }
  );
};

module.exports = connectToDatabse
