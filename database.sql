

CREATE DATABASE IF NOT EXISTS kurdish_books;
USE kurdish_books;

CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    image VARCHAR(100) NOT NULL
);


INSERT INTO admins (username, password) VALUES ('admin', 'admin123');

INSERT INTO books (title, author, price, image) VALUES
('Mem u Zin', 'Ehmede Xani', 12.00, 'images/book1.jpg'),
('Shivane Kurmanca', 'Eskere Boyik', 9.50, 'images/book2.jpg'),
('Hawar', 'Celadet Bedirxan', 10.00, 'images/book3.jpg'),
('Bira Qedexe', 'Hesene Mete', 11.50, 'images/book4.jpg'),
('Gulen Kurdistane', 'Cigerxwin', 8.00, 'images/book5.jpg');
