<?php
include 'database.php';

if(count($_POST)>0){
	if($_POST['type']==1){
		$idGasstation=$_POST['idGasstation'];
		$type=$_POST['type'];
		$valor=$_POST['	valor'];
		
		$sql = "INSERT INTO `fuel`(`idGasstation`, `type`, `valor`) 
		VALUES ('$idGasstation','$type','$valor')";
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
		$idGasstation=$_POST['idGasstation'];
		$type=$_POST['type'];
		$valor=$_POST['	valor'];

		$sql = "UPDATE `fuel` SET `id`='$id',`idGasstation`='$idGasstation',`type`='$type'
				,`valor`='$valor' WHERE `id`='$id'";
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