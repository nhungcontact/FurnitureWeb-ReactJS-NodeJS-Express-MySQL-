-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 20, 2023 at 06:35 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `ward` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `shippingAdr` text DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `fullName`, `phoneNumber`, `ward`, `district`, `city`, `shippingAdr`, `userId`, `createdAt`, `updatedAt`) VALUES
(5, 'nhungContact', '+8489932938', 'Xã Minh Khương', 'Huyện Hàm Yên', 'Tỉnh Tuyên Quang', '123, street 30/4', 27, '2023-04-09 22:18:17', '2023-04-09 22:18:17'),
(6, 'nhungContact1', '+8489932938', 'Thị trấn Pác Miầu', 'Huyện Bảo Lâm', 'Tỉnh Cao Bằng', 'fasfdsfdsf', 27, '2023-04-09 22:35:04', '2023-04-10 12:53:41');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `writer` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `hidden` tinyint(1) DEFAULT NULL,
  `newBlog` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `name`, `photo`, `writer`, `slug`, `content`, `hidden`, `newBlog`, `createdAt`, `updatedAt`) VALUES
(1, 'Mẹo bảo quản & vệ sinh các đồ nội thất', 'photo-1681962647339-tintuc1.jpg', 'Home\'s team', 'Meo-bao-quan&ve-sinh-cac-do-noi-that', '<ol><li>Đối với nội thất bằng kim loại</li><li class=\"ql-indent-1\">Khi xử lý các vết bẩn thông thường, bạn chỉ cần xịt một chút dung dịch vệ sinh kính và dùng khăn mềm để lau qua.</li><li class=\"ql-indent-1\">Đối với các vết ố vàng, hãy xử lý chúng bằng khăn thấm ít chanh loãng hoặc giấm. Đừng quên lau khô sản phẩm sau khi vệ sinh (để tránh axit trong dung dịch làm kim loại bị hoan gỉ). Phương pháp này cũng có thể sử dụng cho vết gỉ nhưng sử dụng dung dịch đậm đặc hơn, thời gian dùng trên sản phẩm lâu hơn (5-10 phút). Ngoài ra, khoai tây cắt lát cũng có thể thay thế chanh hay giấm.</li><li class=\"ql-indent-1\">Để đánh bóng các vật dụng bằng sắt không gỉ hoặc crom, phủ một ít bột mì lên bề mặt, chà xát, rửa lại với nước và lau thật khô.</li><li class=\"ql-indent-1\">Nếu không sử dụng những chất tẩy tự nhiên (như chanh, giấm, bột mì,...) thì hãy mua những loại dung dịch vệ sinh chuyên dụng cho từng chất liệu bạn nhé. Tuyệt đối không sử dụng giấy nhám hay các sản phẩm có mức độ tẩy rửa quá cao làm hư bề mặt sản phẩm.</li><li>Đối với nội thất có sử dụng chất hiệu da</li><li class=\"ql-indent-1\">Bạn nên tránh để các vật dụng da tiếp xúc trực tiếp với ánh sáng mặt trời làm giảm sắc tố và độ đàn hồi.</li><li class=\"ql-indent-1\">Không sử dụng chất tẩy mạnh, nhiều thành phần xút trong dung dịch.</li><li class=\"ql-indent-1\">Không sử dụng bàn chải để chà các vết bẩn trên bề mặt sản phẩm da. Vì chất liệu này cực kì nhạy cảm nên bạn hãy sử dụng những dụng cụ và chất tẩy rửa chuyên dụng để an tâm hơn bạn nhé.</li><li>Đối với mặt gương, kính</li><li class=\"ql-indent-1\">Để vệ sinh gương thật sạch và sáng, trước tiên bạn hãy cố gắng loại bỏ các vết nước đọng trên gương bằng khăn ướt và khăn khô. Sau đó sử dụng các dung dịch chuyên dụng để lau gương sạch và sáng hơn, lưu ý bạn chỉ nên lau theo một chiều và cố gắng lau hết chiều dài (hoặc ngang) một lượt để hạn chế các vệt nước còn sót lại.</li></ol>', 0, 1, '2023-04-20 10:50:47', '2023-04-20 10:50:47');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `quantity`, `color`, `createdAt`, `updatedAt`, `userId`, `productId`) VALUES
(22, 1, '#050e33', '2023-04-11 12:55:45', '2023-04-11 12:55:45', 27, 7);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Ghế', 'Ghế', '2023-04-06 18:09:37', '2023-04-06 18:09:37'),
(2, 'Sofa', 'Sofa', '2023-04-06 18:09:46', '2023-04-06 18:09:46');

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`id`, `name`, `code`, `createdAt`, `updatedAt`) VALUES
(1, 'Xanh đậm', '#050e33', '2023-04-06 18:10:03', '2023-04-06 18:10:03'),
(2, 'Cam nâu', '#b33e00', '2023-04-06 18:10:23', '2023-04-06 18:10:23'),
(3, 'Trắng sữa', '#cfbebe', '2023-04-06 18:10:39', '2023-04-06 18:10:39'),
(4, 'Chàm', '#939c16', '2023-04-06 20:45:14', '2023-04-06 20:45:14'),
(5, 'Hồng Phấn', '#e189b8', '2023-04-06 20:45:38', '2023-04-06 20:45:38');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `content` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `blogId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `detailorders`
--

CREATE TABLE `detailorders` (
  `id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `orderId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `detailorders`
--

INSERT INTO `detailorders` (`id`, `quantity`, `color`, `price`, `createdAt`, `updatedAt`, `orderId`, `productId`) VALUES
(7, 7, '#939c16', '13100000', '2023-04-10 21:18:11', '2023-04-10 21:18:11', 4, 8),
(8, 6, '#050e33', '31885000', '2023-04-10 21:18:11', '2023-04-10 21:18:11', 4, 7),
(9, 17, '#050e33', '31885000', '2023-04-11 11:42:55', '2023-04-11 11:42:55', 5, 7);

-- --------------------------------------------------------

--
-- Table structure for table `detailproducts`
--

CREATE TABLE `detailproducts` (
  `id` int(11) NOT NULL,
  `qtyProduct` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `colorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `detailproducts`
