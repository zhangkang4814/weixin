<?php 

$mod = new Model();

$res = $mod::select();

var_dump($res);

class Model
{	
	//连接参数
	public $tabName = 'weixin';
	public $pdo;

	public function __construct(){

		$dsn = 'mysql:host=localhost;dbname=weixin;charset=utf8';
		$this->pdo = new PDO($dsn,'root','123456');
		 
	}

	public static function select(){
		
		$sql = 'select * from '.$this->tabName;
		$stat = $this->pdo->query($sql);
		$res = $stat->fetchAll(PDO::FETCH_ASSOC);
		return $res;
	} 



}





 ?>