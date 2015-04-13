<?php 
		function response () {
			
			$name = $_POST['name'];
			$sex = $_POST['sex'];			

			$str = array(
				'name' => $name,
				'sex' => $sex
			);

			echo json_encode( $str );

		}

		response();

?>