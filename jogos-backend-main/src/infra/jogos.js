/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import db from "./db.js";

//==== Conteúdos
const JOGOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "jogos" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" text,
    "genero" text
    
  );`;

function createTableJogos() {
    db.run(JOGOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de jogos");
    });
}

db.serialize( ()=> {
    createTableJogos();
});