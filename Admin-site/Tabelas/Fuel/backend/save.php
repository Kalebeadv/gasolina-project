<?php

include 'database.php';

if(count($_POST) > 0){
    if($_POST['theType'] == 1){
        $gassationID=$_POST['gasstationID'];
        $fueltype=$_POST["type"];
        $price=$_POST["price"];

        $sql = "INSERT INTO `fuel`(`gasstationID`,`type`,`price`)
        VALUES ('$gassationID','$fueltype','$price')";

        if (mysqli_query($conn, $sql)) {
            echo json_encode(array("statusCode"=>200));
        } 
        else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
        mysqli_close($conn);
        
    }
}

if(count($_POST)>0){
    if($_POST["theType"] == 2) {
        $id=$_POST["id"];
        $gasstationID=$_POST["gasstationID"];
        $fueltype=$_POST["type"];
        $price=$_POST["price"];

        $sql = "UPDATE `fuel` SET `id`='$id',`gasstationID`='$gasstationID',
        `type`='$fueltype',`price`='$price' WHERE `id`='$id'";

        if (mysqli_query($conn, $sql)) {
			echo json_encode(array("statusCode"=>200));
		} 
		else {
			echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
		mysqli_close($conn);
    }
}

if(count($_POST)>0){
    if($_POST['type']==3){
       
        $id=$_POST['id'];

        $sql = "DELETE FROM `fuel` where `id`='$id'";

        if (mysqli_query($conn, $sql)) {
			echo $id;
            
		} 
		else {
			echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
		mysqli_close($conn);


    }
}

if(count($_POST)>0){
    if($_POST['type']==4){
        $id=$_POST["id"];

        $sql = "DELETE FROM `fuel` WHERE `id` IN ($id)";

        if (mysqli_query($conn, $sql)) {
			echo $id;
		} 
		else {
			echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
		mysqli_close($conn);
    }
}
?>