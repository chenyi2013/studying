<?php
    require "../classes/database/conn.class.php";
    require "../classes/database/sql.class.php";

    $db = new CONN("localhost", "root", "1234567", "dbname");
    $sql = new SQL;
?>