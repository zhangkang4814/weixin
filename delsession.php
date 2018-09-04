<?php 
$str = isset($_REQUEST['str']) ? $_REQUEST['str'] : '';
$sid = isset($_REQUEST['sid']) ? $_REQUEST['sid'] : '';
session_id($sid);
session_start();
$key=array_search($str ,$_SESSION['str']);
array_splice($_SESSION['str'],$key,1);

?>