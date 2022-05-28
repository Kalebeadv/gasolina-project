<?php

//require headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

//include database and object files
include_once("../config/database.php");
include_once("../objects/gasStations.php");

//instantiate database and gasstations object
$database = new Database;
$db = $database->getConnection();
$gasstations = new Gasstations($db);

//query gasstationss
$stmt = $gasstations->read();
$num = $stmt->rowCount();

//check if more than 0 records found
if ($num > 0) {

    //creating gasstationss array
    $gasstationss_arr = array();
    $gasstationss_arr['records'] = array();

    //retrieve our table contents
    //fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        //extract row
        //this will make $row['name'] to
        //just $name only
        extract($row);

        $gasstations_item = array(
            "id" => $id,
            "name" => $name,
            "cnpj" => html_entity_decode($cnpj),
            "address" => $address,
            "latitude" => $latitude,
            "longitude" => $longitude
        );

        array_push($gasstationss_arr["records"], $gasstations_item);
    }
    echo json_encode($gasstationss_arr);
} else {
    echo json_encode(
        array("message"=>"No gasstationss Found.")
    );
}
?>