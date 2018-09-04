<?php 

$str = isset($_REQUEST['str']) ? $_REQUEST['str'] : '';
$sid = isset($_REQUEST['sid']) ? $_REQUEST['sid'] : '';
session_id($sid);
session_start();
if(isset($_SESSION['str'])){
	array_push($_SESSION['str'],$str);
}else{
	$_SESSION['str'] = [];
	array_push($_SESSION['str'],$str);
}
// $_SESSION['str'] = $str;


?>