<?php
	require_once 'conexion.php';

	if (isset($_POST['accion'])) {
		$accion = $_POST['accion'];

		if ($accion == 'electivas') {

			$alumno_id = 1;
			$stmt = $connection->prepare('SELECT * FROM electiva WHERE alumno_id = ?');
			$stmt->bind_param('i', $alumno_id);
			$stmt->execute();
			$result = $stmt->get_result();
			$stmt->close();

			$electivas = array();

			$num = $result->num_rows;
			for ($i=0; $i<$num; $i++) {
				$info = $result->fetch_array(MYSQLI_ASSOC);
				$electivas[$info['nombre']] = array();
				$electivas[$info['nombre']]['maxCreditos'] = $info['creditos'];
				$electivas[$info['nombre']]['creditosActuales'] = $info['creditos_acumulados'];
			}
			echo json_encode($electivas);
		} else if ($accion == 'denominacion') {
			$stmt = $connection->prepare('SELECT * FROM denominacion');
			$stmt->execute();
			$result = $stmt->get_result();
			$stmt->close();	

			$denominacion = array();

			$num = $result->num_rows;
			for ($i=0; $i<$num; $i++) {
				$info = $result->fetch_array(MYSQLI_ASSOC);
				$row = array();
				$row['eje_tematico'] = $info['eje_tematico'];
				$row['modalidad'] = $info['modalidad'];
				$row['descripcion'] = $info['descripcion'];
				$row['ejemplos'] = $info['ejemplos'];

				$denominacion[] = $row;
			}
			echo json_encode($denominacion);
		}
	}
