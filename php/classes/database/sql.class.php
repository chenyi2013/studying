<?php
	class SQL {

		function query($sql) {
			return mysql_query($sql);
		}

		function rows($result) {
			return mysql_num_rows($result);
		}

        //统计符合条件的数据条数
        function countRow($fields, $tablename, $condition) {
            return $this->rows($this->select($fields, $tablename, $condition));
        }

		function getArray($result) {
			return mysql_fetch_array($result);
		}

		function getObject($result) {
			return mysql_fetch_object($result);
		}

        function getAssoc($result) {
            return mysql_fetch_assoc($result);
        }

		/*
			CRUD操作
		*/
		function select($fields, $tablename, $condition) {
			return $this->query("SELECT $fields from $tablename $condition");
		}

		function insert($tablename, $fields, $value) {
            //$this->sqlDebug("INSERT INTO $tablename($fields) VALUES($value)");
            $this->query("INSERT INTO $tablename($fields) VALUES($value)");
		}

		function update($tablename, $change, $condition) {
            //$this->sqlDebug("UPDATE $tablename SET $change $condition");
            $this->query("UPDATE $tablename SET $change $condition");
		}

		function delete($tablename, $condition) {
			$this->query("DELETE FROM $tablename $condition");
		}

		function sqlDebug($sql) {
			echo "<br>".$sql."<br>";
			exit;
		}
	}
?>