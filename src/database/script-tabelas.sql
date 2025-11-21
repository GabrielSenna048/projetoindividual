

CREATE DATABASE fifa;
USE fifa;


CREATE TABLE time (
   idTime INT PRIMARY KEY,
   nome VARCHAR(45),
   descricao VARCHAR(200),
  
);

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(100),
    senha VARCHAR(50),
    nivelTorcedor VARCHAR(300)
     fkTime INT
   FOREIGN KEY (fkTime) REFERENCES time(idTime)
    
);



CREATE TABLE titulos(
    idTitulo INT PRIMARY KEY,
    nome VARCHAR(50),
    ano DATE
    );








