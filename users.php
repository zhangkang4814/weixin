<?php 

class Users
{	
	public function add($openid=''){
		$dsn = "mysql:host=localhost;dbname=weixin;charset=utf8";
		$pdo = new PDO($dsn,'root','123456');
		$sql = "insert into users (openid) value('$openid')";
		try {
			$res = $pdo->query($sql);

		} catch (Exception $e) {

			return '';
		}

		return $openid;
		

	}

	public function findByOpenid($openid=''){

		$dsn = "mysql:host=localhost;dbname=weixin;charset=utf8";

		$pdo = new PDO($dsn,'root','123456');

		$sql = "select * from users where openid='$openid'";


		$stat = $pdo->query($sql);

		$res = $stat->fetchAll(PDO::FETCH_ASSOC);

		return $res;



		
	}

	public function login($openid=''){
		$login = $this->findByOpenid($openid);

		if(!$login){

			$rs = $this->add($openid);

			if($rs){

				return $rs;
			}
		}

		return $login;
	}
}


 ?>