<?php

//required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Mehods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization ,X-Requested-With");

//include files
include_once("../config/database.php");
include_once("../objects/gasStations.php");

//get database connection
$database = new Database;
$db = $database->getConnection();

//prepare gassations object
$gassations = new Gassations($db);

//get gassations_id
$data = json_decode(file_get_contents("php://input"));

//set gassations id to be deleted
$gassations->id = $data->id;

//delete the gassations
if($gassations->delete()) {
    echo '{';
    echo '"message": "gassations Deleted Successfully."';
    echo '}';
} else { //if it unable to do so
    echo '{';
    echo '"message": "Unable to Delete gassations."';
    echo '}';
}

?>