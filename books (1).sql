-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 15-Dez-2022 às 17:34
-- Versão do servidor: 5.7.36
-- versão do PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `books`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `book`
--

DROP TABLE IF EXISTS `book`;
CREATE TABLE IF NOT EXISTS `book` (
  `id_book` int(11) NOT NULL AUTO_INCREMENT,
  `nome_usuario` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `senha` varchar(250) NOT NULL,
  PRIMARY KEY (`id_book`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `book`
--

INSERT INTO `book` (`id_book`, `nome_usuario`, `email`, `senha`) VALUES
(50, 'Claudiana Oliveira', 'teste@gmail.com', '1');

-- --------------------------------------------------------

--
-- Estrutura da tabela `livros`
--

DROP TABLE IF EXISTS `livros`;
CREATE TABLE IF NOT EXISTS `livros` (
  `id_livro` int(4) NOT NULL AUTO_INCREMENT,
  `autor` varchar(250) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `sinopse` varchar(250) NOT NULL,
  `paginas` int(250) NOT NULL,
  `genero` varchar(250) NOT NULL,
  `fk_user` int(4) NOT NULL,
  PRIMARY KEY (`id_livro`),
  KEY `fk_user` (`fk_user`)
) ENGINE=MyISAM AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `livros`
--

INSERT INTO `livros` (`id_livro`, `autor`, `titulo`, `sinopse`, `paginas`, `genero`, `fk_user`) VALUES
(39, 'JK', 'Harry Potter', 'aaaaa', 55, 'Ação', 50);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
