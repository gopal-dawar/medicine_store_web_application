-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: medicinestore_db
-- ------------------------------------------------------
-- Server version	8.0.43

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
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `price` decimal(38,2) NOT NULL,
  `quantity` int NOT NULL,
  `status` varchar(255) NOT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `user_id` bigint NOT NULL,
  `medicine_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKnodt9bakogrpysvep43i4ekvn` (`medicine_id`),
  CONSTRAINT `FKnodt9bakogrpysvep43i4ekvn` FOREIGN KEY (`medicine_id`) REFERENCES `medicines` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK46ccwnsi9409t36lurvtyljak` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (4,'Antibiotics'),(3,'Cold & Cough'),(11,'Dental Care'),(5,'Diabetes'),(7,'Digestive Care'),(10,'Eye Care'),(2,'Fever'),(6,'Heart Care'),(1,'Pain Relief'),(8,'Skin Care'),(9,'Vitamins & Supplements');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicines`
--

DROP TABLE IF EXISTS `medicines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicines` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `description` text,
  `dosage` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(38,2) NOT NULL,
  `stock` int NOT NULL,
  `category_id` bigint NOT NULL,
  `active` bit(1) NOT NULL,
  `batch_number` varchar(255) DEFAULT NULL,
  `manufacture_date` date DEFAULT NULL,
  `manufacturer` varchar(255) DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqbn1lp5oowd0xediqblou57wn` (`category_id`),
  CONSTRAINT `FKqbn1lp5oowd0xediqblou57wn` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=259 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicines`
--

