<?php
include 'database.php';

if(count($_POST)>0){
	if($_POST['type']==1){
		$gasstationid=$_POST['gasstationid'];
		$tyype=$_POST['tyype'];
		$price=$_POST['	price'];
		
		$sql = "INSERT INTO `fuel`(`gasstationid`, `tyype`, `price`) VALUES ('$gasstationid','$tyype','$price') ";
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
		$gasstationid=$_POST['gasstationid'];
		$tyype=$_POST['tyype'];
		$price=$_POST['price'];

		$sql = "UPDATE `fuel` SET `gasstationid`='$gasstationid',`tyype`='$tyype'
				,`price`='$price' WHERE `id`='$id'";
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
		$sql = "DELETE FROM `fuel` WHERE id=$id ";
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
		$sql = "DELETE FROM `fuel` WHERE id in ($id)";
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