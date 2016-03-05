<?php
    $dbhost = 'localhost';
    $dbuser = 'augusti6_ashram';
    $dbpass = 'Sakuragi823';
    $dbname = 'augusti6_mabi';
    $conn = mysql_connect($dbhost, $dbuser, $dbpass) or die('Error with MySQL connection');
    mysql_query("SET NAMES 'utf8'");
    mysql_select_db($dbname);
    $sql = "SELECT * FROM  `daily_quest` ORDER BY `daily_quest`.`id` ASC";
    $result = mysql_query($sql) or die('MySQL query error');
    $return_arr = Array();
    while($row = mysql_fetch_array($result, MYSQL_ASSOC)){
        array_push($return_arr, $row);
    }
    echo json_encode($return_arr);
?>