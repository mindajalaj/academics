-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 24, 2013 at 05:50 PM
-- Server version: 5.1.41
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `todo`
--

-- --------------------------------------------------------

--
-- Table structure for table `inactive_user`
--

CREATE TABLE IF NOT EXISTS `inactive_user` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inactive_user`
--


-- --------------------------------------------------------

--
-- Table structure for table `todo`
--

CREATE TABLE IF NOT EXISTS `todo` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `due_date` varchar(40) NOT NULL,
  `created_date` varchar(40) NOT NULL,
  `label` varchar(100) NOT NULL,
  `progress` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `todo`
--

INSERT INTO `todo` (`id`, `username`, `title`, `description`, `due_date`, `created_date`, `label`, `progress`) VALUES
(1, 'dilip', 'Projects', 'DBMS LAB PROJECT', '2013-10-25', '2013-10-24', 'Important', 0),
(2, 'dilip', 'gaand', '\r\nnjsnkdasjndkjn', '2013-12-12', '2013-10-24', 'Read Later', 78);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(150) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(40) NOT NULL,
  `ip_address` varchar(20) NOT NULL,
  `time` varchar(40) NOT NULL,
  `date` varchar(40) NOT NULL,
  `user_status` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `ip_address`, `time`, `date`, `user_status`) VALUES
(1, 'dilip', 'hellojain', 'djthecorporate@gmail.com', '127.0.0', '00:11:11', '2013-10-24', ''),
(2, 'veer', 'kumar', 'verr@gmail.com', '127.0.0', '17:46:19', '2013-10-24', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
