$(document).ready(function() {


	$.ajax({
		url: 'php/desglose-creditos.php',
		type: 'POST',
		// dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		// data: {param1: 'value1'},
	})
	.done(function(response) {
		var rows = JSON.parse(response);
		for (var row of rows) {
			var idTable = row.electiva.toLowerCase().replace(' ', '-');
			var table = $('#'+idTable);
			var rowElement = '<tr>'
								+'<td>'+row.actividad+'</td>'
								+'<td>'+row.eje_tematico+'</td>'
								+'<td>'+row.modalidad+'</td>'
								+'<td>'+row.horas+'</td>'
								+'<td>'+row.factor+'</td>'
								+'<td>'+row.creditos+'</td>'
							+'</tr>';
			table.children('tbody').append(rowElement);
			console.log(row.creditos_acumulados);
			$('#'+idTable+' .total').text(row.creditos_acumulados);
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