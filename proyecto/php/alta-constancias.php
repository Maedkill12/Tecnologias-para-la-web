<?php 
	require_once 'conexion.php';

	if (isset($_POST['accion'])) {
		$accion = $_POST['accion'];

		if ($accion == 'obtener') {
			$stmt = $connection->prepare('SELECT * FROM constancia');
			$stmt->execute();
			$result = $stmt->get_result();
			$stmt->close();

			$num = $result->num_rows;
			$resultado = array();

			if ($num > 0) {
				for ($i = 0; $i < $num; $i++) {
					$row = array();
					$info = $result->fetch_array(MYSQLI_ASSOC);
					$row['actividad'] = $info['actividad'];
					$row['fecha_inicio'] = $info['fecha_inicio'];
					$row['fecha_fin'] = $info['fecha_fin'];
					$row['archivo'] = $info['archivo'];
					$row['observaciones'] = $info['observaciones'];
					$row['horas'] = $info['horas'];
					$row['id'] = $info['id'];

					$resultado[] = $row;
				}
			}
			echo json_encode($resultado);
		} else if ($accion == 'subir') {
			$actividad = $_POST['nombreActividad'];
			$fecha_inicio = $_POST['fechaInicio'];
			$fecha_termino = $_POST['fechaTermino'];
			$observaciones = $_POST['observaciones'];
			$horas = $_POST['horas'];
			$fileName = '';
			$alumno_id = 1;
			
			if (isset($_FILES['archivo']['name']) && $_FILES['archivo']['name'] != '') {
				$cpath="constancias/";
			    $file_parts = pathinfo($_FILES["archivo"]["name"]);
			    $file_path = 'constancia'.time().'.'.$file_parts['extension'];
			    move_uploaded_file($_FILES["archivo"]["tmp_name"], $cpath.$file_path);
			    $fileName = $file_path;
			}

			$stmt = $connection->prepare('INSERT INTO constancia (actividad, fecha_inicio, fecha_fin, horas, archivo, observaciones, alumno_id) VALUES (?,?,?,?,?,?,?)');
			$stmt->bind_param('sssissi', $actividad, $fecha_inicio, $fecha_termino, $horas, $fileName, $observaciones, $alumno_id);
			$stmt->execute();
			$stmt->close();
			echo 'uploaded';

		} else if ($accion == 'eliminar') {
			$id = $_POST['id'];

			$stmt = $connection->prepare('DELETE FROM constancia WHERE id = ?');
			$stmt->bind_param('i', $id);
			$stmt->execute();
			$stmt->close();
			echo 'success';
		} else if ($accion == 'actualizar') {
			$id = $_POST['id'];
			$actividad = $_POST['nombreActividad'];
			$fecha_inicio = $_POST['fechaInicio'];
			$fecha_termino = $_POST['fechaTermino'];
			$observaciones = $_POST['observaciones'];
			$horas = $_POST['horas'];
			$fileName = '';
			
			if (isset($_FILES['archivo']['name']) && $_FILES['archivo']['name'] != '') {
				$cpath="constancias/";
			    $file_parts = pathinfo($_FILES["archivo"]["name"]);
			    $file_path = 'constancia'.time().'.'.$file_parts['extension'];
			    move_uploaded_file($_FILES["archivo"]["tmp_name"], $cpath.$file_path);
			    $fileName = $file_path;
			}

			if ($fileName != '') {
				$stmt = $connection->prepare('UPDATE constancia SET actividad = ?, fecha_inicio = ?, fecha_fin = ?, horas = ?, archivo = ?, observaciones = ? WHERE id = ?');
				$stmt->bind_param('sssissi', $actividad, $fecha_inicio, $fecha_termino, $horas, $fileName, $observaciones, $id);
			} else {
				$stmt = $connection->prepare('UPDATE constancia SET actividad = ?, fecha_inicio = ?, fecha_fin = ?, horas = ?, observaciones = ? WHERE id = ?');
				$stmt->bind_param('sssisi', $actividad, $fecha_inicio, $fecha_termino, $horas, $observaciones, $id);
			}
			$stmt->execute();
			$stmt->close();
			echo 'updated';
		}
	}