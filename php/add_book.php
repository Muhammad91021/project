<?php
session_start();
include "db.php";

if (!isset($_SESSION['admin'])) {
    header("Location: ../login.html");
    exit();
}

if (isset($_POST['title'])) {
    $title = $_POST['title'];
    $author = $_POST['author'];
    $price = $_POST['price'];
    $image = $_POST['image'];

    $sql = "INSERT INTO books (title, author, price, image) VALUES ('$title', '$author', '$price', '$image')";
    mysqli_query($conn, $sql);

    header("Location: ../admin.html?added=1");
    exit();
}
?>
