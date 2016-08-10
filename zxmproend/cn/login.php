<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>装小蜜登录页面</title>
        <meta name="keywords" content="家装监理装小蜜登录页面">
        <meta name="description" content="拥有装小蜜账号可直接登录查看">
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
        <div class="login-sf">
            <div class="login-inner-sf clearfix">
                <div class="login-icon-sf"><img src="../images/demo/login_people.png" alt="登录" title=""/></div>
                <form action="" method="get" name="">
                    <div class="login-border-sf">  
                        <div class="telephone-sf" style="margin-bottom: 33px;">
                            <label for="telephone">手机 &nbsp;</label>
                            <input type="text" id="telephoe" placeholder="Phone" name="username" value="" />
                            <div class="telephone-hide"></div>
                            <div class="telephone-error-sf">    
                                手机号码错误
                            </div>
                        </div>
                        <div class="pass-sf" style="margin-bottom: 22px;">
                            <label for="pass">密码 &nbsp;</label>
                            <input type="password" id="pass" placeholder="Password" name="password" value="" />
                            <div class="pass-hide"></div>
                            <div class="pass-error-sf">
                                密码错误
                            </div>
                        </div>
                        <div class="sure-outer clearfix">    
                            <div class="sure-sf">
                                <label for="sure">验证码 &nbsp;</label>
                                <input type="text" id="sure" placeholder="Verification" value="" />
                            </div>
                            <div class="sure-number">
                                <strong>3649</strong>
                            </div>
                            <div class="sure-error-sf">
                                验证码错误
                            </div>
                        </div>
                    </div>
                    <div class="remember-sf clearfix">
                        <em></em>
                        <span>记住密码 </span>
                        <strong><a href="forgot-password.php" title="">忘记密码?</a></strong>
                    </div>
                    <div class="button-sf">
                        <div class="button-first-sf">  
                            <a href="register.php" title="">注册</a>
                        </div>
                        <div class="button-second-sf" id="btnSf">登录</div>   
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
        // 登录按钮选定状态
        $(".login").children().eq(0).css({
            "color" : "#fff",
            "border" : "1px solid #ffa751",
            "background" : "#ffa751"
        });
    </script>
</body>
</html>