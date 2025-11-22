

CREATE DATABASE fifa;
USE fifa;
drop database fifa;


CREATE TABLE timeFut (
   idTime INT PRIMARY KEY,
   nomeTime VARCHAR(45),
   descricao VARCHAR(500)
  
);
select * from time;


CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(100),
    senha VARCHAR(50),
    nivelTorcedor INT,
     fkTime INT,
   FOREIGN KEY (fkTime) REFERENCES timeFut(idTime)
    
);
select * from usuario;


select * from usuario
join timeFut on fkTime = idTime;

SELECT AVG(nivelTorcedor) AS mediaNivel
        FROM usuario;
              




CREATE TABLE titulos(
    idTitulo INT PRIMARY KEY,
    nome VARCHAR(50),
    ano DATE,
    fkTimeTitulos INT,
     FOREIGN KEY (fkTimeTitulos) REFERENCES timeFut(idTime)
    );

INSERT INTO timeFut (idTime, nomeTime, descricao) VALUES
(1, 'Corinthians', 'Fundado em 1910, o Corinthians é um dos clubes mais populares e vitoriosos do Brasil, com uma vasta
              torcida.
              Tem grandes conquistas, como a Copa Libertadores de 2012 e o Mundial de Clubes da FIFA em 2000 e 2012. O
              time
              tem uma rivalidade histórica com o Palmeiras, Santos e São Paulo.'),
(2, 'Palmeiras', '>Fundado em 1914, o Palmeiras é um dos clubes mais bem-sucedidos do Brasil, com um grande número de
              títulos,
              incluindo a Copa Libertadores (2020, 2022). A rivalidade com o Corinthians é intensa, sendo um dos maiores
              clássicos do futebol paulista.'),
(3, 'São Paulo', 'Fundado em 1930, o São Paulo é um dos clubes mais prestigiados do Brasil, com vários títulos nacionais e
              internacionais, incluindo a Copa Libertadores e o Mundial de Clubes. Seu estádio, o Morumbi, é um dos
              maiores
              do país. A rivalidade com Palmeiras e Corinthians é histórica.'),
(4, 'Santos', 'Fundado em 1912, o Santos é conhecido mundialmente por sua relação com Pelé, considerado o maior jogador
              de
              futebol de todos os tempos. O time possui uma das maiores torcidas do Brasil e uma rica história de
              títulos
              nacionais e internacionais.'),
(5, 'Vasco', 'Fundado em 1898, o Vasco é um dos clubes de maior tradição do Brasil, com uma enorme torcida e várias
              conquistas nacionais, como o Campeonato Brasileiro. A rivalidade com Flamengo e Fluminense é intensa,
              especialmente no Rio de Janeiro.'),
              (6, 'Flamengo', 'Fundado em 1895, o Flamengo é um dos clubes mais populares e vitoriosos do Brasil, com uma base de fãs
              espalhada por todo o país. O time tem uma rivalidade histórica com o Fluminense, Vasco e Botafogo, e já
              conquistou inúmeros títulos, incluindo a Copa Libertadores e o Mundial de Clubes.'),
              (7, 'Fluminense', 'Fundado em 1902, o Fluminense é um dos clubes mais tradicionais do Brasil, com uma grande história no
              futebol. O time tem uma grande rivalidade com Flamengo e Vasco. O Fluminense é conhecido por seu estilo de
              jogo técnico e por suas grandes gerações de jogadores..'),
              (8, 'Cruzeiro', 'Fundado em 1921, o Cruzeiro é um dos clubes mais vitoriosos de Minas Gerais e do Brasil. Com várias
              conquistas nacionais e internacionais, o Cruzeiro tem uma grande base de torcedores e rivaliza com times
              como Atlético-MG e Flamengo.'),
              (9, 'Grêmio', 'Fundado em 1903, o Grêmio é um dos clubes mais tradicionais do Brasil, com uma forte base de torcedores
              no
              sul do país. O time tem uma grande história de títulos nacionais e internacionais, incluindo a Copa
              Libertadores.'),
              (10, 'Internacional', 'Fundado em 1909, o Internacional, também conhecido como Inter, é um dos maiores clubes do sul do Brasil.
              Com
              várias conquistas nacionais e internacionais, incluindo a Copa Libertadores e o Mundial de Clubes, o time
              tem
              uma rivalidade forte com o Grêmio no clássico "Grenal"');







