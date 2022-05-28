<?php

//required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

date_default_timezone_set("Brazil/brasilia");

//get database connection and gasstations object
include_once("../config/database.php");
include_once("../objects/gasStatios.php");

//instantiate new objects
$database = new Database();
$db = $database->getConnection();
$gasstations = new Gasstations($db);

//get posted data
$data = json_decode(file_get_contents("php://input"));

//set gasstations property values
$gasstations->name = $data->name;
$gasstations->cnpj = $data->cnpj;
$gasstations->addres = $data->addres;
$gasstations->latitude = $data->latitude;
$gasstations->longitude = $data->longitude;
$gasstations->createdAt = date('Y-m-d H:i:s');

//lets create gasstations now
if($gasstations->create()) {
    echo json_encode(
        array("message"=>"gasstations was created.")
    );
} else { // if unable to create gasstations, notify user
    echo json_encode(
        array("message"=>"Unable to create gasstations.")
    );
}

?>