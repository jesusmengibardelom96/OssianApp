<?php 
    header('Access-Control-Allow-Origin: *');
    include 'connectionDB.php';

    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);

    $consulta = $conexion -> query("INSERT INTO images 
    (title, description, category, url) 
    VALUES ('$request->title', '$request->description', '$request->category', '$request->url')");
?>