--

INSERT INTO `detailproducts` (`id`, `qtyProduct`, `createdAt`, `updatedAt`, `productId`, `colorId`) VALUES
(9, 54, '2023-04-08 14:59:08', '2023-04-08 14:59:08', 7, 1),
(10, 50, '2023-04-08 15:04:28', '2023-04-08 15:04:28', 8, 2),
(11, 40, '2023-04-08 15:04:28', '2023-04-08 15:04:28', 8, 4),
(12, 36, '2023-04-08 15:07:22', '2023-04-08 15:07:22', 9, 2),
(13, 70, '2023-04-08 15:09:32', '2023-04-08 15:09:32', 10, 4),
(14, 78, '2023-04-08 15:18:57', '2023-04-08 15:18:57', 11, 2);

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` int(11) NOT NULL,
  `content` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `number` varchar(255) DEFAULT NULL,
  `grandtotal` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `status` enum('processing','shipping','delivered','cancel') DEFAULT 'processing',
  `deliveryDate` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `addressId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `number`, `grandtotal`, `message`, `status`, `deliveryDate`, `userId`, `addressId`, `createdAt`, `updatedAt`) VALUES
(4, '1062543749597', '283010000', NULL, 'processing', NULL, 27, 5, '2023-04-10 21:18:11', '2023-04-10 21:18:11'),
(5, '681613911338', '542045000', NULL, 'processing', NULL, 27, 6, '2023-04-11 11:42:55', '2023-04-11 11:42:55');

-- --------------------------------------------------------

--
-- Table structure for table `productphotos`
--

