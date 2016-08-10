<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>装小蜜主忘记密码页面</title>
        <link rel="stylesheet" href="../css/common.css">
        <link rel="stylesheet" href="../css/style.css">
        <script type="text/javascript" src="../js/jquery-1.11.3.min.js"></script>
        <style type="text/css">
            
        </style>
    </head>
<body>
<!-- 引入头部 -->
    <?php
        include("head.php");
    ?>
    <!-- 中间内容部分 -->
    <div class="wrap-sf">
        <img src="../images/demo/unity.jpg" alt="" title=""/>
        <div class="forget-sf">
            <div class="forget-inner-sf clearfix" >
                <h1>
                    <span class="forget-col">1.输入手机号码 > </span>
                    <span>&nbsp;2.输入验证码 > </span>
                    <span>&nbsp;3.重置密码</span>
                </h1>
                <!-- 表单部分 -->
                <form action="" method="get" name="" class="forget-first-sf">
                    <div class="forget-telephnoe-outer">   
                        <div class="forget-telephone-sf">    
                            <input type="text" id="telephoe" placeholder="手机号"/>
                            <div class="forget-telephone-hide"></div>
                            <span></span>
                        </div>
                    </div>
                    <div class="forget-outer-sf clearfix">     
                        <div class="forget-sure-sf">
                            <input type="text" id="pass" value="" placeholder="验证码"/>
                            <div class="forget-pass-hide"></div>
                            <span></span>
                            <em>手机号不存在或验证码错误</em>
                        </div> 
                        <div class="forget-sure-number">2740</div>
                    </div>
                    <div class="forget-next-sf">
                        <input type="button" value="下一步" />
                    </div>
                </form>
                <form action="" method="get" name="" class="forget-second-sf">
                    <div class="forget-telephnoe-outer">   
                        <div class="forget-telephone-sf">    
                            <input type="text" id="telephoe" placeholder="手机号"/>
                            <div class="forget-telephone-hide"></div>
                            <span></span>
                        </div>
                    </div>
                    <div class="forget-outer-sf clearfix">     
                        <div class="forget-sure-sf">
                            <input type="text" id="pass" value="" placeholder="手机验证码"/>
                            <div class="forget-pass-hide"></div>
                            <span></span>
                            <em>验证码错误</em>
                        </div> 
                        <div class="forget-sure-number" style="letter-spacing: 0;">获取激活码</div>
                    </div>
                    <div class="forget-next-sf">
                        <input type="button" value="下一步" />
                    </div>
                </form>
                <form action="" method="get" name="" class="forget-third-sf">
                    <div class="forget-telephnoe-outer">   
                        <div class="forget-telephone-third-sf">    
                            <input type="password" id="telephoe" placeholder="新密码"/>
                            <div class="forget-telephone-hide"></div>
                            <span></span>
                        </div>
                    </div>
                    <div class="forget-outer-sf clearfix">     
                        <div class="forget-sure-third-sf">
                            <input type="password" id="pass" value="" placeholder="确认密码"/>
                            <div class="forget-pass-third-hide"></div>
                            <span></span>
                            <em>两次输入不一样或格式错误</em>
                        </div> 
                    </div>
                    <div class="forget-next-sf">
                        <input type="button" value="下一步" />
                    </div>
                </form>
                <!-- 弹窗样式 -->
            </div>
        </div>      
    </div>
    <script type="text/javascript" src="../js/common.js"></script>
    <script type="text/javascript" src="../js/style.js"></script>
</body>
</html>