LOCK TABLES `medicines` WRITE;
/*!40000 ALTER TABLE `medicines` DISABLE KEYS */;
INSERT INTO `medicines` VALUES (9,'Cipla',NULL,'Pain relief tablet','1 Tablet Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772351579/ueal8kiiolab4pynyr68.jpg','Paracetamol 500mg',30.00,200,1,_binary '','PR001','2025-01-01','Cipla','2027-01-01'),(10,'Abbott',NULL,'Pain and inflammation relief','1 Tablet After Meal','https://res.cloudinary.com/dbbckedpq/image/upload/v1772334282/qra2bwobvdcbcryo3et9.jpg','Ibuprofen 400mg',45.00,150,1,_binary '','PR002','2025-01-01','Abbott','2027-01-01'),(11,'Sun Pharma',NULL,'Pain relief medicine','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772334297/pvnynxx4bzvk0cyiiwek.jpg','Diclofenac',50.00,8,1,_binary '','PR003','2025-01-01','Sun Pharma','2027-01-01'),(12,'Dr Reddy',NULL,'Joint pain relief','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772351597/a5lzmnben3lkvddzrgkg.jpg','Naproxen',60.00,120,1,_binary '','PR004','2025-01-01','Dr Reddy','2027-01-01'),(13,'Bayer',NULL,'Pain relief','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772351614/ugn1yi1nw3tbiof1v4oi.jpg','Aspirin',20.00,300,1,_binary '','PR005','2025-01-01','Bayer','2027-01-01'),(14,'Intas',NULL,'Muscle pain relief','1 Tablet Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772351630/plrvhnkz97vbvtpwuooo.jpg','Aceclofenac',55.00,140,1,_binary '','PR006','2025-01-01','Intas','2027-01-01'),(15,'Pfizer',NULL,'Moderate pain relief','As Prescribed','https://res.cloudinary.com/dbbckedpq/image/upload/v1772351645/ns0qlrd9s6c2p0jja61g.jpg','Tramadol',80.00,90,1,_binary '','PR007','2025-01-01','Pfizer','2027-01-01'),(16,'Torrent',NULL,'Severe pain relief','As Prescribed','https://res.cloudinary.com/dbbckedpq/image/upload/v1772351671/bsfdrihqioqmc2sjxxzo.jpg','Ketorolac',90.00,70,1,_binary '','PR008','2025-01-01','Torrent','2027-01-01'),(17,'Zydus',NULL,'Pain relief capsule','1 Capsule Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772252026/ke6jkyuvqgmx94zyyij2.jpg','Piroxicam',65.00,196,1,_binary '','PR009','2025-01-01','Zydus','2027-01-01'),(18,'Lupin',NULL,'Pain relief','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772351691/cxv3cwiqar8pctb3auqm.jpg','Etodolac',75.00,4,1,_binary '','PR010','2025-01-01','Lupin','2027-01-01'),(89,'Johnson & Johnson',NULL,'Cough suppressant syrup','5ml Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772351732/ob5tfkefhe5bavttab9o.webp','Benadryl Syrup',95.00,120,3,_binary '','CC001','2025-01-01','Johnson & Johnson','2027-01-01'),(90,'Pfizer',NULL,'Dry cough relief','5ml Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772351759/mscvapztipndwvtsut8z.jpg','Corex Syrup',110.00,100,3,_binary '','CC002','2025-01-01','Pfizer','2027-01-01'),(91,'Glenmark',NULL,'Productive cough relief','5ml Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772351782/pwlhyqezwvecnjfmwsmo.jpg','Ascoril LS',125.00,140,3,_binary '','CC003','2025-01-01','Glenmark','2027-01-01'),(92,'Vicks',NULL,'Cold and cough relief','10ml At Night','https://res.cloudinary.com/dbbckedpq/image/upload/v1772351812/yxvqerxpjqa4u5dydjl4.jpg','Vicks Nyquil',150.00,90,3,_binary '','CC004','2025-01-01','Vicks','2027-01-01'),(93,'Himalaya',NULL,'Herbal cough syrup','5ml Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772351830/f7sdflffzehnij3ibkmb.jpg','Koflet Syrup',85.00,160,3,_binary '','CC005','2025-01-01','Himalaya','2027-01-01'),(94,'Abbott',NULL,'Cough and cold relief','5ml Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772351853/c0qcoqe2gvzvvamr3hvj.jpg','Chericof',105.00,130,3,_binary '','CC006','2025-01-01','Abbott','2027-01-01'),(95,'Glenmark',NULL,'Cough suppressant','5ml Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772351871/kqgiw95kss7vr1sq70ll.jpg','Alex Syrup',115.00,110,3,_binary '','CC007','2025-01-01','Glenmark','2027-01-01'),(96,'Centaur',NULL,'Cold and nasal congestion relief','1 Tablet Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772351894/qozyxcpijtp2vhvselzw.jpg','Sinarest',45.00,200,3,_binary '','CC008','2025-01-01','Centaur','2027-01-01'),(97,'Mankind',NULL,'Cough syrup','5ml Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772351946/djofi0fyltpjeijwtyxu.jpg','Codistar',90.00,150,3,_binary '','CC009','2025-01-01','Mankind','2027-01-01'),(98,'Torrent',NULL,'Dry cough relief','5ml Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352013/tezwh1jkaegjdujfznu2.jpg','Torex',100.00,125,3,_binary '','CC010','2025-01-01','Torrent','2027-01-01'),(99,'Cipla',NULL,'Broad spectrum antibiotic','1 Capsule Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352202/hh4vbtwnxhi1d6rtybow.jpg','Amoxicillin 500mg',120.00,100,4,_binary '','AB001','2025-01-01','Cipla','2027-01-01'),(100,'Sun Pharma',NULL,'Bacterial infection treatment','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352226/evn2orr2wwvbwbyh0mqb.jpg','Azithromycin 500mg',180.00,90,4,_binary '','AB002','2025-01-01','Sun Pharma','2027-01-01'),(101,'Lupin',NULL,'Antibiotic capsule','1 Capsule Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352246/ljchrjsgtcjk2nbdm22v.jpg','Cefixime',160.00,85,4,_binary '','AB003','2025-01-01','Lupin','2027-01-01'),(102,'Dr Reddy',NULL,'Urinary infection treatment','1 Tablet Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352311/rfberodtumt8ktsv4s8s.jpg','Ciprofloxacin',140.00,95,4,_binary '','AB004','2025-01-01','Dr Reddy','2027-01-01'),(103,'Pfizer',NULL,'Bacterial infection','1 Capsule Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352360/yqfrbg3emsc3l3bdrpbh.jpg','Doxycycline',130.00,110,4,_binary '','AB005','2025-01-01','Pfizer','2027-01-01'),(104,'Abbott',NULL,'Respiratory infection','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352417/xvoibibsnrkcrxppknh4.jpg','Levofloxacin',200.00,80,4,_binary '','AB006','2025-01-01','Abbott','2027-01-01'),(105,'Sun Pharma',NULL,'Antibiotic tablet','1 Tablet Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352449/ysw6vggikjkn4yjleboa.jpg','Clarithromycin',190.00,75,4,_binary '','AB007','2025-01-01','Sun Pharma','2027-01-01'),(106,'Alkem',NULL,'Anaerobic infection','1 Tablet Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352468/ebfv60wzjg8ounjlvshz.jpg','Metronidazole',90.00,150,4,_binary '','AB008','2025-01-01','Alkem','2027-01-01'),(107,'Cipla',NULL,'Bacterial infection','1 Tablet Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352526/ejydwgxwzw1au84hlz2g.jpg','Ofloxacin',125.00,120,4,_binary '','AB009','2025-01-01','Cipla','2027-01-01'),(108,'Mankind',NULL,'Severe infection treatment','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352593/ippvpsfkelo5ewrfwz1n.jpg','Linezolid',450.00,60,4,_binary '','AB010','2025-01-01','Mankind','2027-01-01'),(129,'Pfizer',NULL,'Blood pressure control','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352618/wwrdcrtp0mrgdl0qu2hc.jpg','Amlodipine',55.00,180,6,_binary '','HC001','2025-01-01','Pfizer','2027-01-01'),(130,'Ranbaxy',NULL,'Cholesterol control','1 Tablet Night','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352649/laqwzf1ckrqys0awqrfj.jpg','Atorvastatin',85.00,160,6,_binary '','HC002','2025-01-01','Ranbaxy','2027-01-01'),(131,'Torrent',NULL,'Hypertension medicine','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352698/bsmczzdsq5mpiktlao4o.jpg','Losartan',70.00,170,6,_binary '','HC003','2025-01-01','Torrent','2027-01-01'),(132,'Sun Pharma',NULL,'Heart rate control','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352724/j1e2vfda86qcizmaayih.jpg','Metoprolol',65.00,150,6,_binary '','HC004','2025-01-01','Sun Pharma','2027-01-01'),(133,'Dr Reddy',NULL,'Blood thinner','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352746/njzjbrpak4po2tlpznze.jpg','Clopidogrel',120.00,110,6,_binary '','HC005','2025-01-01','Dr Reddy','2027-01-01'),(134,'Bayer',NULL,'Heart attack prevention','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352767/ye05qroxtrsf79jdhbsz.jpg','Aspirin Cardio',45.00,200,6,_binary '','HC006','2025-01-01','Bayer','2027-01-01'),(135,'Lupin',NULL,'Blood pressure control','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352798/m09bo6ewcjzvuf40mfqk.jpg','Telmisartan',75.00,140,6,_binary '','HC007','2025-01-01','Lupin','2027-01-01'),(136,'Cipla',NULL,'Cholesterol lowering','1 Tablet Night','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352814/qehbzwilkvcrzminyjb5.jpg','Rosuvastatin',95.00,130,6,_binary '','HC008','2025-01-01','Cipla','2027-01-01'),(137,'Abbott',NULL,'Heart medicine','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352953/apr8qcrvgw73rdrrcvew.jpg','Bisoprolol',80.00,120,6,_binary '','HC009','2025-01-01','Abbott','2027-01-01'),(138,'Zydus',NULL,'Angina treatment','1 Tablet Daily',NULL,'Isosorbide',110.00,100,6,_binary '','HC010','2025-01-01','Zydus','2027-01-01'),(159,'GSK',NULL,'Skin inflammation cream','Apply Twice Daily',NULL,'Betnovate',85.00,140,8,_binary '','SC001','2025-01-01','GSK','2027-01-01'),(160,'Glenmark',NULL,'Fungal infection treatment','Apply Twice Daily',NULL,'Candid Cream',95.00,130,8,_binary '','SC002','2025-01-01','Glenmark','2027-01-01'),(161,'Sun Pharma',NULL,'Skin infection cream','Apply Twice Daily',NULL,'Quadriderm',110.00,120,8,_binary '','SC003','2025-01-01','Sun Pharma','2027-01-01'),(162,'Cipla',NULL,'Fungal infection cream','Apply Twice Daily',NULL,'Clotrimazole',75.00,150,8,_binary '','SC004','2025-01-01','Cipla','2027-01-01'),(163,'Himalaya',NULL,'Skin irritation relief','Apply As Needed',NULL,'Calamine Lotion',60.00,180,8,_binary '','SC005','2025-01-01','Himalaya','2027-01-01'),(164,'Sanofi',NULL,'Wound healing ointment','Apply Twice Daily',NULL,'Soframycin',90.00,130,8,_binary '','SC006','2025-01-01','Sanofi','2027-01-01'),(165,'Abbott',NULL,'Scabies treatment','Apply As Directed',NULL,'Permethrin',100.00,110,8,_binary '','SC007','2025-01-01','Abbott','2027-01-01'),(166,'Pfizer',NULL,'Skin allergy cream','Apply Twice Daily',NULL,'Hydrocortisone',85.00,140,8,_binary '','SC008','2025-01-01','Pfizer','2027-01-01'),(167,'GSK',NULL,'Antibiotic ointment','Apply Twice Daily',NULL,'Neosporin',120.00,100,8,_binary '','SC009','2025-01-01','GSK','2027-01-01'),(168,'Sun Pharma',NULL,'Skin immune treatment','Apply Once Daily',NULL,'Tacrolimus',150.00,90,8,_binary '','SC010','2025-01-01','Sun Pharma','2027-01-01'),(169,'Redoxon',NULL,'Immunity booster','1 Tablet Daily',NULL,'Vitamin C',110.00,160,9,_binary '','VT001','2025-01-01','Redoxon','2027-01-01'),(170,'Uprise',NULL,'Bone health supplement','1 Capsule Weekly',NULL,'Vitamin D3',180.00,120,9,_binary '','VT002','2025-01-01','Uprise','2027-01-01'),(171,'Pfizer',NULL,'Vitamin B complex','1 Capsule Daily',NULL,'Becosules',95.00,140,9,_binary '','VT003','2025-01-01','Pfizer','2027-01-01'),(172,'Apex',NULL,'Multivitamin tablet','1 Tablet Daily',NULL,'Zincovit',105.00,130,9,_binary '','VT004','2025-01-01','Apex','2027-01-01'),(173,'Merck',NULL,'Nerve health','1 Tablet Daily',NULL,'Neurobion',90.00,150,9,_binary '','VT005','2025-01-01','Merck','2027-01-01'),(174,'Novartis',NULL,'Calcium supplement','1 Tablet Daily',NULL,'Calcium Sandoz',115.00,120,9,_binary '','VT006','2025-01-01','Novartis','2027-01-01'),(175,'Sun Pharma',NULL,'Energy capsule','1 Capsule Daily',NULL,'Revital H',140.00,110,9,_binary '','VT007','2025-01-01','Sun Pharma','2027-01-01'),(176,'Himalaya',NULL,'Liver health','2 Tablets Daily',NULL,'Liv 52',130.00,100,9,_binary '','VT008','2025-01-01','Himalaya','2027-01-01'),(177,'Abbott',NULL,'Iron deficiency','1 Tablet Daily',NULL,'Iron Folic',85.00,160,9,_binary '','VT009','2025-01-01','Abbott','2027-01-01'),(178,'Ensure',NULL,'Nutrition supplement','As Required',NULL,'Protein Powder',650.00,60,9,_binary '','VT010','2025-01-01','Ensure','2027-01-01'),(179,'Allergan',NULL,'Dry eye lubricant','2 Drops Twice Daily',NULL,'Refresh Tears',180.00,120,10,_binary '','EC001','2025-01-01','Allergan','2027-01-01'),(180,'Cipla',NULL,'Eye lubrication drops','2 Drops Twice Daily',NULL,'Lubistar',150.00,130,10,_binary '','EC002','2025-01-01','Cipla','2027-01-01'),(181,'Sun Pharma',NULL,'Eye infection drops','1 Drop Thrice Daily',NULL,'Moxifloxacin Drops',220.00,90,10,_binary '','EC003','2025-01-01','Sun Pharma','2027-01-01'),(182,'Alcon',NULL,'Antibiotic eye drops','1 Drop Twice Daily',NULL,'Tobramycin',210.00,100,10,_binary '','EC004','2025-01-01','Alcon','2027-01-01'),(183,'Sun Pharma',NULL,'Eye dilation drops','As Prescribed',NULL,'Cyclopentolate',190.00,80,10,_binary '','EC005','2025-01-01','Sun Pharma','2027-01-01'),(184,'Pfizer',NULL,'Fungal eye infection','1 Drop Daily',NULL,'Natamycin',260.00,70,10,_binary '','EC006','2025-01-01','Pfizer','2027-01-01'),(185,'Allergan',NULL,'Eye pain relief','1 Drop Twice Daily',NULL,'Ketorolac Drops',170.00,110,10,_binary '','EC007','2025-01-01','Allergan','2027-01-01'),(186,'Alcon',NULL,'Eye allergy drops','1 Drop Daily',NULL,'Olopatadine',200.00,95,10,_binary '','EC008','2025-01-01','Alcon','2027-01-01'),(187,'Cipla',NULL,'Eye inflammation','As Prescribed',NULL,'Prednisolone Drops',185.00,85,10,_binary '','EC009','2025-01-01','Cipla','2027-01-01'),(188,'Johnson & Johnson',NULL,'Eye redness relief','1 Drop Twice Daily',NULL,'Visine',160.00,120,10,_binary '','EC010','2025-01-01','Johnson & Johnson','2027-01-01'),(189,'Colgate',NULL,'Cavity protection toothpaste','Use Twice Daily',NULL,'Colgate Toothpaste',110.00,200,11,_binary '','DC001','2025-01-01','Colgate','2027-01-01'),(190,'GSK',NULL,'Sensitive teeth care','Use Twice Daily',NULL,'Sensodyne Toothpaste',135.00,180,11,_binary '','DC002','2025-01-01','GSK','2027-01-01'),(191,'Unilever',NULL,'Fresh breath toothpaste','Use Twice Daily',NULL,'Closeup Toothpaste',95.00,210,11,_binary '','DC003','2025-01-01','Unilever','2027-01-01'),(192,'Johnson & Johnson',NULL,'Antiseptic mouthwash','10ml Twice Daily',NULL,'Listerine Mouthwash',160.00,150,11,_binary '','DC004','2025-01-01','Johnson & Johnson','2027-01-01'),(193,'ICPA',NULL,'Mouth ulcer gel','Apply Twice Daily',NULL,'Hexigel',90.00,140,11,_binary '','DC005','2025-01-01','ICPA','2027-01-01'),(194,'Dr Reddy',NULL,'Dental pain relief gel','Apply 3 Times Daily',NULL,'Dologel CT',85.00,160,11,_binary '','DC006','2025-01-01','Dr Reddy','2027-01-01'),(195,'Abbott',NULL,'Tooth enamel protection','Apply Twice Daily',NULL,'Toothmin Gel',120.00,130,11,_binary '','DC007','2025-01-01','Abbott','2027-01-01'),(196,'Ipca',NULL,'Dental pain tablet','1 Tablet As Needed',NULL,'Zerodol P',65.00,170,11,_binary '','DC008','2025-01-01','Ipca','2027-01-01'),(197,'Win Medicare',NULL,'Throat & oral antiseptic','Gargle Twice Daily',NULL,'Betadine Gargle',150.00,120,11,_binary '','DC009','2025-01-01','Win Medicare','2027-01-01'),(198,'Glenmark',NULL,'Oral fungal infection','Apply Twice Daily',NULL,'Candid Mouth Gel',105.00,110,11,_binary '','DC010','2025-01-01','Glenmark','2027-01-01'),(199,'Cipla',NULL,'Fever reducer','5ml Twice Daily',NULL,'Paracetamol Syrup',35.00,150,2,_binary '','FV001','2025-01-01','Cipla','2027-01-01'),(200,'GSK',NULL,'Fever tablet','1 Tablet Daily',NULL,'Crocin',25.00,200,2,_binary '','FV002','2025-01-01','GSK','2027-01-01'),(201,'GSK',NULL,'Fever relief','1 Tablet Daily',NULL,'Calpol',30.00,180,2,_binary '','FV003','2025-01-01','GSK','2027-01-01'),(202,'Micro Labs',NULL,'High fever tablet','1 Tablet Daily',NULL,'Dolo 650',40.00,160,2,_binary '','FV004','2025-01-01','Micro Labs','2027-01-01'),(203,'Sun Pharma',NULL,'Fever medicine','1 Tablet Daily',NULL,'Metacin',45.00,5,2,_binary '','FV005','2025-01-01','Sun Pharma','2027-01-01'),(204,'Pfizer',NULL,'Cold fever relief','1 Tablet Daily',NULL,'Febrex',50.00,130,2,_binary '','FV006','2025-01-01','Pfizer','2027-01-01'),(205,'Ipca',NULL,'Fever reducer','1 Tablet Daily',NULL,'Pacimol',28.00,210,2,_binary '','FV007','2025-01-01','Ipca','2027-01-01'),(206,'Abbott',NULL,'Fever & pain','1 Tablet Daily',NULL,'Brufen',55.00,120,2,_binary '','FV008','2025-01-01','Abbott','2027-01-01'),(207,'Sanofi',NULL,'Fever relief','1 Tablet Daily',NULL,'Combiflam',60.00,110,2,_binary '','FV009','2025-01-01','Sanofi','2027-01-01'),(208,'Pfizer',NULL,'Fever relief','1 Tablet Daily',NULL,'Anacin',48.00,125,2,_binary '','FV010','2025-01-01','Pfizer','2027-01-01'),(209,'Sun Pharma',NULL,'Blood sugar control','1 Tablet Twice Daily',NULL,'Metformin 500mg',60.00,200,5,_binary '','DB001','2025-01-01','Sun Pharma','2027-01-01'),(210,'Sanofi',NULL,'Diabetes tablet','1 Tablet Daily',NULL,'Glimipiride',75.00,180,5,_binary '','DB002','2025-01-01','Sanofi','2027-01-01'),(211,'Abbott',NULL,'Post meal sugar control','1 Tablet Daily',NULL,'Voglibose',90.00,160,5,_binary '','DB003','2025-01-01','Abbott','2027-01-01'),(212,'MSD',NULL,'Blood glucose control','1 Tablet Daily',NULL,'Sitagliptin',160.00,120,5,_binary '','DB004','2025-01-01','MSD','2027-01-01'),(213,'Lupin',NULL,'Type 2 diabetes','1 Tablet Daily',NULL,'Pioglitazone',85.00,150,5,_binary '','DB005','2025-01-01','Lupin','2027-01-01'),(214,'Novo Nordisk',NULL,'Long acting insulin','As Prescribed',NULL,'Insulin Glargine',650.00,50,5,_binary '','DB006','2025-01-01','Novo Nordisk','2027-01-01'),(215,'AstraZeneca',NULL,'Sugar control tablet','1 Tablet Daily',NULL,'Dapagliflozin',210.00,90,5,_binary '','DB007','2025-01-01','AstraZeneca','2027-01-01'),(216,'Janssen',NULL,'Diabetes medicine','1 Tablet Daily',NULL,'Canagliflozin',230.00,80,5,_binary '','DB008','2025-01-01','Janssen','2027-01-01'),(217,'Protinex',NULL,'Energy supplement','As Required',NULL,'Glucose Powder',120.00,140,5,_binary '','DB009','2025-01-01','Protinex','2027-01-01'),(218,'Bayer',NULL,'Post meal sugar control','1 Tablet Daily',NULL,'Acarbose',170.00,70,5,_binary '','DB010','2025-01-01','Bayer','2027-01-01'),(219,'Sun Pharma',NULL,'Acid reflux control','1 Tablet Before Meal',NULL,'Pantoprazole',55.00,180,7,_binary '','DG001','2025-01-01','Sun Pharma','2027-01-01'),(220,'Dr Reddy',NULL,'Acidity relief','1 Capsule Daily',NULL,'Omeprazole',50.00,170,7,_binary '','DG002','2025-01-01','Dr Reddy','2027-01-01'),(221,'Abbott',NULL,'Indigestion relief','10ml After Meal',NULL,'Digene',40.00,200,7,_binary '','DG003','2025-01-01','Abbott','2027-01-01'),(222,'Pfizer',NULL,'Gas relief','1 Tablet After Meal',NULL,'Gelusil',45.00,160,7,_binary '','DG004','2025-01-01','Pfizer','2027-01-01'),(223,'Abbott',NULL,'Constipation relief','10ml Night',NULL,'Cremaffin',65.00,140,7,_binary '','DG005','2025-01-01','Abbott','2027-01-01'),(224,'Torrent',NULL,'Nausea control','1 Tablet Daily',NULL,'Domperidone',35.00,190,7,_binary '','DG006','2025-01-01','Torrent','2027-01-01'),(225,'GSK',NULL,'Acidity relief','1 Tablet Daily',NULL,'Ranitidine',30.00,210,7,_binary '','DG007','2025-01-01','GSK','2027-01-01'),(226,'Dabur',NULL,'Natural laxative','As Required',NULL,'Isabgol',90.00,120,7,_binary '','DG008','2025-01-01','Dabur','2027-01-01'),(227,'Abbott',NULL,'Constipation syrup','10ml Night',NULL,'Lactulose',70.00,130,7,_binary '','DG009','2025-01-01','Abbott','2027-01-01'),(228,'GSK',NULL,'Instant acidity relief','1 Sachet',NULL,'Eno',25.00,220,7,_binary '','DG010','2025-01-01','GSK','2027-01-01'),(234,'GSK',NULL,'Fever tablet','1 Tablet Daily',NULL,'Crocin',30.00,5,2,_binary '','LS001','2025-01-01','GSK','2027-01-01'),(235,'Novo Nordisk',NULL,'Diabetes injection','As Prescribed',NULL,'Insulin',650.00,3,5,_binary '','LS002','2025-01-01','Novo Nordisk','2027-01-01'),(236,'GSK',NULL,'Skin cream','Apply Twice Daily',NULL,'Betnovate',85.00,7,8,_binary '','LS003','2025-01-01','GSK','2027-01-01'),(237,'Pfizer',NULL,'BP control','1 Tablet Daily',NULL,'Amlodipine',55.00,9,6,_binary '','LS004','2025-01-01','Pfizer','2027-01-01'),(238,'Abbott',NULL,'Indigestion relief','10ml After Meal',NULL,'Digene',40.00,6,7,_binary '','LS005','2025-01-01','Abbott','2027-01-01'),(244,'Cipla',NULL,'Pain relief','1 Tablet Daily',NULL,'Normal Paracetamol',30.00,8,1,_binary '','OK001','2025-01-01','Cipla','2027-01-01'),(245,'Sun Pharma',NULL,'Antibiotic','1 Tablet Daily',NULL,'Normal Azithromycin',180.00,9,4,_binary '','OK002','2025-01-01','Sun Pharma','2027-01-01'),(246,'Uprise',NULL,'Supplement','1 Capsule Weekly',NULL,'Normal Vitamin D',180.00,7,9,_binary '','OK003','2025-01-01','Uprise','2027-01-01'),(247,'Abbott',NULL,'Dental gel','Apply Twice Daily',NULL,'Normal Tooth Gel',120.00,6,11,_binary '','OK004','2025-01-01','Abbott','2027-01-01'),(248,'Torrent',NULL,'Heart care','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772353473/uwd2rc0ez21mhnpzmxul.jpg','Normal Heart Tablet',75.00,5,6,_binary '','OK005','2025-01-01','Torrent','2027-01-01'),(249,'Cipla',NULL,'Expired pain relief','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772353446/kw5nfsa13gqvmin2wknk.jpg','Paracetamol',25.00,50,1,_binary '\0','EX001','2022-01-01','Cipla','2024-01-01'),(250,'Sun Pharma',NULL,'Expired antibiotic','1 Capsule Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772353308/cdt9y7rlajr0grei7fy3.jpg','Amoxicillin',90.00,20,4,_binary '\0','EX002','2021-06-01','Sun Pharma','2023-12-01'),(251,'Redoxon',NULL,'Expired supplement','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772353169/roccp60ezy9gwj6qp2nf.jpg','Vitamin C',80.00,15,9,_binary '\0','EX003','2022-03-01','Redoxon','2024-02-01'),(252,'Sun Pharma',NULL,'Expired acidity tablet','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772353148/rllapan6duhzn9qt9mv2.jpg','Pantoprazole',40.00,30,7,_binary '\0','EX004','2022-05-01','Sun Pharma','2024-01-15'),(253,'Cipla',NULL,'Expired eye drops','2 Drops Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772353124/hbz4knfnmiz7kwbhuqf2.jpg','Eye Drops',120.00,12,10,_binary '\0','EX005','2022-04-01','Cipla','2024-01-10'),(254,'GSK',NULL,'Fever tablet','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772353098/exvbmwcqnmumaitcgvyq.jpg','Stock Crocin',30.00,5,2,_binary '','LS001','2025-01-01','GSK','2027-01-01'),(255,'Novo Nordisk',NULL,'Diabetes injection','As Prescribed','https://res.cloudinary.com/dbbckedpq/image/upload/v1772353048/hv21341tc9vfxbsuczqq.jpg','Stock Insulin',650.00,3,5,_binary '','LS002','2025-01-01','Novo Nordisk','2027-01-01'),(256,'GSK',NULL,'Skin cream','Apply Twice Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772353027/jk4pjptu5yzv0on8na8g.jpg','Stock Betnovate',85.00,7,8,_binary '','LS003','2025-01-01','GSK','2027-01-01'),(257,'Pfizer',NULL,'BP control','1 Tablet Daily','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352993/rxnel7rnllkyhpwnrkmr.jpg','Stock Amlodipine',55.00,9,6,_binary '','LS004','2025-01-01','Pfizer','2027-01-01'),(258,'Abbott',NULL,'Indigestion relief','10ml After Meal','https://res.cloudinary.com/dbbckedpq/image/upload/v1772352972/o8owzk8epqyt8xz8qeol.jpg','Stock Digene',40.00,6,7,_binary '','LS005','2025-01-01','Abbott','2027-01-01');
/*!40000 ALTER TABLE `medicines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `price` decimal(38,2) NOT NULL,
  `quantity` int NOT NULL,
  `total_price` decimal(38,2) NOT NULL,
  `medicine_id` bigint NOT NULL,
  `order_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKg9h7rx5ml7y47afcha8tiftsk` (`medicine_id`),
  KEY `FKbioxgbv59vetrxe0ejfubep1w` (`order_id`),
  CONSTRAINT `FKbioxgbv59vetrxe0ejfubep1w` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `FKg9h7rx5ml7y47afcha8tiftsk` FOREIGN KEY (`medicine_id`) REFERENCES `medicines` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,30.00,2,60.00,9,1),(2,45.00,1,45.00,10,1),(3,50.00,1,50.00,11,1),(4,55.00,1,55.00,14,2),(5,50.00,1,50.00,11,2),(6,70.00,2,140.00,131,3),(7,45.00,9,405.00,10,4),(8,50.00,7,350.00,11,4),(9,60.00,4,240.00,12,4);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `delivered_date` datetime(6) DEFAULT NULL,
  `delivery_address` varchar(255) NOT NULL,
  `order_code` varchar(255) NOT NULL,
  `order_date` datetime(6) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `total_amount` decimal(38,2) NOT NULL,
  `total_items` int NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKdhk2umg8ijjkg4njg6891trit` (`order_code`),
  KEY `FKq0ny5rek18pjqb8a86pnnyt9d` (`user_id`),
  CONSTRAINT `FKq0ny5rek18pjqb8a86pnnyt9d` FOREIGN KEY (`user_id`) REFERENCES `user_info` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,NULL,'Nagpur','ORD1','2026-02-28 14:29:54.415696','PENDING',155.00,4,1),(2,NULL,'Nagpur','ORD2','2026-02-28 14:46:42.704441','PENDING',105.00,2,3),(3,NULL,'Nagpur','ORD3','2026-03-05 10:26:38.503541','PENDING',140.00,2,3),(4,NULL,'Nagpur','ORD4','2026-03-05 14:29:11.752348','PENDING',995.00,20,1);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_info` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('ADMIN','USER') NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKgnu0k8vv6ptioedbxbfsnan9g` (`email`),
  UNIQUE KEY `UKf2ksd6h8hsjtd57ipfq9myr64` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
INSERT INTO `user_info` VALUES (1,'gopaldawar45@gmail.com','Gopal Dawar','$2a$10$TvxfC8gzXy2w1eX9LwwKTe7xFaZS5F2f3caT9xh0v.u//Ae3MRpBy','USER','gopaldawar'),(2,'ghost@gmail.com','Ghost','$2a$10$scqRM2XrgYivDN7pKNo5Nu6sj6pC1FdTKuiHrHQgKgzQE8SBZofBi','ADMIN','ghost123'),(3,'nileshkhalane4@gmail.com','Nilesh Khalane','$2a$10$1rPrHGnjAYZu5lxoniQjwOWsfVwR8emz1sJMYRoGI5uB5BAXAZmtK','USER','nilesh');
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-05 15:10:08