CREATE TABLE `productphotos` (
  `id` int(11) NOT NULL,
  `path` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productphotos`
--

INSERT INTO `productphotos` (`id`, `path`, `createdAt`, `updatedAt`, `productId`) VALUES
(8, 'productphoto-1680940748707-ghe1-1.jpg', '2023-04-08 14:59:08', '2023-04-08 14:59:08', 7),
(9, 'productphoto-1680940748709-ghe1-2.jpg', '2023-04-08 14:59:08', '2023-04-08 14:59:08', 7),
(10, 'productphoto-1680940748709-ghe1-3.jpg', '2023-04-08 14:59:08', '2023-04-08 14:59:08', 7),
(11, 'productphoto-1680940748731-ghe1-4.jpg', '2023-04-08 14:59:08', '2023-04-08 14:59:08', 7),
(12, 'productphoto-1680940748734-ghe1-5.jpg', '2023-04-08 14:59:08', '2023-04-08 14:59:08', 7),
(13, 'productphoto-1680941068723-ghe2-5.jpg', '2023-04-08 15:04:28', '2023-04-08 15:04:28', 8),
(14, 'productphoto-1680941068724-ghe2-6.jpg', '2023-04-08 15:04:28', '2023-04-08 15:04:28', 8),
(15, 'productphoto-1680941068726-ghe2-7.jpg', '2023-04-08 15:04:28', '2023-04-08 15:04:28', 8),
(16, 'productphoto-1680941068733-ghe2-1.jpg', '2023-04-08 15:04:28', '2023-04-08 15:04:28', 8),
(17, 'productphoto-1680941068734-ghe2-3.jpg', '2023-04-08 15:04:28', '2023-04-08 15:04:28', 8),
(18, 'productphoto-1680941068774-ghe2-4.jpg', '2023-04-08 15:04:29', '2023-04-08 15:04:29', 8),
(19, 'productphoto-1680941068774-ghe2-2.jpg', '2023-04-08 15:04:29', '2023-04-08 15:04:29', 8),
(20, 'productphoto-1680941242679-ghe3-3.jpg', '2023-04-08 15:07:22', '2023-04-08 15:07:22', 9),
(21, 'productphoto-1680941242692-ghe3-1(1).jpg', '2023-04-08 15:07:22', '2023-04-08 15:07:22', 9),
(22, 'productphoto-1680941242692-ghe3-2(1).jpg', '2023-04-08 15:07:22', '2023-04-08 15:07:22', 9),
(23, 'productphoto-1680941242693-ghe3-3(1).jpg', '2023-04-08 15:07:22', '2023-04-08 15:07:22', 9),
(24, 'productphoto-1680941242694-ghe3-4(1).jpg', '2023-04-08 15:07:22', '2023-04-08 15:07:22', 9),
(25, 'productphoto-1680941372998-ghe4-4.jpg', '2023-04-08 15:09:33', '2023-04-08 15:09:33', 10),
(26, 'productphoto-1680941372998-ghe4-1.jpg', '2023-04-08 15:09:33', '2023-04-08 15:09:33', 10),
(27, 'productphoto-1680941372999-ghe4-2.jpg', '2023-04-08 15:09:33', '2023-04-08 15:09:33', 10),
(28, 'productphoto-1680941373005-ghe4-3.jpg', '2023-04-08 15:09:33', '2023-04-08 15:09:33', 10),
(29, 'productphoto-1680941937598-ghe5-5.jpg', '2023-04-08 15:18:57', '2023-04-08 15:18:57', 11);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `discountPer` int(11) DEFAULT NULL,
  `totalQty` int(11) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `hidden` tinyint(1) DEFAULT NULL,
  `newArrival` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `categoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `photo`, `price`, `discount`, `discountPer`, `totalQty`, `slug`, `content`, `hidden`, `newArrival`, `createdAt`, `updatedAt`, `categoryId`) VALUES
