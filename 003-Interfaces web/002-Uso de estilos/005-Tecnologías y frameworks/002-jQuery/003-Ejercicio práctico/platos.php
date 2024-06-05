<?php

    $datos = $_GET['plato'];
    $decodificado = json_decode($datos);
    $json = json_encode($decodificado, JSON_PRETTY_PRINT);
    $archivo = 'pedido.json';
    file_put_contents($archivo, $json);

?>