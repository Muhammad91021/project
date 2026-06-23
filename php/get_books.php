<?php
include "db.php";

$books = array();
$sql = "SELECT * FROM books";
$result = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $books[] = $row;
}

header('Content-Type: application/json');
echo json_encode($books);
?>
