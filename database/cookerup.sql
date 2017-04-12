-- MySQL dump 10.13  Distrib 5.7.17, for Linux (x86_64)
--
-- Host: localhost    Database: cookerup
-- ------------------------------------------------------
-- Server version	5.7.17-0ubuntu0.16.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Ingredients`
--

DROP TABLE IF EXISTS `Ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Ingredients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ingredient` varchar(30) DEFAULT NULL,
  `amount` varchar(30) DEFAULT NULL,
  `unit` varchar(30) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PostId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ingredients`
--

LOCK TABLES `Ingredients` WRITE;
/*!40000 ALTER TABLE `Ingredients` DISABLE KEYS */;
INSERT INTO `Ingredients` VALUES (1,'all purpose flour','3','Cup','2017-04-12 11:39:04','2017-04-12 11:39:04',2),(2,'active dry yeast','3','Tsp','2017-04-12 11:39:04','2017-04-12 11:39:04',2),(3,'sugar','3','Tsp','2017-04-12 11:39:04','2017-04-12 11:39:04',2),(4,'salt','1','Tsp','2017-04-12 11:39:04','2017-04-12 11:39:04',2),(5,'warm water','1','Cup','2017-04-12 11:39:04','2017-04-12 11:39:04',2),(6,'margarine, oil or butter','1','Tbsp','2017-04-12 11:39:04','2017-04-12 11:39:04',2),(7,'large egg','1','','2017-04-12 11:39:04','2017-04-12 11:39:04',2),(8,'Boneless, skinless chicken bre','4','Piece','2017-04-12 12:31:25','2017-04-12 12:31:25',3),(9,'Salt','','Dash','2017-04-12 12:31:25','2017-04-12 12:31:25',3),(10,'pepper','','Dash','2017-04-12 12:31:25','2017-04-12 12:31:25',3),(11,'Season Salt','','Dash','2017-04-12 12:31:25','2017-04-12 12:31:25',3),(12,'test','3','Drop','2017-04-12 12:40:04','2017-04-12 12:40:04',4),(13,'test','','','2017-04-12 12:45:26','2017-04-12 12:45:26',6),(14,'test','','','2017-04-12 13:04:17','2017-04-12 13:04:17',7),(15,'test','ttest','','2017-04-12 13:04:17','2017-04-12 13:04:17',7),(16,'test','','','2017-04-12 13:04:17','2017-04-12 13:04:17',7),(17,'White Bread','2','Piece','2017-04-12 13:45:22','2017-04-12 13:45:22',8),(18,'Cheese Slice','2','Piece','2017-04-12 13:45:22','2017-04-12 13:45:22',8),(19,'Butter','2','Tbsp','2017-04-12 13:45:22','2017-04-12 13:45:22',8);
/*!40000 ALTER TABLE `Ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Posts`
--

DROP TABLE IF EXISTS `Posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `directions` varchar(2500) DEFAULT NULL,
  `category` varchar(25) DEFAULT NULL,
  `featured` int(1) DEFAULT NULL,
  `sponsored` int(1) DEFAULT NULL,
  `image_path` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Posts`
--

LOCK TABLES `Posts` WRITE;
/*!40000 ALTER TABLE `Posts` DISABLE KEYS */;
INSERT INTO `Posts` VALUES (2,'Easy Home Made Bread','Here is a basic white bread recipe that is quick a','Start by combining all the dry ingredients in a suitable mixing bowl. Then add the rest of the ingredients starting with the warm water. If the mixture seems too wet, then compensate by adding a touch of flour. Once you’re finished mixing, start kneading it with a bit of flour and form it into a ball.\r\n\r\nPreheat your oven to 180 degrees Celsius.\r\n\r\nOnce done place the ball of dough on a cutting board and let it rest for 20 minutes. After 20 minutes, you can roll the dough with your hands into a ','Baking',1,NULL,'homemade-bread.jpg','2017-04-12 11:39:04','2017-04-12 11:39:04'),(3,'Grilled Chicken Breasts','Chicken breasts are one of the most popular and al','Light the grill and leave it on medium high for direct heat grilling. Make sure you clean the grates!\r\n\r\n2Rinse the chicken breasts under cold running water and then blot dry with paper towels.\r\n\r\n3If you have a chicken breast that is really thick on one end, pound it down with a mallet or heavy pan until you get a uniform thickness for the whole breast. This will allow the chicken to cook more evenly.\r\n\r\n4Rub the chicken breasts with a little olive oil.\r\n\r\n5Season you chicken with whatever seas','Bbq',1,NULL,'6a0115721bb963970b0133ee6866f6970b-450wi.jpg','2017-04-12 12:31:25','2017-04-12 12:31:25'),(8,'Grill Cheese','Simple but delicous','Butter one side of the two slices of bread. Place the two slices of cheese onto it. Cook in a frying pan on a medium heat until golden brown. Flip and repeat.','Pub',NULL,NULL,'grilled-cheese-_-sex.jpg','2017-04-12 13:45:22','2017-04-12 13:45:22');
/*!40000 ALTER TABLE `Posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-04-12  9:54:18
