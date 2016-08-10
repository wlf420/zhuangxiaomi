<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>装小蜜注册页面</title>
        <meta name="keywords" content="家装监理装小蜜注册页面">
        <meta name="description" content="注册成为一员">
        <link rel="stylesheet" href="../css/common.css">
        <link rel="stylesheet" href="../css/style.css">
        <script type="text/javascript" src="../js/jquery-1.11.3.min.js"></script>
    </head>
<body>
<!-- 引入头部 -->
    <?php
        include("head.php");
    ?>
    <!-- 中间内容部分 -->
    <div class="register-wrap-sf">
        <div class="register-sf">
            <div class="register-inner-sf clearfix" >
                <div class="register-icon-sf"><img src="../images/demo/login_people.png" alt="注册图片" title=""/></div>
                <!-- 表单部分 -->
                <form action="" method="get" name="">
                    <div class="register-border-sf">    
                        <div class="register-telephone-sf">
                            <label for="telephone">手机号 &nbsp;</label>
                            <input type="text" id="telephoe" placeholder="Phone" name="username" value="" />
                            <div class="telephone-hide"></div>
                            <span></span>
                            <em></em>
                            <div class="alert-error">格式不符合要求或验证码错误</div>
                        </div>
                        <div class="register-pass-sf">
                            <label for="pass">输入密码 &nbsp;</label>
                            <input type="password" id="pass" placeholder="Password" name="password" value="" />
                            <div class="pass-hide"></div>
                            <span></span>
                            <em></em>
                        </div> 
                        <div class="sure-pass-sf">
                            <label for="pass">确认密码 &nbsp;</label>
                            <input type="password" id="pass" placeholder="Password" name="password"  value="" />
                            <div class="pass-hide"></div>
                            <span></span>
                            <em></em>
                        </div>
                    </div>
                    <div class="active-outer clearfix">    
                        <div class="active-sf">
                            <label for="sure">激活码 &nbsp;</label>
                            <input type="text" id="sure" placeholder="Verification" value="" />
                        </div>
                        <div class="active-number">获取激活码</div>
                    </div>
                    <div class="read-sf clearfix">
                        <em></em>
                        <span>我已阅读并同意遵守《装小蜜用户服务协议》</span>
                    </div>
                    <div class="register-button-sf">
                        <a href="login.php" tilte="">已有账号 直接登录</a>
                        <span class="button-register-sf" id="btn">注册</span>
                    </div>
                <!-- 推广部分 -->
                    <div class="spread clearfix">
                        <p>使用以下账号直接登录</p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li style="margin-right: 0px;"></li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>      
    </div>
    <script type="text/javascript" src="../js/common.js"></script>
    <script type="text/javascript" src="../js/style.js"></script>
    <script type="text/javascript">
        // 注册按钮选定状态
        $(".login").children().eq(1).css({
            "color" : "#fff",
            "border" : "1px solid #ffa751",
            "background" : "#ffa751"
        });

    </script>
</body>
</html>