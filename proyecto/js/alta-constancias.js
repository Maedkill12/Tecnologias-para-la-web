$(document).ready(function() {
	var table = $('#zero_config').DataTable();

	obtener();

	$('#nuevaConstancia').on('click', function() {
		$('#Modal1').addClass('show').css('display', 'block');
		$('body').append('<div id="bloquear" class="modal-backdrop fade show"></div>');
	});
	$('.close').on('click', function() {
		cerrarModal();
	});
	$('#upload').on('submit', function(e) {
		e.preventDefault();
		var form = document.getElementById('upload');
		var fdata = new FormData(form);
		$.ajax({
			url: 'php/alta-constancias.php',
			type: 'POST',
			// dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
			data: fdata,
			contentType: false,
            cache: false,
            processData:false
		})
		.done(function(response) {
			console.log(response);
			// window.location.reload();
			table.clear().draw();
			obtener();
			cerrarModal();
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});
	$('#update').on('submit', function(e) {
		e.preventDefault();
		var form = document.getElementById('update');
		var fdata = new FormData(form);
		$.ajax({
			url: 'php/alta-constancias.php',
			type: 'POST',
			// dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
			data: fdata,
			contentType: false,
            cache: false,
            processData:false
		})
		.done(function(response) {
			console.log(response);
			table.clear().draw();
			obtener();
			cerrarModal();
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});

	function obtener() {

		$.ajax({
			url: 'php/alta-constancias.php',
			type: 'POST',
			// dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
			data: {accion: 'obtener'},
		})
		.done(function(response) {
			var rows = JSON.parse(response);


			for (let row of rows) {
				var botones = '<button class="btn btn-cyan btn-sm text-white actualizar" data-observaciones="'+row.observaciones+'" data-archivo="'+row.archivo+'" data-fechaFin="'+row.fecha_fin+'" data-id="'+row.id+'" data-actividad="'+row.actividad+'" data-fechaInicio="'+row.fecha_inicio+'" data-horas="'+row.horas+'">'
	                   	+'<i class="fas fa-pencil-alt"></i>'
	                   +'</button>'
					   +'<button class="btn btn-danger btn-sm text-white eliminar" data-id="'+row.id+'" >'
						+'<i class="fas fa-trash"></i>'    
					+'</button>';
				table.row.add([row.actividad, row.fecha_inicio, row.horas, botones]).draw(false);
			}

			$('.eliminar').on('click', function() {
				$.ajax({
					url: 'php/alta-constancias.php',
					type: 'POST',
					// dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
					data: {accion: 'eliminar', id: $(this).data('id')},
				})
				.done(function() {
					console.log("success");
					table.clear().draw();
					obtener();
					cerrarModal();
				})
				.fail(function() {
					console.log("error");
				})
				.always(function() {
					console.log("complete");
				});
				
			});

			$('.actualizar').on('click', function() {
				$('#Modal2 input[name="nombreActividad"]').val($(this).data('actividad'));
				$('#Modal2 input[name="fechaTermino"]').val($(this).data('fechafin'));
				$('#Modal2 input[name="fechaInicio"]').val($(this).data('fechainicio'));
				$('#Modal2 input[name="horas"]').val($(this).data('horas'));
				$('#Modal2 input[name="id"]').val($(this).data('id'));
				// $('#Modal2 input[name="archivo"]').val($(this).data('archivo'));
				$('#Modal2 textarea[name="observaciones"]').text($(this).data('observaciones'));
				$('#Modal2').addClass('show').css('display', 'block');
				$('body').append('<div id="bloquear" class="modal-backdrop fade show"></div>');
			});

			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}

	function cerrarModal() {
		$('#Modal1').removeClass('show').css('display', 'none');
		$('#Modal2').removeClass('show').css('display', 'none');
		$('#bloquear').remove();
	}

});