<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>装小蜜家装监理-互联网家装监理服务</title>
		<meta name="keywords" content="家装监理装小蜜APP下载">
		<meta name="description" content="客户端下载">
		<link rel="icon" href="../images/zhuangxiaomi.ico" type="image/x-icon" /> 
		<link rel="shortcut icon" href="../images/zhuangxiaomi.ico" type="image/x-icon" />
		<link rel="stylesheet" type="text/css" href="../css/common.css" />
		<link rel="stylesheet" href="../css/style.css" />
	</head>
	<body>
		<?php
        	include("head.php");
    	?>
    	<div class="supervision-download-sj-wrap clearfix">
			<div class="supervision-download-hyq clearfix">	
				<div class="app-left-sj clearfix">
					<div class="iphone-sj">
						<img src="../images/demo/iphone.png" alt="手机图片" />
					</div>
				</div>
				<div class="app-right-sj clearfix">
					<div class="app-txt-sj">
						<img src="../images/demo/text.png" alt="">
					</div>
					<div class="app-load-sj clearfix">
						<div class="wechat-sj">
							<img src="../images/demo/wechat_code.jpg" alt="二维码">
						</div>
						<dl class="appiphone clearfix">
							<dt>
								<img src="../images/demo/apple.png" alt="iOS下载">
							</dt>
							<dd>iPhone</dd>
						</dl>
						<dl class="appandroid clearfix">
							<dt>
								<img src="../images/demo/android.png" alt="android下载">
							</dt>
							<dd>Android</dd>
						</dl>
					</div>
				</div>
			</div>
    	</div>
		<?php
			include("foot.php");
		?>	
		<?php 
			include("backtop.php");
		?>	
	</body>
	<script type="text/javascript" src="../js/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="../js/common.js"></script>
	<script type="text/javascript" src="../js/style.js"></script>
	<script type="text/javascript">
		// 导航栏下移动块效果处于本页面
		// 文章详情页
		$(window).ready(function() {
			var CaseNavDisHYQ = 5 * parseInt(($(".line-jwy").css("width")));
			$(".line-jwy").css({"left" : CaseNavDisHYQ});
			$(".nav-list a").mouseout(function() {
				$(".line-jwy").animate({"left" : CaseNavDisHYQ},500);
			})
		});
	</script>
</html>