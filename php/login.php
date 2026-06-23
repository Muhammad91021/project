<?php
session_start();
include "db.php";

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM admins WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $_SESSION['admin'] = $username;
        header("Location: ../admin.html");
        exit();
    } else {
        header("Location: ../login.html?error=1");
        exit();
    }
}
?>
