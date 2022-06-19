<?php
include 'backend/database.php';
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>User Data</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="ajax.js"></script>
</head>

<body>
    <div class="container">
        <p id="success"></p>
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                        <h2> <b>Combustíveis</b></h2>
                    </div>
                    <div class="col-sm-6">
                        <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Adicionar um novo Combustível</span></a>
                        <a href="JavaScript:void(0);" class="btn btn-danger" id="delete_multiple"><i class="material-icons">&#xE15C;</i> <span>Apagar</span></a>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
						<th>
							<span class="custom-checkbox">
								<input type="checkbox" id="selectAll">
								<label for="selectAll"></label>
							</span>
						</th>
						<th>id</th>
                        <th>id do posto de combústivel</th>
                        <th>tipo de combustível</th>
                        <th>preço</th>
                    </tr>
                </thead>
				<tbody>
				
				<?php
				$result = mysqli_query($conn,"SELECT * FROM `fuel` WHERE 1");
					while($row = mysqli_fetch_array($result)) {
				?>
				<tr id="<?php echo $row["id"]; ?>">
				<td>
							<span class="custom-checkbox">
								<input type="checkbox" class="user_checkbox" data-user-id="<?php echo $row["id"]; ?>">
								<label for="checkbox2"></label>
							</span>
						</td>
						<td><?php echo $row["id"]; ?></td>
					<td><?php echo $row["gasstationID"]; ?></td>
					<td><?php echo $row["type"]; ?></td>
					<td><?php echo $row["price"]; ?></td>
					<td>
						<a href="#editEmployeeModal" class="edit" data-toggle="modal">
							<i class="material-icons update" data-toggle="tooltip" 
							data-id="<?php echo $row["id"]; ?>"
							data-gasstationID="<?php echo $row["gasstationID"]; ?>"
							data-type="<?php echo $row["type"]; ?>"
							data-price="<?php echo $row["price"]; ?>"
							title="Editar">&#xE254;</i>
						</a>
						<a href="#deleteEmployeeModal" class="delete" data-id="<?php echo $row["id"]; ?>" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" 
						 title="Apagar">&#xE872;</i></a>
                    </td>
				</tr>
				<?php
				}
				?>
				</tbody>
			</table>
		
		</div>
	</div>
	<!-- Add Modal HTML  -->
	<div id="addEmployeeModal" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
				<form id="user_form">
					<div class="modal-header">						
						<h4 class="modal-title">Adicionar um novo combustível</h4>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">					
						<div class="form-group">
							<label>id do posto de combustível</label>
							<input type="text" id="gasstationID" name="gasstationID" class="form-control" required>
						</div>
						<div class="form-group">
							<label>Tipo de combustível</label>
							<input type="text" id="type" name="type" class="form-control" required>
						</div>
						<div class="form-group">
							<label>preço</label>
							<input type="number" id="price" name="price" class="form-control" required>
						</div>					
					</div>
					<div class="modal-footer">
					    <input type="hidden" value="1" name="theType">
						<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancelar">
						<button type="button" class="btn btn-success" id="btn-add">Adicionar</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!--Edit Modal HTML -->
	<div id="editEmployeeModal" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
				<form id="update_form">
					<div class="modal-header">						
						<h4 class="modal-title">Editar combustível</h4>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">
						<input type="hidden" id="id_u" name="id" class="form-control" required>					
						<div class="form-group">
							<label>id do posto de combústivel</label>
							<input type="text" id="gasstationID_u" name="gasstationID" class="form-control" required>
						</div>
						<div class="form-group">
							<label>tipo de combustível</label>
							<input type="text" id="type_u" name="type" class="form-control" required>
						</div>
						<div class="form-group">
							<label>preço</label>
							<input type="number" id="price_u" name="price" class="form-control" required>
						</div>						
					</div>
					<div class="modal-footer">
					<input type="hidden" value="2" name="theType">
						<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancelar">
						<button type="button" class="btn btn-info" id="update">Atualizar</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- Delete Modal HTML -->
	<div id="deleteEmployeeModal" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
				<form>
					<div class="modal-header">						
						<h4 class="modal-title">Apagar combustível</h4>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">
						<input type="hidden" id="id_d" name="id" class="form-control">					
						<p>Você tem certeza que deseja apagar esse combustível?</p>
						<p class="text-warning"><small>Essa ação não pode ser revertida.</small></p>
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancelar">
						<button type="button" class="btn btn-danger" id="delete">Apagar</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</body>
</html>