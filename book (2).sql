-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 30-Nov-2022 às 19:09
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
  `titulo_book` varchar(250) NOT NULL,
  `pagina_book` varchar(250) NOT NULL,
  PRIMARY KEY (`id_book`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `book`
--

INSERT INTO `book` (`id_book`, `titulo_book`, `pagina_book`) VALUES
(6, 'harry Potter 01', '1000'),
(7, 'harry Potter 01', '1000'),
(8, 'harry Potter 01', '1000'),
(9, 'harry Potter 01', '1000'),
(10, 'harry Potter 01', '1000'),
(11, 'harry Potter 01', '1000'),
(12, 'harry Potter 01', '1000'),
(13, 'harry Potter 01', '1000'),
(14, 'harry Potter 01', '1000'),
(15, 'harry Potter 01', '1000'),
(16, 'harry Potter 01', '1000'),
(17, 'harry Potter 01', '1000'),
(18, 'harry Potter 01', '1000'),
(19, 'harry Potter 01', '1000');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
