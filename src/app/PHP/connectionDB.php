<?php
    header('Access-Control-Allow-Origin: *');
    include 'connectionData.php';
    
    $conexion = new mysqli($server,$user,$pass,$bd);
    $conexion->set_charset('utf8');
    if($conexion->connect_error){
        die('No se pudo establecer la conexion');
    }
?>