$(document).ready(function() {

	$.ajax({
		url: 'php/dashboard.php',
		type: 'POST',
		// dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		data: {accion: 'electivas'},
	})
	.done(function(response) {
		var electivas = JSON.parse(response);
		for (var electiva in electivas) {
			var porcentaje = (+electivas[electiva]['creditosActuales'] * 100) / +electivas[electiva]['maxCreditos'];
			var id_bar = electiva.toLowerCase().replace(' ', '-');
			$('#'+id_bar).css('width', porcentaje + '%');
		}
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
	$.ajax({
		url: 'php/dashboard.php',
		type: 'POST',
		// dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		data: {accion: 'denominacion'},
	})
	.done(function(response) {
		console.log(response);
		var rows = JSON.parse(response);
		var table;
		for (let row of rows) {
			if (row.eje_tematico == 'Inquietudes vocacionales propias') {
				table = $('#table-1');
			} else if (row.eje_tematico == 'Énfasis en la profesión') {
				table = $('#table-2');
			} else if (row.eje_tematico == 'Complementarias a la formación') {
				table = $('#table-3');
			} else {
				table = undefined;
			}
			var rowElement = '<tr>'
							+'<td>'+row.modalidad+'</td>'
							+'<td>'+row.ejemplos.replace('\n', '<br>')+'</td>'
							+'<td>'+row.descripcion+'</td>'
							+'</tr>';
			table.children('tbody').append(rowElement);
		}
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	

});