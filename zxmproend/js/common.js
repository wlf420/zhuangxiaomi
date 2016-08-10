// 导航栏效果
$(".nav-list a").mouseover(function() {
	var NavDisHYQ = ($(this).index() - 1) * parseInt(($(this).siblings(".line-jwy").css("width")));
	$(this).siblings(".line-jwy").stop(true).animate({
		"left" : NavDisHYQ
	}, 500);
});
// 返回顶部效果
// 显示返回顶部按钮
$(window).scroll(function() {
	var backtopHYQ = parseInt($(window).scrollTop()) + $(window).height() * 0.5;
	if($(window).scrollTop() >= $(window).height() * 0.4) {
		$(".back-top-hyq").stop(true).slideDown(10).css({"top" : backtopHYQ});
	} else {
		$(".back-top-hyq").stop(true).slideUp(10);
	}
});
// 点击返回顶部
$(".back-top-hyq .rocket-hyq").click(function(e) {
	e.preventDefault();
	$('body,html').animate({
		"scrollTop" : 0
	}, 400);
});
// 鼠标悬停显示QQ信息
$(".back-top-hyq .qq-hyq").hover(function() {
	$(".back-top-hyq .qqtime-hyq").stop(true).fadeIn(500);
}, function() {
	$(".back-top-hyq .qqtime-hyq").stop(true).fadeOut(500);
})
// 鼠标悬停显示微信信息
$(".back-top-hyq .qrcode-hyq").hover(function() {
	$(".back-top-hyq .weixin-hyq").stop(true).fadeIn(500);
}, function() {
	$(".back-top-hyq .weixin-hyq").stop(true).fadeOut(500);
});


