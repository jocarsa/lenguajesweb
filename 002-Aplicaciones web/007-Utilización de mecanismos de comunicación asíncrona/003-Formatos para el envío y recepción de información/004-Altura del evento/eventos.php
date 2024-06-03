<?php

    $datos = $_GET['eventos'];
    $decodificado = json_decode($datos);
    $json = json_encode($decodificado, JSON_PRETTY_PRINT);
    $archivo = 'eventos.json';
    file_put_contents($archivo, $json);

?>