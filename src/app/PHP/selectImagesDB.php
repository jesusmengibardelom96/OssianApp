<?php
    header('Access-Control-Allow-Origin: *');
    include 'connectionDB.php';
    

    $query = $conexion -> query("SELECT * FROM images");

    $arrayImages = array();
    while($row = mysqli_fetch_assoc($query)){

        $arrayImages[] = $row;
    }

    echo json_encode($arrayImages);
    
?>