<?php

//required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Mehods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//include database and object files
include_once("../config/database.php");
include_once("../objects/gasStations.php");

//instantiating database and gasstations objects
$database = new Database;
$db = $database->getConnection();
$gasstations = new Gasstations($db);

//get gasstations id to be edited
$data = json_decode(file_get_contents("php://input"));

//set ID property of gasstations to be edited
$gasstations->id = $data->id;
$gasstations->name = $data->name;
$gasstations->cnpj = $data->cnpj;
$gasstations->address = $data->address;
$gasstations->latitude = $data->latitude;
$gasstations->longitude = $data->longitude;

//update the gasstations
if ($gasstations->update()) {
    echo json_encode(
        array("message"=>"gasstations was updated.")
    );
} else { // if unable to do so
    echo json_encode(
        array("message"=>"Unable to update gasstations.")
    );
}


?>