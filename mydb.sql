-- Adminer 4.8.0 MySQL 8.0.21 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

CREATE DATABASE `livraria` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `livraria`;

DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `cover` varchar(256) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author` varchar(45) NOT NULL,
  `content` varchar(145) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `books_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comments_books_idx` (`books_id`),
  CONSTRAINT `fk_comments_books` FOREIGN KEY (`books_id`) REFERENCES `books` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- 2021-04-07 00:02:38
