<?php

//require headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

//include database config and objects file
include_once("../config/database.php");
include_once("../objects/gasStations.php");

//create database and gasstations object
$database = new Database;
$db = $database->getConnection();
$gasstations = new Gasstations($db);

//get keywords
$keywords = isset($_GET['s']) ? $_GET['s'] : "";

//query gasstationss
$stmt = $gasstations->search($keywords);
$num = $stmt->rowCount();

//check if more than 0 records found
if($num > 0) {

    //creating gasstationss array
    $gasstationss_arr = array();
    $gasstationss_arr['records'] = array();

    //retrieve our table contents
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        //extract contents
        extract($row);

        $gasstations_item = array(
            "id" => $id,
            "name" => $name,
            "cnpj" => $cnpj,
            "address" => $address,
            "latitude" => $latitude,
            "longitude" => $longitude
        );

        array_push($gasstationss_arr['records'], $gasstations_item);
    }
    echo json_encode($gasstationss_arr);
} else {
    echo json_encode(
        array("message"=>"No gasstationss Found.")
    );
}

?>