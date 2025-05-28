const { error } = require("console");
const fs = require("fs");
const path = require("path");

//Criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//   return console.log("Erro: ", error);
//   }
//   console.log("Pasta criada com sucesso!");
// });

// Criar um arquivo
// Obs: O writeFile é assicrono, não acontece de uma vez
// 1º O Node fica escrevendo o arquivo, enquanto isso,
//2.º O Node vai para o appendFile, enquanto isso,
//3º O Node vai para o readFile, no caso, quando o node le o arquivo, os outros 2 de cima ainda não foram concluidos, especificamente o appendFile, por isso devvemos por todos no mesmo escopo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro", error);
    }
    console.log("Arquivo criado com sucesso");

    // Adicionar a um arquivo, meto append file
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "hello word!",
      (error) => {
        if (error) {
          return console.log("Erro", error);
        }
        console.log("Arquivo modificado com sucesso");
      }
    );

    // Ler arquivo
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf-8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log(data);
      }
    );
  }
);
// Calback - é a função que será executada, quando a escrita do arquivo for finalizado

// Adicionar a um arquivo, meto append file
// fs.appendFile(
//   path.join(__dirname, "/test", "test.txt"),
//   "hello word!",
//   (error) => {
//     if (error) {
//       return console.log("Erro", error);
//     }
//     console.log("Arquivo modificado com sucesso");
//   }
// );

// // Ler arquivo
// fs.readFile(
//   path.join(__dirname, "/test", "test.txt"),
//   "utf-8",
//   (error, data) => {
//     if (error) {
//       return console.log("Erro: ", error);
//     }
//     console.log(data);
//   }
// );
