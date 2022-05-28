<?php

//required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-ALlow-Mehods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

//include datbase config and objects
include_once("../config/database.php");
include_once("../objects/gasStations.php");

//instantiating objects
$database = new Database;
$db = $database->getConnection();
$gassations = new Gassations($db);

// set id of gassations
$gassations->id = isset($_GET['id']) ? $_GET['id'] : die();

//read gassations details
$gassations->readOne();

//create gassations array
$gassations_arr = array (
    "id"=> $gassations->id,
    "name"=> $gassations->name,
    "cnpj"=>$gassations->cnpj,
    "addres"=>$gassations->addres,
    "latitude"=>$gassations->latitude,
    "longitude"=>$gassations->longitude
);

//make it json encoded
print_r(json_encode($gassations_arr));
?>