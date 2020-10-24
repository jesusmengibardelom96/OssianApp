<?php 
    header('Access-Control-Allow-Origin: *');
    include 'connectionDB.php';

    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);

    $consulta = $conexion -> query("UPDATE images
    SET title = '$request->title', category = '$request->category',
    description = '$request->description', url = '$request->url'
    WHERE id = $request->id");
?>