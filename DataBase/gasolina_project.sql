-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02-Mar-2022 às 00:20
-- Versão do servidor: 10.4.21-MariaDB
-- versão do PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `gasolina_project`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `fuel`
--

CREATE TABLE `fuel` (
  `idFuel` int(11) NOT NULL,
  `price` decimal(10,4) NOT NULL,
  `type` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `station`
--

CREATE TABLE `station` (
  `idStation` int(11) NOT NULL,
  `stName` varchar(50) NOT NULL,
  `cnpj` int(14) NOT NULL,
  `address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `station_fuel`
--

CREATE TABLE `station_fuel` (
  `idFuel` int(11) NOT NULL,
  `idStation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `idUser` int(11) NOT NULL,
  `frName` varchar(60) NOT NULL,
  `scName` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `user_vehicle`
--

CREATE TABLE `user_vehicle` (
  `idVehicle` int(11) DEFAULT NULL,
  `idCliente` int(11) DEFAULT NULL,
  `placa` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `vehicle`
--

CREATE TABLE `vehicle` (
  `idVehicle` int(11) NOT NULL,
  `nameVehicle` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `modelVehicle` int(11) NOT NULL,
  `consume` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `fuel`
--
ALTER TABLE `fuel`
  ADD PRIMARY KEY (`idFuel`);

--
-- Índices para tabela `station`
--
ALTER TABLE `station`
  ADD PRIMARY KEY (`idStation`);

--
-- Índices para tabela `station_fuel`
--
ALTER TABLE `station_fuel`
  ADD KEY `fkFuel` (`idFuel`),
  ADD KEY `fkStation` (`idStation`);

--
-- Índices para tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`);

--
-- Índices para tabela `user_vehicle`
--
ALTER TABLE `user_vehicle`
  ADD KEY `fkVehicle` (`idVehicle`),
  ADD KEY `fkUser` (`idCliente`);

--
-- Índices para tabela `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`idVehicle`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `fuel`
--
ALTER TABLE `fuel`
  MODIFY `idFuel` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `station`
--
ALTER TABLE `station`
  MODIFY `idStation` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `idVehicle` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `station_fuel`
--
ALTER TABLE `station_fuel`
  ADD CONSTRAINT `fkFuel` FOREIGN KEY (`idFuel`) REFERENCES `fuel` (`idFuel`),
  ADD CONSTRAINT `fkStation` FOREIGN KEY (`idStation`) REFERENCES `station` (`idStation`);

--
-- Limitadores para a tabela `user_vehicle`
--
ALTER TABLE `user_vehicle`
  ADD CONSTRAINT `fkUser` FOREIGN KEY (`idCliente`) REFERENCES `user` (`idUser`),
  ADD CONSTRAINT `fkVehicle` FOREIGN KEY (`idVehicle`) REFERENCES `vehicle` (`idVehicle`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
