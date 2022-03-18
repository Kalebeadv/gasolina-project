<?php 
include "ClassDB.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
$json = json_decode(file_get_contents('php://input'));
$objDB = new ClassDB();
echo json_encode($objDB->verifyLogin($json->emailUser,$json->passwordUser));
?>