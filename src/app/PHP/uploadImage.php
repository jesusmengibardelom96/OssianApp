<?php 
header('Access-Control-Allow-Origin: *');
include 'connectionDB.php';

move_uploaded_file($_FILES["myFile"]["tmp_name"], "upload/" . $_FILES["myFile"]["name"]);
?>
