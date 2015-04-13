<?php 
		function response () {

			$name = $_GET['name'];
			$sex = $_GET['sex'];			

			$str = array(
				'name' => $name,
				'sex' => $sex
			);

			echo json_encode( $str );

		}

		response();

?>