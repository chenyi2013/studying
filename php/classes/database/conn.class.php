<?php
	/*
	*database connection
	*/
	class CONN {
		private $host;
		private $username;
		private $password;
		private $database;

		function __construct($host, $username, $password, $database) {
			$this->host = $host;
			$this->username = $username;
			$this->password = $password;
			$this->database = $database;
			$this->connect();
		}

		function connect() {
			$this->conn = mysql_connect($this->host, $this->username, $this->password) or die("DB Connect Error!".mysql_error());
			if($this->conn) {
				//echo "Connect Succeed!<br>";
                //写日志
                //file_put_contents('log.txt',"Connect Succeed!",FILE_APPEND);
            } else {
				//echo "Connect Error!<br>";
			}
			mysql_select_db($this->database, $this->conn);
			mysql_query("set names utf8");
		}

		function dbclose() {
			mysql_close($this->conn);
		}
	}
?>