<?php
class Trade {
    var $citys;
    var $goods;
    var $conveyance;
 }

function toArray($data)
{
    $return_arr = Array();
    while($row = mysql_fetch_array($data, MYSQL_ASSOC)){
        array_push($return_arr, $row);
    }
    return $return_arr;
}

    $trade = new Trade;

    $dbhost = 'localhost';
    $dbuser = 'augusti6_ashram';
    $dbpass = 'Sakuragi823';
    $dbname = 'augusti6_mabi';
    $conn = mysql_connect($dbhost, $dbuser, $dbpass) or die('Error with MySQL connection');
    mysql_query("SET NAMES 'utf8'");
    mysql_select_db($dbname);

    $sql = "SELECT A.`id`, B.`id` AS city_id , B.`eng_name` , B.`cht_name` , A.`level` , A.`name` , A.`weight` , A.`size` FROM `trade_goods` AS A JOIN `trade_city` AS B ON A.city_id = B.id";
    $result = mysql_query($sql) or die('MySQL query error');
    $trade->goods = toArray($result);

    $sql = "SELECT * FROM `trade_conveyance`";
    $result = mysql_query($sql) or die('MySQL query error');
    $trade->conveyance = toArray($result);

    $sql = "SELECT * FROM `trade_city`";
    $result = mysql_query($sql) or die('MySQL query error');
    $trade->citys = toArray($result);

    echo json_encode($trade, JSON_NUMERIC_CHECK);
?>