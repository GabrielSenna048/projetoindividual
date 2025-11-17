

CREATE DATABASE fifa;
USE fifa;

CREATE TABLE quiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    pontuacao VARCHAR(50),
    dtQuiz DATETIME
);

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50),
    quiz_id INT,
    FOREIGN KEY (quiz_id) REFERENCES quiz(id)
);
select * from usuario;
CREATE TABLE torcedor (
    idTorcedor INT PRIMARY KEY AUTO_INCREMENT,
    nivelTorcedor VARCHAR(300),
    fk_quiz INT,
    FOREIGN KEY (fk_quiz) REFERENCES quiz(id)
);

CREATE TABLE aviso (
    idAviso INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(150),
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);






insert into quiz (pontuacao) values ('80');
insert into quiz (pontuacao) values ('50');
insert into torcedor (nivelTorcedor, fk_quiz) values ('Fanático', 1);
insert into torcedor (nivelTorcedor, fk_quiz) values ('Apenas vê os jogos', 2);