(7, 'Ghế tựa da khung gỗ Spencer', 'photo-1680940748251-ghe1.jpg', 31885000, 0, 0, 54, 'Ghe-tua-da-khung-go-Spencer', '<ul><li>Bạn có thể lựa chọn da thật hoặc da thuần chay thân thiện với động vật. </li><li>Khung gỗ tần bì chắc chắn với lớp hoàn thiện là Hồ đào hoặc Óc chó, có đệm mút bọc sợi, cơ chế đẩy lùi bằng thép ẩn.</li></ul>', 0, 1, '2023-04-08 14:59:08', '2023-04-08 14:59:08', 1),
(8, 'Ghế Lucia Wing - Chân kim loại', 'photo-1680941068060-ghe2.jpg', 16400000, 13100000, 20, 90, 'Ghe-Lucia-Wing-Chan-kim-loai', '<ul><li>Khung gỗ chắc chắn và tất cả gỗ đều được sấy bằng lò sấy để tăng độ bền. </li><li>Chân kim loại hoàn thiện bằng Đồng Cổ (có thể tháo rời). </li><li>Ghế có màng và hỗ trợ lưng, có đệm mút bọc sợi. </li><li>Độ vững chắc của ghế: Trên thang điểm từ 1 đến 5 (5 là độ chắc chắn nhất), đó là 3. </li><li>Đệm ngồi được gắn một nửa và không thể đảo ngược với các lớp bọc có khóa ké.</li></ul>', 0, 0, '2023-04-08 15:04:28', '2023-04-08 15:04:28', 1),
(9, 'Ghế mây Savannah', 'photo-1680941242393-ghe3.jpg', 16400000, 14700000, 10, 36, 'Ghe-may-Savannah', '<p>- Mây đan xung quanh khung kim loại.&nbsp;</p><p>- Được bao phủ trong một kết thúc tự nhiên.&nbsp;</p><p>- Buộc bằng vỏ mây.&nbsp;</p><p>- Đệm làm bằng polyester được bao phủ bằng Sợi dệt lanh nhuộm (78% polyester, 22% vải lanh) ở Alabaster.&nbsp;</p><p>- Độ chắc của ghế: Trung bình. Trên thang điểm từ 1 đến 5 (5 là chắc chắn nhất), đó là 3.</p>', 0, 1, '2023-04-08 15:07:22', '2023-04-08 15:07:22', 1),
(10, 'Ghế xoay xếp ly Roar & Rabbit™', 'photo-1680941372867-ghe4.jpg', 22265000, 0, 0, 70, 'Ghe-xoay-xep-ly-Roar&Rabbit', '<ul><li>Được tạo ra với sự cộng tác của Roar &amp; Rabbit. </li><li>Khung gỗ chắc chắn và đệm mút bọc sợi. </li><li>Đệm lỏng, có thể đảo ngược (loại trừ Astor Velvet) với nắp zip-off và đế xoay bằng kim loại.</li></ul>', 0, 1, '2023-04-08 15:09:32', '2023-04-08 15:09:32', 1),
(11, 'Ghế hang dệt', 'photo-1680941937312-ghe5.jpg', 16490000, 0, 0, 78, 'Ghe-hang-det', '<ul><li>Mang đến cho bạn sự cộng tác với Pottery Barn Teen. </li><li>Đan lát tự nhiên đan lát. Khung sắt. </li><li>Đệm có thể tháo rời. Vỏ đệm bông ép tự nhiên có thể giặt bằng máy.</li></ul>', 0, 0, '2023-04-08 15:18:57', '2023-04-08 15:18:57', 1);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'user', '2023-04-08 10:47:25', '2023-04-08 10:47:25'),
(2, 'admin', '2023-04-08 10:47:25', '2023-04-08 10:47:25');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('migration-create-address.js'),
('migration-create-blog.js'),
('migration-create-cart.js'),
('migration-create-category.js'),
('migration-create-color.js'),
('migration-create-comment.js'),
('migration-create-detailorder.js'),
('migration-create-detailproduct.js'),
('migration-create-feedback.js'),
('migration-create-order.js'),
('migration-create-product.js'),
('migration-create-productphoto.js'),
('migration-create-role.js'),
('migration-create-user.js'),
('migration-create-userrole.js');

-- --------------------------------------------------------

--
-- Table structure for table `userroles`
--

CREATE TABLE `userroles` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userroles`
--

INSERT INTO `userroles` (`id`, `userId`, `roleId`, `createdAt`, `updatedAt`) VALUES
(2, 27, 1, '2023-04-08 15:51:51', '2023-04-08 15:51:51');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `phoneNumber`, `createdAt`, `updatedAt`) VALUES
(27, 'admin', 'admin@gmail.com', '$2a$10$2kUD3F.bL4TaztvOCzpSfeXCGQyX85oGF68t1mtsqRGUhOeKcs7de', '+8489932937', '2023-04-08 15:51:51', '2023-04-10 12:53:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blogId` (`blogId`);

--
-- Indexes for table `detailorders`
--
ALTER TABLE `detailorders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderId` (`orderId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `detailproducts`
--
ALTER TABLE `detailproducts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `colorId` (`colorId`);

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `addressId` (`addressId`);

--
-- Indexes for table `productphotos`
--
ALTER TABLE `productphotos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `userroles`
--
ALTER TABLE `userroles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `roleId` (`roleId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `detailorders`
--
ALTER TABLE `detailorders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `detailproducts`
--
ALTER TABLE `detailproducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `productphotos`
--
ALTER TABLE `productphotos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `userroles`
--
ALTER TABLE `userroles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`blogId`) REFERENCES `blogs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `detailorders`
--
ALTER TABLE `detailorders`
  ADD CONSTRAINT `detailorders_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `detailorders_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `detailproducts`
--
ALTER TABLE `detailproducts`
  ADD CONSTRAINT `detailproducts_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `detailproducts_ibfk_2` FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD CONSTRAINT `feedbacks_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `feedbacks_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`addressId`) REFERENCES `addresses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `productphotos`
--
ALTER TABLE `productphotos`
  ADD CONSTRAINT `productphotos_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userroles`
--
ALTER TABLE `userroles`
  ADD CONSTRAINT `userroles_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userroles_ibfk_2` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
