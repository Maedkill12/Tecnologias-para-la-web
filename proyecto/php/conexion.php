<?php
	// $user = 'id16960629_maed';
	// $pass = '2<lQ&%ab2qC-ijj=';
	// $host = 'localhost';
	// $database = 'id16960629_electivas';
	// $user = 'b14_28250163';
	// $pass = 'alejandro455';
	// $host = 'sql302.byethost14.com';
	// $database = 'b14_28250163_electivas';
	$user = 'root';
	$pass = '';
	$host = 'localhost';
	$database = 'electivas';

	$connection = new mysqli($host, $user, $pass, $database);
	if($connection->connect_error) die("Error") ;
	// echo var_dump($connection);
?>