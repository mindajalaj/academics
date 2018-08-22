-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 13, 2018 at 11:28 AM
-- Server version: 5.6.21
-- PHP Version: 5.5.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `proto_knolbook`
--

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE IF NOT EXISTS `departments` (
`dept_id` int(10) unsigned NOT NULL,
  `dept_name` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`dept_id`, `dept_name`, `created_at`, `updated_at`) VALUES
(1, 'technical', NULL, NULL),
(2, 'sales', NULL, NULL),
(3, 'marketing', NULL, NULL),
(4, 'tester', NULL, NULL),
(5, 'finance', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `modes`
--

CREATE TABLE IF NOT EXISTS `modes` (
`modes_id` int(10) unsigned NOT NULL,
  `modes_name` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `modes`
--

INSERT INTO `modes` (`modes_id`, `modes_name`, `created_at`, `updated_at`) VALUES
(1, 'user', NULL, NULL),
(2, 'admin', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `phone_numbers`
--

CREATE TABLE IF NOT EXISTS `phone_numbers` (
  `phone_users_id` int(10) unsigned NOT NULL,
  `phone_number` double NOT NULL,
  `phone_type` varchar(30) DEFAULT NULL,
`phone_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=328 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `phone_numbers`
--

INSERT INTO `phone_numbers` (`phone_users_id`, `phone_number`, `phone_type`, `phone_id`, `created_at`, `updated_at`) VALUES
(45, 998712345, 'work', 259, NULL, NULL),
(45, 123098098, 'personal', 260, NULL, NULL),
(46, 556474367, 'work', 283, NULL, NULL),
(47, 778812343, 'work', 297, NULL, NULL),
(1, 8686868688, 'work', 321, NULL, NULL),
(1, 98776512, 'work', 322, NULL, NULL),
(1, 12312312, 'home', 323, NULL, NULL),
(48, 5544987876, 'work', 324, NULL, NULL),
(48, 111222111, 'work', 325, NULL, NULL),
(48, 11224321, 'personal', 326, NULL, NULL),
(48, 98098083, 'home', 327, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
`products_id` int(10) unsigned NOT NULL,
  `products_name` varchar(45) DEFAULT NULL,
  `products_description` mediumtext,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`products_id`, `products_name`, `products_description`, `created_at`, `updated_at`) VALUES
(1, 'ilead', 'a simulation', NULL, NULL),
(2, 'ftm', 'a simulation', NULL, NULL),
(3, 'byb', 'a simulation', NULL, NULL),
(4, 'cq', 'a simulation', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_members`
--

CREATE TABLE IF NOT EXISTS `product_members` (
  `prod_mem_product_id` int(10) unsigned DEFAULT NULL,
  `prod_mem_users_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
`prod_mem_id` int(10) unsigned NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=159 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_members`
--

INSERT INTO `product_members` (`prod_mem_product_id`, `prod_mem_users_id`, `created_at`, `updated_at`, `prod_mem_id`) VALUES
(1, 45, NULL, NULL, 101),
(3, 45, NULL, NULL, 102),
(NULL, NULL, NULL, NULL, 106),
(2, 46, NULL, NULL, 126),
(4, 47, NULL, NULL, 138),
(2, 1, NULL, NULL, 155),
(4, 1, NULL, NULL, 156),
(2, 48, NULL, NULL, 157),
(1, 48, NULL, NULL, 158);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE IF NOT EXISTS `roles` (
`roles_id` int(10) unsigned NOT NULL,
  `roles_name` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`roles_id`, `roles_name`, `created_at`, `updated_at`) VALUES
(1, 'knlloy', NULL, NULL),
(2, 'admin', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `updates`
--

CREATE TABLE IF NOT EXISTS `updates` (
`updates_id` int(10) NOT NULL,
  `updates_users_id` int(10) unsigned NOT NULL,
  `updates_text` longtext NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `updates`
--

INSERT INTO `updates` (`updates_id`, `updates_users_id`, `updates_text`, `updated_at`, `created_at`) VALUES
(69, 45, 'is added to knolbook...', '2015-03-06 04:15:29', '2015-03-06 04:15:29'),
(70, 46, 'is added to knolbook...', '2015-03-06 04:18:43', '2015-03-06 04:18:43'),
(71, 47, 'is added to knolbook...', '2015-03-06 04:19:31', '2015-03-06 04:19:31'),
(72, 48, 'is added to knolbook...', '2015-03-06 04:20:16', '2015-03-06 04:20:16'),
(73, 1, 'edited the information...', '2015-03-06 05:10:30', '2015-03-06 05:10:30'),
(74, 1, 'edited the information...', '2015-03-06 05:17:03', '2015-03-06 05:17:03'),
(75, 46, 'edited the information...', '2015-03-06 05:17:21', '2015-03-06 05:17:21'),
(76, 48, 'edited the information...', '2015-03-06 05:54:18', '2015-03-06 05:54:18'),
(77, 1, 'edited the information...', '2015-03-06 05:54:46', '2015-03-06 05:54:46'),
(78, 1, 'edited the information...', '2015-03-06 05:57:48', '2015-03-06 05:57:48'),
(79, 1, 'edited the information...', '2015-03-06 05:58:13', '2015-03-06 05:58:13'),
(80, 1, 'edited the information...', '2015-03-06 05:58:24', '2015-03-06 05:58:24'),
(81, 48, 'edited the information...', '2015-03-11 09:18:04', '2015-03-11 09:18:04'),
(82, 1, 'edited the information...', '2015-03-11 10:35:52', '2015-03-11 10:35:52'),
(83, 48, 'edited the information...', '2015-03-11 10:36:18', '2015-03-11 10:36:18'),
(84, 46, 'edited the information...', '2015-03-11 10:42:19', '2015-03-11 10:42:19'),
(85, 47, 'edited the information...', '2015-03-11 10:45:39', '2015-03-11 10:45:39'),
(86, 48, 'edited the information...', '2015-03-11 11:09:47', '2015-03-11 11:09:47'),
(87, 48, 'edited the information...', '2015-03-11 11:15:59', '2015-03-11 11:15:59'),
(88, 1, 'edited the information...', '2015-03-11 11:18:21', '2015-03-11 11:18:21'),
(89, 1, 'edited the information...', '2015-03-11 11:43:26', '2015-03-11 11:43:26'),
(90, 1, 'edited the information...', '2015-03-11 20:52:32', '2015-03-11 20:52:32'),
(91, 47, 'edited the information...', '2015-03-11 20:52:55', '2015-03-11 20:52:55'),
(92, 48, 'edited the information...', '2015-03-11 21:32:52', '2015-03-11 21:32:52'),
(93, 48, 'edited the information...', '2018-08-13 02:12:12', '2018-08-13 02:12:12');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`users_id` int(10) unsigned NOT NULL,
  `users_fname` varchar(45) DEFAULT NULL,
  `users_lname` varchar(45) DEFAULT NULL,
  `users_dob` varchar(10) DEFAULT NULL,
  `users_doj` varchar(10) DEFAULT NULL,
  `users_dept_id` int(10) unsigned DEFAULT NULL,
  `users_role_id` int(10) unsigned DEFAULT NULL,
  `users_mode_id` int(10) unsigned DEFAULT NULL,
  `users_city` varchar(45) DEFAULT NULL,
  `users_state` varchar(45) DEFAULT NULL,
  `users_country` varchar(45) DEFAULT NULL,
  `users_email` varchar(45) DEFAULT NULL,
  `users_pic` longtext,
  `users_designation` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `users_works_as` varchar(45) DEFAULT NULL,
  `users_managed_by` varchar(45) DEFAULT NULL,
  `users_gender` varchar(45) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`users_id`, `users_fname`, `users_lname`, `users_dob`, `users_doj`, `users_dept_id`, `users_role_id`, `users_mode_id`, `users_city`, `users_state`, `users_country`, `users_email`, `users_pic`, `users_designation`, `created_at`, `updated_at`, `users_works_as`, `users_managed_by`, `users_gender`) VALUES
(1, 'Jalaj', 'Minda', '2015-03', '2015-03', 3, 1, 1, 'hyderabad', 'karnataka', 'india', 'mindajalaj@gmail.com', 'assets/images/user4.jpg', 'developer', NULL, '2015-10-31 06:09:32', NULL, 'sameer', 'Male'),
(45, 'sunny', 'rajkotia', '2015-01', '2015-01', 1, 1, 1, 'mumbai', 'maharashtra', 'india', 'sunny.rajkotia@gmail.com', 'assets/images/user6.jpg', 'internship', '2015-03-06 04:15:29', '2015-03-06 04:15:29', NULL, 'sameer', 'Male'),
(46, 'gayatri', 'rachakonda', '2015-01', '2015-01', 1, 1, 1, 'hyderabad', 'karnataka', 'india', 'gayatri.rach@gmail.com', 'assets/images/user2.jpg', 'intern', '2015-03-06 04:18:42', '2015-03-11 10:42:18', NULL, 'sameer', 'Male'),
(47, 'sajal', 'khandelwal', '2015-01', '2015-01', 1, 1, 1, 'delhi', 'karnataka', 'india', 'sajal.kh@gmail.com', 'assets/images/user3.jpg', 'intern', '2015-03-06 04:19:31', '2015-03-11 20:52:55', NULL, 'sameer', 'Male'),
(48, 'abhinav', 'jain', '2015-01', '2015-01', 1, 1, 1, 'banglore', 'karnataka', 'india', 'abhi_jain@gmial.com', 'assets/images/user3.jpg', 'intern', '2015-03-06 04:20:16', '2018-08-13 02:12:12', NULL, 'sameer', 'Male');

-- --------------------------------------------------------

--
-- Table structure for table `users_social_links`
--

CREATE TABLE IF NOT EXISTS `users_social_links` (
  `social_users_id` int(10) unsigned DEFAULT NULL,
  `social_fb` varchar(45) DEFAULT NULL,
  `social_twitter` varchar(45) DEFAULT NULL,
  `social_google` varchar(45) DEFAULT NULL,
  `social_linkedin` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
`social_links_id` int(10) unsigned NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users_social_links`
--

INSERT INTO `users_social_links` (`social_users_id`, `social_fb`, `social_twitter`, `social_google`, `social_linkedin`, `created_at`, `updated_at`, `social_links_id`) VALUES
(45, '', '', '', '', '2015-03-06 04:15:29', '2015-03-06 04:15:29', 19),
(46, '', '', '', '', '2015-03-06 04:18:43', '2015-03-11 10:42:19', 20),
(47, '', '', 'my-google', '', '2015-03-06 04:19:31', '2015-03-11 20:52:55', 21),
(48, '', 'twitter', 'google', '', '2015-03-06 04:20:16', '2018-08-13 02:12:12', 22);

-- --------------------------------------------------------

--
-- Table structure for table `users_status`
--

CREATE TABLE IF NOT EXISTS `users_status` (
  `status_users_id` int(10) unsigned NOT NULL,
  `users_status` varchar(45) DEFAULT 'enabled',
`status_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users_status`
--

INSERT INTO `users_status` (`status_users_id`, `users_status`, `status_id`, `created_at`, `updated_at`) VALUES
(45, 'enabled', 27, '2015-03-06 04:15:29', '2015-03-06 04:15:29'),
(46, 'enabled', 28, '2015-03-06 04:18:43', '2015-03-06 04:18:43'),
(47, 'enabled', 29, '2015-03-06 04:19:31', '2015-03-06 04:19:31'),
(48, 'enabled', 30, '2015-03-06 04:20:16', '2015-03-06 04:20:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
 ADD PRIMARY KEY (`dept_id`);

--
-- Indexes for table `modes`
--
ALTER TABLE `modes`
 ADD PRIMARY KEY (`modes_id`);

--
-- Indexes for table `phone_numbers`
--
ALTER TABLE `phone_numbers`
 ADD PRIMARY KEY (`phone_id`), ADD UNIQUE KEY `phone_number_UNIQUE` (`phone_number`), ADD KEY `frk_phone_users_id` (`phone_users_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
 ADD PRIMARY KEY (`products_id`);

--
-- Indexes for table `product_members`
--
ALTER TABLE `product_members`
 ADD PRIMARY KEY (`prod_mem_id`), ADD UNIQUE KEY `prod_mem_id_UNIQUE` (`prod_mem_id`), ADD KEY `prod_mem_users_id_idx` (`prod_mem_users_id`), ADD KEY `prod_mem_products_id_idx` (`prod_mem_product_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
 ADD PRIMARY KEY (`roles_id`);

--
-- Indexes for table `updates`
--
ALTER TABLE `updates`
 ADD PRIMARY KEY (`updates_id`), ADD KEY `updates_users_id_idx` (`updates_users_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`users_id`), ADD KEY `users_dept_id_idx` (`users_dept_id`), ADD KEY `users_roles_id_idx` (`users_role_id`), ADD KEY `users_modes_id_idx` (`users_mode_id`);

--
-- Indexes for table `users_social_links`
--
ALTER TABLE `users_social_links`
 ADD PRIMARY KEY (`social_links_id`), ADD KEY `social_users_id_idx` (`social_users_id`);

--
-- Indexes for table `users_status`
--
ALTER TABLE `users_status`
 ADD PRIMARY KEY (`status_id`), ADD KEY `status_users_id_idx` (`status_users_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
MODIFY `dept_id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `modes`
--
ALTER TABLE `modes`
MODIFY `modes_id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `phone_numbers`
--
ALTER TABLE `phone_numbers`
MODIFY `phone_id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=328;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
MODIFY `products_id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `product_members`
--
ALTER TABLE `product_members`
MODIFY `prod_mem_id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=159;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
MODIFY `roles_id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `updates`
--
ALTER TABLE `updates`
MODIFY `updates_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=94;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `users_id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=49;
--
-- AUTO_INCREMENT for table `users_social_links`
--
ALTER TABLE `users_social_links`
MODIFY `social_links_id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `users_status`
--
ALTER TABLE `users_status`
MODIFY `status_id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=31;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `phone_numbers`
--
ALTER TABLE `phone_numbers`
ADD CONSTRAINT `frk_phone_users_id` FOREIGN KEY (`phone_users_id`) REFERENCES `users` (`users_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `product_members`
--
ALTER TABLE `product_members`
ADD CONSTRAINT `prod_mem_products_id` FOREIGN KEY (`prod_mem_product_id`) REFERENCES `products` (`products_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
ADD CONSTRAINT `prod_mem_users_id` FOREIGN KEY (`prod_mem_users_id`) REFERENCES `users` (`users_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `updates`
--
ALTER TABLE `updates`
ADD CONSTRAINT `updates_users_id` FOREIGN KEY (`updates_users_id`) REFERENCES `users` (`users_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
ADD CONSTRAINT `users_dept_id` FOREIGN KEY (`users_dept_id`) REFERENCES `departments` (`dept_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
ADD CONSTRAINT `users_modes_id` FOREIGN KEY (`users_mode_id`) REFERENCES `modes` (`modes_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
ADD CONSTRAINT `users_roles_id` FOREIGN KEY (`users_role_id`) REFERENCES `roles` (`roles_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `users_social_links`
--
ALTER TABLE `users_social_links`
ADD CONSTRAINT `social_users_id` FOREIGN KEY (`social_users_id`) REFERENCES `users` (`users_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `users_status`
--
ALTER TABLE `users_status`
ADD CONSTRAINT `status_users_id` FOREIGN KEY (`status_users_id`) REFERENCES `users` (`users_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
