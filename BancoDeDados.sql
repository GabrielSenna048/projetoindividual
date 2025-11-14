

CREATE DATABASE fifa;

USE fifa;

CREATE TABLE quiz (
	id INT PRIMARY KEY AUTO_INCREMENT,
	pontuacao VARCHAR(50),
	dtQuiz datetime
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
	
);
select * from usuario;

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table corinthians (

	id INT PRIMARY KEY AUTO_INCREMENT,
	nivelTorcedor VARCHAR(300),
	fk_quiz INT,
	FOREIGN KEY (fk_quiz) REFERENCES quiz(id)
);


create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	qntAmor varchar(45),
	momento DATETIME,
	fk_corinthians INT,
	FOREIGN KEY (fk_corinthians) REFERENCES corinthians(id)
);

insert into quiz (pontuacao) values ('80');
insert into quiz (pontuacao) values ('50');
insert into corinthians (nivelTorcedor, fk_quiz) values ('Fanático', 1);
insert into corinthians (nivelTorcedor, fk_quiz) values ('Apenas vê os jogos', 2);

