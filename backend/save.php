<?php
include 'database.php';

if(count($_POST)>0){
	if($_POST['type']==1){
		$cnpj=$_POST['cnpj'];
		$name=$_POST['name'];
		$latitude=$_POST['latitude'];
		$longitude=$_POST['longitude'];
		$sql = "INSERT INTO `gasstations`(`cnpj`, `name`, `latitude`, `longitude`) 
		VALUES ('$cnpj','$name','$latitude','$longitude')";
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
	if($_POST['type']==2){
		$id=$_POST['id'];
		$cnpj=$_POST['cnpj'];
		$name=$_POST['name'];
		$latitude=$_POST['latitude'];
		$longitude=$_POST['longitude'];
		$sql = "UPDATE `gasstations` SET `id`='$id',`cnpj`='$cnpj',`name`='$name'
				,`latitude`='$latitude',`longitude`='$longitude' WHERE `id`='$id'";
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
		$sql = "DELETE FROM `gasstations` WHERE id=$id ";
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
		$id=$_POST['id'];
		$sql = "DELETE FROM gasstations WHERE id in ($id)";
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