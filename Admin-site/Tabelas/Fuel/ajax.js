$(document).on('click', '#btn-add', function (e){
    var data = $("#user_form").serialize();
    $.ajax({
        data: data,
        type: "post",
        url: "backend/save.php",
        success: function (dataResult){
            var dataResult = JSON.parse(dataResult);
            if(dataResult.statusCode == 200){
                $("addEmployeeModal").modal("hide");
                alert("Novo dado adicionado com sucesso!");
                location.reload();
            }
            else if (dataResult.statusCode == 201){
                alert(dataResult)
            }
        }
    })
});

$(document).on('click', '.update', function (e){
    var id = $(this).attr("data-id");
    var gasstationID = $(this).attr("data-gasstationID");
    let type = $(this).attr("data-type");
    var price = $(this).attr("data-price");
    $('#id_u').val(id)
    $('#gasstationID_u').val(gasstationID)
    $('#type_u').val(type)
    $('#price_u').val(price)
});

//update
$(document).on('click', '#update', function(e){
    var data = $("#update_form").serialize();
    $.ajax({
        data: data,
		type: "post",
		url: "backend/save.php",
		success: function(dataResult){
				var dataResult = JSON.parse(dataResult);
				if(dataResult.statusCode==200){
					$('#editEmployeeModal').modal('hide');
					alert('O dado foi atualizado com sucesso!'); 
					location.reload();						
				}
				else if(dataResult.statusCode==201){
				   alert(dataResult);
				}
		}
    })
});

$(document).on('click', '.delete', function(){
    var id = $(this).attr("data-id");
    $('#id_d').val(id);
	
});

$(document).on("click","#delete", function(){
    $.ajax({
		url: "backend/save.php",
		type: "POST",
		cache: false,
		data: {
			type: 3,
			id: $("#id_d").val()
		},
		success: function (dataResult) {
			$('#deleteEmployeeModal').modal('hide');
			$("#" + dataResult).remove();
		},

		success: function(){
			location.reload();
		}
		
	});
});

$(document).on("click", "#delete_multiple", function () {
	var user = [];
	$(".user_checkbox:checked").each(function () {
		user.push($(this).data('user-id'));
	});
	if (user.length <= 0) {
		alert("Por favor selecione os campos.");
	}
	else {
		WRN_PROFILE_DELETE = "Você tem certeza que deseja apagar " + (user.length > 1 ? "essas colunas?" : "essa coluna?");
		var checked = confirm(WRN_PROFILE_DELETE);
		if (checked == true) {
			var selected_values = user.join(",");
			console.log(selected_values);
			$.ajax({
				type: "POST",
				url: "backend/save.php",
				cache: false,
				data: {
					type: 4,
					id: selected_values
				},
				success: function (response) {
					var ids = response.split(",");
					for (var i = 0; i < ids.length; i++) {
						$("#" + ids[i]).remove();
					}
					window.location.reload();
					
				}
			});
		}
	}
	location.reload();	
});

$(document).ready(function () {
	$('[data-toggle="tooltip"]').tooltip();
	var checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function () {
		if (this.checked) {
			checkbox.each(function () {
				this.checked = true;
			});
		} else {
			checkbox.each(function () {
				this.checked = false;
			});
		}
	});
	checkbox.click(function () {
		if (!this.checked) {
			$("#selectAll").prop("checked", false);
		}
	});
});
