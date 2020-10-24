<?php
    header('Access-Control-Allow-Origin: *');
    include 'connectionDB.php';

    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);

    //$consulta = $conexion -> query("DELETE FROM Alumno WHERE NIA = $request->Id");
    $consulta = $conexion -> query("DELETE FROM images WHERE id = $request->imageId");
?>