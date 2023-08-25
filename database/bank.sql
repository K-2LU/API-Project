-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: bank
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts` (
  `accNo` varchar(32) NOT NULL,
  `balance` int DEFAULT NULL,
  `pass` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`accNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES ('0001',5000,'1234'),('0002',10000,'1234'),('0003',26100,'$2b$10$7zqG/C/KGEdKAp3yP/lCw.9Z3b0HfLLyFN3hp0HWW/5uOd5b0G326');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecomm_user`
--

DROP TABLE IF EXISTS `ecomm_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecomm_user` (
  `username` varchar(32) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `pass` varchar(100) DEFAULT NULL,
  `bank_acc` varchar(45) DEFAULT NULL,
  `bank_stat` tinyint DEFAULT NULL,
  `key` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecomm_user`
--

LOCK TABLES `ecomm_user` WRITE;
/*!40000 ALTER TABLE `ecomm_user` DISABLE KEYS */;
INSERT INTO `ecomm_user` VALUES ('mobin44','Md Kamrujjaman Mobin','1234',NULL,1,NULL),('nahin123','Naimul Haque Nahin','1234','0002',0,'1233'),('nebir46','Sadik Al Barid','1234',NULL,1,NULL),('rigan123','Rigan Mahmud Chowdhury','1234','0001',0,'1234'),('tahsin123','Tahsinul Islam','1234','0001',0,'1234');
/*!40000 ALTER TABLE `ecomm_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eorder`
--

DROP TABLE IF EXISTS `eorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eorder` (
  `id` varchar(20) NOT NULL,
  `u_id` varchar(45) DEFAULT NULL,
  `s_id` varchar(45) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `state` smallint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eorder`
--

LOCK TABLES `eorder` WRITE;
/*!40000 ALTER TABLE `eorder` DISABLE KEYS */;
INSERT INTO `eorder` VALUES ('08JWJ5','rigan123','S001',1000,3),('0kGwxk','rigan123','S001',500,3),('0tL4LN','rigan123','S001',2000,2),('0V28Ht','rigan123','S001',500,3),('1d7hom','rigan123','S001',1000,2),('1pp26Y','rigan123','S001',300,3),('5kmPnB','001',NULL,10001,0),('5TNvzP','nahin123','S001',3600,2),('5ttECp','rigan123','S001',14000,-1),('5uDHyt','rigan123','S001',300,2),('8W9aj7','rigan123','S001',900,3),('AiGib7','rigan123','S001',3200,3),('AuWADU','rigan123','S001',NULL,3),('cKfQO7','rigan123','S001',900,3),('dGqEdB','rigan123','S001',300,3),('e6umLj','rigan123','S001',600,2),('hdjkasd','rigan123','S001',3000,3),('HP72Fp','nahin123','S001',500,2),('HYLUhV','rigan123','S001',1500,2),('icHxcM','rigan123','S001',1400,3),('jdhu2u','rigan123','S001',300,3),('JoqBOd','rigan123','S001',600,2),('kHBNiG','rigan123','S001',1000,2),('KxbpEE','rigan123','S001',300,3),('Lw6lbz','rigan123','S001',1300,2),('lX3Qx7','rigan123','S001',1300,2),('moieda','rigan123','S001',1500,3),('mueIj6','rigan123','S001',1500,2),('N1FVgP','rigan123','S001',1500,2),('ow7zIl','rigan123','S001',1500,3),('P2T8P2','rigan123','S001',300,2),('rbpBpF','rigan123','S001',1000,3),('t5y6Dn','rigan123','S001',10000,3),('tj5RRY','rigan123','S001',300,3),('tk72am','rigan123','S001',500,3),('TMlPwQ','rigan123','S001',1500,2),('udEzXh','rigan123','S001',1300,2),('VIYmJ2','rigan123','S001',300,3),('W7QS0h','nahin123','S001',300,2),('wlYsKL','rigan123','S001',1600,2),('X8uiQp','rigan123','S001',1000,2),('xC3Ecj','rigan123','S001',300,3);
/*!40000 ALTER TABLE `eorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` varchar(20) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `s_id` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('P001','Product A.',1500,'S001'),('P002','Product B.',2500,'S001'),('P003','Product C.',3500,'S001');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seller`
--

DROP TABLE IF EXISTS `seller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seller` (
  `id` varchar(20) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `pass` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `bank_acc` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seller`
--

LOCK TABLES `seller` WRITE;
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
INSERT INTO `seller` VALUES ('S001','seller_x','1234','Mr. X','0003');
/*!40000 ALTER TABLE `seller` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `id` varchar(30) NOT NULL,
  `from` varchar(45) DEFAULT NULL,
  `to` varchar(45) DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES ('0qJthMXxdy','0001','0003',300,'2023-08-25 14:41:22'),('3X6GPbWjWn','0001','0003',3200,'2023-08-20 12:29:03'),('7EXaCsHkUu','0002','0001',5000,'2023-08-19 23:55:25'),('8af1Bu6qou','0001','0003',1400,'2023-08-25 01:19:41'),('9U4sGocT5H','0001','0003',1500,'2023-08-23 00:02:58'),('cCgcQAQ7V5','0001','0003',NULL,'2023-08-21 18:07:49'),('FODhxx3RaC','0001','0003',3200,'2023-08-20 12:32:47'),('gkXjMmBXcD','0001','S001',1500,'2023-08-20 00:57:12'),('HGnlmjkbTA','0001','0003',1000,'2023-08-25 14:42:52'),('ib4yCLLnIO',NULL,NULL,1500,'2023-08-20 00:52:01'),('jAqEWJaHnr','0001','0003',10000,'2023-08-25 14:39:37'),('kEjlterSIP','0001','0003',1500,'2023-08-23 00:00:34'),('Lcc6aRNSIs','0002','0001',25000,'2023-08-19 23:55:46'),('lpRPw7tsJj','0001','0003',3200,'2023-08-20 12:26:19'),('lUUMvaAOGY','0001','0003',500,'2023-08-23 00:03:02'),('NmK6tWJlJx','0001','0003',3200,'2023-08-20 12:22:28'),('QrCmv5KNvz','0001','0002',5000,'2023-08-19 23:54:27'),('sOMiKKXVVf','0001','0003',1500,'2023-08-21 20:36:22'),('WhjMsVTks2','0001','0003',500,'2023-08-23 00:03:30'),('xNcXiYvuIz','0001','0003',3200,'2023-08-20 12:30:21'),('xR51uhHa5H','0001','0003',900,'2023-08-23 00:06:25'),('z2KA4nNxoq','0001','0003',3200,'2023-08-20 12:27:40');
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-25 15:04:04
