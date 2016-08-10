<?php
	header('Content-Type:text/json;charset=utf-8');
	// session_start();
	// 选择数据库
	// 创建连接
	$conn = mysql_connect("localhost", "root", "");
	// // 选择编码
	mysql_query("SET NAMES 'utf8'");
	// // 选择数据库
	mysql_select_db("game_select");
	// 获取前端传过来的用户名
	$username = $_POST["username"];
	$password = $_POST["password"];

	// MD5注册
	// $password = md5($_POST["password"]);

	// echo $value;
	$str = "SELECT * FROM game_str WHERE username= '".$username."' AND password= '".$password."'";
	$sql = mysql_query($str);
	$row = mysql_fetch_assoc($sql);
	// print_r($row);
	//成功{"state" : true}
	//失败{"state" : false, "error": "错误信息"}
	$response["state"] = true;//发送前端数据
	if($row) {
		$response["state"] = false;
		$response["error"] = "用户名存在";
	} else {
		$str = "INSERT INTO game_str (username, password) VALUES ('$username', '$password')";
		$sql = mysql_query($str);
		$_SESSION["username"] = $row["username"];
		$_SESSION["password"] = $row["password"];
	}
	echo json_encode($response);
?>