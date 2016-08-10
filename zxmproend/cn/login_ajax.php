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

    // 通过$_GET或$_POST获取前端传过来的参数
    $username = $_POST["username"];
    $password = $_POST["password"];

    // MD5加密
    // $password = md5($_POST["password"]);

    //查找用户名
    $str = "SELECT * FROM game_str WHERE username= '".$username."' AND password= '".$password."'";
    $sql = mysql_query($str); //执行SQL语句
    $row = mysql_fetch_assoc($sql);//结果转换成数组
    $response["state"] = true;
    if(!$row){
        $response["state"] = false;
        $response["error"] = "用户名或密码错误";
    } 
    else {
        $_SESSION["username"] = $row["username"];
        $_SESSION["password"] = $row["password"];
    }
        echo json_encode($response);
?>