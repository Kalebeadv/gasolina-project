<?php

//required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once("../config/core.php");
include_once("../shared/utilities.php");
include_once("../config/database.php");
include_once("../objects/gasStations.php");

// utilities
$utilities = new Utilities();

// instantiate database and gasstations object
$database = new Database;
$db = $database->getConnection();

// initialize object
$gasstations = new Gasstations($db);

// query gasstationss
$stmt = $gasstations->readPaging($from_record_num, $records_per_page);
$num = $stmt->rowCount();

// check if more than 0 records found
if ($num > 0) {
    // gasstationss array
    $gasstationss_arr = array();
    $gasstationss_arr['records'] = array();
    $gasstationss_arr['paging'] = array();

    //retrive table contents
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $gasstations_item = array(
            "id" => $id,
            "name" => $name,
            "cnpj" => $cnpj,
            "adress" => $adress,
            "longitude" => $longitude,
            "latitude" => $latitude
        );
        array_push($gasstationss_arr['records'], $gasstations_item);
    }

    //include paging
    $total_rows = $gasstations->count();
    $page_url = "{$home_url}gasstations/read_paging.php?";
    $paging = $utilities->getPaging($page, $total_rows, $records_per_page, $page_url);
    $gasstationss_arr['paging'] = $paging;

    echo json_encode($gasstationss_arr);

} else {
    echo json_encode(
        array("message"=>"No gasstationss Found.")
    );
}




?>