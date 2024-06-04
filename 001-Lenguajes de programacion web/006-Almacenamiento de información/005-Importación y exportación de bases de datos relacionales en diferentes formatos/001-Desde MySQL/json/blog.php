<?php

$host = "localhost"; // MySQL host
$username = "miweb"; // MySQL username
$password = "miweb"; // MySQL password
$database = "miweb"; // MySQL database name

// Connect to MySQL database
$connection = mysqli_connect($host, $username, $password, $database);
mysqli_set_charset($connection, "utf8");
// Check connection
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// SQL query to retrieve data
$sql = "SELECT titulo, fecha, texto,imagen FROM blog";
$result = mysqli_query($connection, $sql);

$data = array();

// Check if there are results
if (mysqli_num_rows($result) > 0) {
    // Fetch associative array
    while ($row = mysqli_fetch_assoc($result)) {
        $entry = array(
            "titulo" => $row["titulo"],
            "fecha" => $row["fecha"],
            "texto" => $row["texto"],
            "imagen" => $row["imagen"]
        );
        $data["entradas"][] = $entry;
    }
}

// Close connection
mysqli_close($connection);

// Convert data to JSON format
$json_data = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

// Output JSON
header('Content-Type: application/json');
echo $json_data;

?>
