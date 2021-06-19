<?php
	require_once 'conexion.php';

	$alumno_id = 1;
	$stmt = $connection->prepare('SELECT e.nombre, c.actividad, d.eje_tematico, d.modalidad, c.horas, d.factor, ce.creditos, e.creditos_acumulados from constancia c join denominacion d on c.denominacion_id = d.id join constancia_electiva ce on ce.constancia_id = c.id join electiva e on ce.electiva_id = e.id where c.alumno_id = ?');
	$stmt->bind_param('i', $alumno_id);
	$stmt->execute();
	$result = $stmt->get_result();
	$stmt->close();

	$electivas = array();

	$num = $result->num_rows;
	for ($i=0; $i<$num; $i++) {
		$info = $result->fetch_array(MYSQLI_ASSOC);
		$row = array();
		$row['electiva'] = $info['nombre'];
		$row['actividad'] = $info['actividad'];
		$row['eje_tematico'] = $info['eje_tematico'];
		$row['modalidad'] = $info['modalidad'];
		$row['horas'] = $info['horas'];
		$row['factor'] = $info['factor'];
		$row['creditos'] = $info['creditos'];
		$row['creditos_acumulados'] = $info['creditos_acumulados'];

		$electivas[] = $row;
	}
	echo json_encode($electivas);