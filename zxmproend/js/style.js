// 404请求错误
(function() {
	var xhr = new XMLHttpRequest();
	xhr.open("get", "../index.php", true);
	xhr.send(null);
	xhr.onreadystatechange = function() { 
		if(xhr.readyState == 4) {			
			if(xhr.status == 404) {
			window.location.href="../cn/web404.php";			
			}
		}
	}	
})();


// 监理服务页面效果开始
// 文字部分动画效果
(function() {       
    var titleHeight = $(".submain-sj li").height();
    $(".submain-sj li div h3").click(function() {
        if($(this).children("span").css("backgroundPosition") == "-498px -330px") {
            if($(".submain-sj li").is(":animated")) {
                return;
            }         
            var conHeight = $(this).parent("div").height() + parseInt($(this).parent("div").css("paddingBottom"));
            $(this).parent().parent().stop(true).animate({
                "height" : conHeight + "px"
            }, 500).children().children("h3").css({"color":"#ffa751"}).children().css({"backgroundPosition":"-480px -330px"}).parent().parent().parent().siblings().stop(true).animate({
                "height" : titleHeight + "px"
            }, 500).children().children("h3").css({"color":"#797979"}).children().css({"backgroundPosition":"-498px -330px"});
        } else { 
                $(this).parent().parent().stop(true).animate({
                        "height" : titleHeight + "px"
                    }, 500).children().children("h3").css({"color":"#797979"}).children().css({"backgroundPosition":"-498px -330px"});
            }
        
    });
               
    // // 图片部分动画效果
    $(".mouse-wlf").mouseenter(
    	function() {
    		$(this).children(".ctr-sj").stop(true).animate({"height" : 0, "paddingBottom" : 0, "paddingTop" : 0},500).siblings(".con-wlf").css({
                "display" : "block"
            })
    	});
    $(".mouse-wlf").mouseleave(
    	function() {
            $(this).children(".ctr-sj").stop(true).animate({"height" : "140px",   "paddingBottom" : "100px", "paddingTop" : "30px"},500).siblings(".con-wlf").css({
                "display" : "none"
            })
    	});
    $(".circle-wlf li").mouseenter(
        function() {
            $(this).css({
                "backgroundPosition-y" : "-140px"
            }).parent().parent().siblings(".con-wlf").children().eq($(this).index()).css({
                "display" : "block"
            }).siblings().css({
                "display" : "none"
            })
    		// 监理服务页自定义滚动条	   
            if($(".min-sj").css("display") == "block") {
                scrollBar("min-sj", "min-cont-sj", "scroll-sj");
            } 
            if($(".material-sj").css("display") == "block") {           
                scrollBar("material-sj", "material-cont-sj", "scrolls-sj");
            }
        })
    $(".circle-wlf li").mouseleave(
    	function() {
    		$(this).css({
    		    "backgroundPosition-y" : 0
    		})
    	});
})();
/*
 * [scrollBar 自定义滚动条]
 * @param outer 外部框显示区域 chapter 文本内容 move 滚动条
 * @date 2016.5.11
 * @author Hyq
 * @demo var test = scrollBar("id1", "id2", "id3");
*/
function scrollBar(outer, chapter, scro) {
	var outer = document.getElementById(outer);
	var chapter = document.getElementById(chapter);
	var move = document.getElementById(scro);
	move.onmousedown = function(event) {
		var evt = event || window.event;
		prevent(evt);
		var start = evt.clientY; //获取鼠标位置
		var posY = move.offsetTop - outer.scrollTop; //鼠标点击时 滚动条position的top值
		document.onmousemove = function(event) {
			var evt = event || window.event;
			prevent(evt);
			var end = evt.clientY;
			var eposY = end - start + posY; //鼠标移动后滚动条的top值
			//判断 如果top值大于 显示区域的高 - 滚动条自身高度
			if(eposY >= outer.clientHeight - move.offsetHeight) {
				eposY = outer.clientHeight - move.offsetHeight;
			}
			if(eposY <= 0) {
				eposY = 0;
			}
			outer.scrollTop = eposY * (outer.scrollHeight - outer.clientHeight) / (outer.clientHeight - move.offsetHeight);
			move.style.top = eposY + outer.scrollTop + "px";
		}
	}
	document.onmouseup = function() {
		document.onmousemove = null;
	}
	function prevent(evt) {
		if(evt.preventDefault) {
			evt.preventDefault();
		} else {
			evt.returnValue = false;
		}
	}
};
// 监理服务页效果结束

// 监理案例详情页效果
function supervisionCaseDetailHyq() {
	// 吸顶导航选中效果函数
	function conNav() {
		// 获取窗口滚动距离
		var ceiSroHyq = $(window).scrollTop();
		if(ceiSroHyq >= navTopHyq) {
			conNavHyq.style.top = 0 + "px"; 
		} 
		if(ceiSroHyq < navTopHyq) {
			conNavHyq.style.top = navTopHyq - ceiSroHyq + "px";
		}
		if(ceiSroHyq <= ($(".first-LG").offset().top - $("#content-case-nav").outerHeight())) {
			$("#content-case-nav").children("ul").children("li").eq(0).children("div").css({"background" : "url('../images/zxm_bg.png') 0 -71px no-repeat", "color" : "#fff"}).siblings("span").css({"background" : "url('../images/zxm_bg.png') -304px -431px no-repeat", "margin-left" : "0px"});		
		}
		if(ceiSroHyq >= ($(".first-LG").offset().top - $("#content-case-nav").outerHeight())) {
			$("#content-case-nav").children("ul").children("li").eq(0).children("div").css({"background" : "url('../images/zxm_bg.png') 0 -230px no-repeat", "color" : "#1bab73"}).siblings("span").css({"background" : "url('../images/zxm_bg.png') -303px -478px no-repeat", "margin-left" : "-1px"});
			$("#content-case-nav").children("ul").children("li").eq(0).next().children("div").css({"background" : "url(../images/zxm_bg.png) 0 -71px no-repeat", "color" : "#fff"}).siblings("span").css({"background" : "url('../images/zxm_bg.png') -304px -431px no-repeat", "margin-left" : "0px"});
		}
		if(ceiSroHyq >= ($(".four-LG").offset().top - $("#content-case-nav").outerHeight())) {
			$("#content-case-nav").children("ul").children("li").eq(1).children("div").css({"background" : "url('../images/zxm_bg.png') 0 -230px no-repeat", "color" : "#1bab73"}).siblings("span").css({"background" : "url('../images/zxm_bg.png') -303px -478px no-repeat", "margin-left" : "-1px"}).parent("li").prevAll().children("div").css({"background" : "url('../images/zxm_bg.png') -471px -71px no-repeat", "color" : "#fff"}).siblings("span").css({"background" : "url('../images/zxm_bg.png') -303px -377px no-repeat", "margin-left" : "-1px"});
			$("#content-case-nav").children("ul").children("li").eq(1).next().children("div").css({"background" : "url(../images/zxm_bg.png) 0 -71px no-repeat", "color" : "#fff"}).siblings("span").css({"background" : "url('../images/zxm_bg.png') -304px -431px no-repeat", "margin-left" : "0px"});
		}
		if(ceiSroHyq >= ($(".five-LG").offset().top - $("#content-case-nav").outerHeight())) {
			$("#content-case-nav").children("ul").children("li").eq(2).children("div").css({"background" : "url('../images/zxm_bg.png') 0 -230px no-repeat", "color" : "#1bab73"}).siblings("span").css({"background" : "url('../images/zxm_bg.png') -303px -478px no-repeat", "margin-left" : "-1px"}).parent("li").prevAll().children("div").css({"background" : "url('../images/zxm_bg.png') -471px -71px no-repeat", "color" : "#fff"}).siblings("span").css({"background" : "url('../images/zxm_bg.png') -303px -377px no-repeat", "margin-left" : "-1px"});
			$("#content-case-nav").children("ul").children("li").eq(2).next().children("div").css({"background" : "url(../images/zxm_bg.png) 0 -71px no-repeat", "color" : "#fff"}).siblings("span").css({"background" : "url('../images/zxm_bg.png') -304px -431px no-repeat", "margin-left" : "0px"});
		}
		if(ceiSroHyq >= ($(".six-LG").offset().top - $("#content-case-nav").outerHeight())) {
			$("#content-case-nav").children("ul").children("li").eq(3).children("div").css({"background" : "url('../images/zxm_bg.png') 0 -230px no-repeat", "color" : "#1bab73"}).siblings("span").css({"background" : "url('../images/zxm_bg.png') -303px -478px no-repeat", "margin-left" : "-1px"}).parent("li").prevAll().children("div").css({"background" : "url('../images/zxm_bg.png') -471px -71px no-repeat", "color" : "#fff"}).siblings("span").css({"background" : "url('../images/zxm_bg.png') -303px -377px no-repeat", "margin-left" : "-1px"});
			$("#content-case-nav").children("ul").children("li").eq(3).next().children("div").css({"background" : "url(../images/zxm_bg.png) 0 -71px no-repeat", "color" : "#fff"});
		}
		if(ceiSroHyq >= ($(".seven-LG").offset().top - $("#content-case-nav").outerHeight())) {
			$("#content-case-nav").children("ul").children("li").eq(4).children("div").css({"background" : "url('../images/zxm_bg.png') 0 -230px no-repeat", "color" : "#1bab73"}).parent("li").prevAll().children("div").css({"background" : "url('../images/zxm_bg.png') -471px -71px no-repeat", "color" : "#fff"}).siblings("span").css({"background" : "url('../images/zxm_bg.png') -303px -377px no-repeat", "margin-left" : "-1px"});
			$("#content-case-nav").children("ul").children("li").eq(4).next().children("div").css({"background" : "url(../images/zxm_bg.png) -353px -71px no-repeat", "color" : "#fff"});
		}
		if(ceiSroHyq >= ($(".eight-LG").offset().top - $("#content-case-nav").outerHeight())) {
			$("#content-case-nav").children("ul").children("li").eq(5).children("div").css({"background" : "url('../images/zxm_bg.png') 0 -230px no-repeat", "color" : "#1bab73"}).parent("li").prevAll().children("div").css({"background" : "url(../images/zxm_bg.png) -471px -71px no-repeat", "color" : "#fff"});
			$("#content-case-nav").children("ul").children("li").eq(5).next().children("div").css({"background" : "url(../images/zxm_bg.png) -353px -71px no-repeat", "color" : "#fff"});
		}
		if(ceiSroHyq >= ($(".nine-LG").offset().top - $("#content-case-nav").outerHeight())) {
			$("#content-case-nav").children("ul").children("li").eq(6).children("div").css({"background" : "url('../images/zxm_bg.png') 0 -230px no-repeat", "color" : "#1bab73"}).parent("li").prevAll().children("div").css({"background" : "url(../images/zxm_bg.png) -471px -71px no-repeat", "color" : "#fff"});
		}
		if(ceiSroHyq >= ($(".comment").offset().top - $("#content-case-nav").outerHeight() - 120 )) {
			$("#content-case-nav").stop(true).fadeOut(50);
		} else {
			$("#content-case-nav").stop(true).fadeIn(50);
		}
	}
	// 监理案例详情页吸顶导航效果
	// 获取导航栏高度
	var navHeightHyq = $(".nav-jwy").outerHeight();
	// 绑定吸顶导航id
	var conNavHyq = document.getElementById("content-case-nav");
	var conNavparHyq = document.getElementById("content-hyq");
	// 获取吸顶导航距父级的高度
	var navTopHyq = conNavHyq.offsetTop;
	
	var ceiSroHyq = $(window).scrollTop();
	if(ceiSroHyq >= navTopHyq) {
		conNavHyq.style.top = 0 + "px"; 
	}
	if(ceiSroHyq < navTopHyq) {
		conNavHyq.style.top = navTopHyq - ceiSroHyq + "px";
	}
	if($(window).scrollLeft() == 0) {
		conNavHyq.style.left = "";			
	}
	var NavLeftHyq = parseInt(conNavparHyq.offsetLeft);
	$(window).resize(function() {
		if($(window).scrollLeft() == 0) {
			conNavHyq.style.left = "";			
		}
		NavLeftHyq = parseInt(conNavparHyq.offsetLeft);
	})
	// 窗口滚动 吸顶导航变化
	$(window).scroll(function() {
		if($(window).scrollLeft() != 0) {
		var ceiSroLeftHyq = $(window).scrollLeft();
		var conNavLeftHyq = NavLeftHyq - ceiSroLeftHyq;		
		conNavHyq.style.left = conNavLeftHyq + "px";
		} else {
			conNavHyq.style.left = "";
		}
		conNav();
	});
	// 吸顶导航的hover效果
	$(".content-case-nav ul li div").hover(function() {
		$(this).css({"color" : "#000"});
	}, function() {
		// console.log($(this).css("backgroundPosition"))
		if($(this).css("backgroundPosition") == "0px -230px") {
			$(this).css({"color" : "#1bab73"})
		} else {			
			$(this).css({"color" : "#fff"});
		}
	});
	// 点击吸顶导航的内容，跳转到相应位置
	$(".content-case-nav ul li div").click(function() {
		var clickNum = $(this).parent().index();
		// console.log($(".first-LG").offset().top);
		switch(clickNum) {
			case 0 : 
				$('body,html').animate({"scrollTop" : $(".first-LG").offset().top - $("#content-case-nav").outerHeight()});
				break;
			case 1 : 
				$('body,html').animate({"scrollTop" : $(".four-LG").offset().top - $("#content-case-nav").outerHeight()})
				break;
			case 2 : 
				$('body,html').animate({"scrollTop" : $(".five-LG").offset().top - $("#content-case-nav").outerHeight()})
				break;
			case 3 : 
				$('body,html').animate({"scrollTop" : $(".six-LG").offset().top - $("#content-case-nav").outerHeight()})
				break;
			case 4 : 
				$('body,html').animate({"scrollTop" : $(".seven-LG").offset().top - $("#content-case-nav").outerHeight()})
				break;
			case 5 : 
				$('body,html').animate({"scrollTop" : $(".eight-LG").offset().top - $("#content-case-nav").outerHeight()})
				break;
			case 6 : 
				$('body,html').animate({"scrollTop" : $(".nine-LG").offset().top - $("#content-case-nav").outerHeight()})
				break;
		}
	})
}
// 图片滚动效果
function supervisionCaseScroll() {
	var CaseIndexLG = 0;
	$('.change-left').click(function() {
		// 判断当前动画是否执行，若有则跳出函数
		if($(".case-picscroll-hyq").is(":animated")) {
			return;
		}
		CaseIndexLG += parseInt($(".case-picscroll-hyq").children("ul").children("li").css("width")) + parseInt($(".case-picscroll-hyq").children("ul").children("li").css("margin-right"));
		var ScrodisLG = $(".case-picscroll-hyq").children("ul").innerWidth() - $(".case-picscroll-hyq").outerWidth();
		if (CaseIndexLG >= ScrodisLG - parseInt($(".case-picscroll-hyq").children("ul").children("li").css("margin-right"))) {
			CaseIndexLG = ScrodisLG - parseInt($(".case-picscroll-hyq").children("ul").children("li").css("margin-right"));
		}
		$('.case-picscroll-hyq').stop(true).animate({
			"scrollLeft" : CaseIndexLG
		}, 2000);
	});
	$('.change-right').click(function() {
		if($(".case-picscroll-hyq").is(":animated")) {
				return;
			}
	 	CaseIndexLG -= parseInt($(".case-picscroll-hyq").children("ul").children("li").css("width")) + parseInt($(".case-picscroll-hyq").children("ul").children("li").css("margin-right"));
	 	if (CaseIndexLG <= 0) {
	 		CaseIndexLG = 0;
	 	}
	 	$('.case-picscroll-hyq').stop(true).animate({
	 		"scrollLeft" : CaseIndexLG
	 	},2000);
	}); 
	$(".case-picscroll-hyq ul li").hover(function() {
		$(this).children("dl").stop(true).animate({"bottom" : "0px"}, 500);
	}, function() {
		$(this).children("dl").stop(true).animate({"bottom" : "-65px"}, 500);
	})
};
// 图片滚动效果结束

// 监理案例详情页效果结束

// 监理团队页面效果开始
// 人物描述小块的颜色
function supervisionTeamSj() {
	var inf_sj = document.getElementById("inf-sj").getElementsByTagName("div");
	var infcolor_sj = 900000;
	for (var i = 0; i < inf_sj.length; i++) {
	 	inf_sj[i].style.backgroundColor = "#" + (infcolor_sj - 27371*i);	 	
	 } 
	 // 小头像鼠标移入事件	
	$(".smallpic-sj img").mouseover(function() {
		$(this).stop(true).animate({"height" : "182px"},10).siblings().stop(true).animate({"height" : "162px"}, 10).parent().siblings(".bigpic-sj").children().eq($(this).index()).css({"display" : "block"}).siblings().css({"display" : "none"}).parent().siblings(".inf-sj").children().eq($(this).index()).css({"display" : "block"}).siblings().css({"display" :"none"});
		$(this).stop(true).animate({"height" : "182px"},10).css({"z-index" : "20"}).siblings().stop(true).animate({"height" : "162px"}, 10).parent().siblings(".teamtop-sj").children(".bigpic-sj").children().eq($(this).index()).css({"display" : "block"}).siblings().css({"display" : "none"}).parent().siblings(".inf-sj").children().eq($(this).index()).css({"display" : "block"}).siblings().css({"display" :"none"});
		for (var i = $(this).index(); i >= 0; i--) {
			$(".smallpic-sj img").eq(i).css({"z-index" : 19+i-$(this).index()});
		}
		for (var i = $(this).index()+1; i < 19; i++) {
			$(".smallpic-sj img").eq(i).css({"z-index" : 19+$(this).index()-i});
		}
		
	});	
}
// // 荣誉墙的变大变小处理
$(".honor-sj").click(function() {
	$(".mark-sj").fadeIn(300, function() {
		$(this).children(".honorbig-sj").fadeIn(1000);
	});
});
$(".honorbig-sj").children("span").click(function() {
	$(".honorbig-sj").fadeOut(300, function() {
		$(this).parent(".mark-sj").fadeOut(1000);
	});
})
// 资质证书的变大变小处理
$(".certifi-sj").click(function() {
	$(".mark-sj").fadeIn(300, function() {
		$(this).children(".certifibig-sj").fadeIn(1000);
	});
});
$(".certifibig-sj").click(function() {
	$(".certifibig-sj").fadeOut(300, function() {
		$(this).parent(".mark-sj").fadeOut(1000);
	});
})

// 文章列表页效果 开始

// 文章列表页TAB切换效果
function supervisionArticalListLg() {
	var lgindex = 0;
	var lgtimer = null;
 	function lgshow() {
	 	$('.pics-hyq img').eq(lgindex).stop(true).fadeIn(2000).siblings().stop(true).fadeOut(2000).parent().siblings(".rank-content-hyq").children().eq(lgindex).stop(true).fadeIn(2000).siblings().stop(true).fadeOut(2000);
	 	$('.content-article-hyq ul li').stop(true).eq(lgindex).animate({
			'width' : '212px'
		}, 500).css({
			'color' : '#fff'
		});
		$('.content-article-hyq ul li').eq(lgindex).siblings().stop(true).animate({
			'width' : "7px"
		}, 500);
		lgindex++;
		if (lgindex >= $('.content-article-hyq ul li').length) {
			lgindex = 0;
		}
 		lgtimer = setTimeout(lgshow,3000);
 	}
 	lgshow();
	$('.content-article-hyq ul li').click(function() {
	 	lgindex = $(this).index();
		$(this).stop(true).stop(true).animate({
			'width' : '212px'
		}, 500).css({
			'color' : '#fff'
		});
		$(this).siblings().stop(true).animate({
			'width' : "7px"
		}, 500);
		$('.pics-hyq img').eq($(this).index()).stop(true).fadeIn().siblings().stop(true).fadeOut().parent().siblings(".rank-content-hyq").children().eq(lgindex).stop(true).fadeIn().siblings().stop(true).fadeOut();
		clearInterval(lgtimer);
		lgtimer = setTimeout(lgshow, 0);
	});
}

// 文章列表页查看更多
function articleListAdd() {
	var con = document.getElementById('content-artlist-hyq');
	$(".article-more-hyq").click(function() {
		$(this).css({"display" : "none"});
		$(".loading-hyq").fadeIn(0).delay(1000).fadeOut(0, function() {
			// json插入结构
			// 创建一个新的AJAX对象
			var xhr = new XMLHttpRequest();
			//确定要加载的网址和方式
			xhr.open("get", "../cn/article-list-add.json", true);
			// 开始异步加载
			xhr.send(null);
			xhr.onload = function() {
				var data = JSON.parse(xhr.responseText);
				for(var i = 0; i < 4; i++) {
					con.innerHTML += data.structureArticle;				
				}
			}
		$(".article-more-hyq").css({"display" : "block"});
		});		
	})
}
// 文章列表页效果 结束
// 监理案例页效果 开始
/* 
* @Author: anchen
* @Date:   2016-06-09 15:40:06
* @Last Modified by:   anchen
* @Last Modified time: 2016-06-23 22:21:04
*/

// 筛选部分
// 选中——单选
// 默认选中全部
// 监理案例查看更多
function supervisionCaseAdd() {
	var con = document.getElementById('pic-con-box');
	$(".supervision-more-case-hyq span").click(function() {
		$(this).css({"display" : "none"}).siblings("img").fadeIn(0).delay(1000).fadeOut(0, function() {
			$(this).siblings("span").css({"display" : "block"});
			// 插入JS方法
			$.getScript("../js/style.js", function () {
			    picConWlf();
			});
			// json插入结构
			function createRequests() {
				var request = null;
				try {
					request = new XMLHttpRequest();
				} catch (tryMS) {
					try {
						request = new ActiveXObject("Msxm12.XMLHTTP"); //兼容IE7、8
					} catch(otherMS) {
						request = new ActiveXObject("Microsoft.XMLHTTP"); //兼容IE5、6
					}
				}
				return request;
			}
			// 创建一个新的AJAX对象
			var xhr = new createRequests();
			//确定要加载的网址和方式
			xhr.open("get", "../cn/article-list-add.json", true);
			// 开始异步加载
			xhr.send(null);
			xhr.onload = function() {
				var data = JSON.parse(xhr.responseText);
				for(var i = 0; i < 4; i++) {
					con.innerHTML += data.structureCase;				
				}
			}
		});		
	});
}
// 默认筛选条件
$(".service-list-wlf strong").css({
    "color" : "#414141",
    "backgroundColor": "#ff942c"
});
// 点击换筛选条件
$(".service-list-wlf li").click(
    function() {
    	$(this).parent().parent().siblings("strong").css({
    		"backgroundColor" : "",
    		"color" : "#9f9f9f"});
        $(this).css({
            "color" : "#414141",
            "backgroundColor": "#ff942c"}).siblings().css({
                    "color": "#9f9f9f",
                    "backgroundColor": ""});
}).parents().parents().parents().siblings().children("ul").children("li").click(
    function() {
        $(this).css({
            "color" : "#414141",
            "backgroundColor": "#ff942c"}).siblings().css({
                    "color": "#9f9f9f",
                    "backgroundColor": ""});
}); 
$(".service-list-wlf strong").click(function() {
	$(this).css({
		"color" : "#414141",
		"backgroundColor" : "#ff942c"
	}).siblings("div").children().children("li").css({
		"color" : "#9f9f9f",
		"backgroundColor" : ""
	})
})
// 展开、收起区域划分
var emclickJudgeWlf = true;
var liHeight = $(".list-area-wlf li").height();
var liPadding = parseInt($(".service-list-wlf ul li").css("paddingTop")) + parseInt($(".service-list-wlf ul li").css("paddingBottom"));
var listMarginHeight = parseInt($(".service-list-wlf ul li").css("marginBottom"));
var ulHeight = $(".list-area-wlf ul").height();
$(".list-area-wlf em").click(
    function() {
        if($(".service-list-wlf .list-area-wlf div").is(":animated")) {
            return;
        }//判断当前点击事件中的动画是否在执行，如果有，则跳出函数
        if(emclickJudgeWlf) {
            $(".service-list-wlf .list-area-wlf div").stop(true).animate({
                "height" : ulHeight + "px"
            }, 400);
            $(".list-area-wlf em").css(
                "backgroundPosition" , "-522px 5px");
            emclickJudgeWlf = false;
        } else {
            $(".service-list-wlf .list-area-wlf div").stop(true).animate({
                "height": liHeight + liPadding + listMarginHeight + "px"
            }, 400);
            $(".list-area-wlf em").css(
                "backgroundPosition" , "-505px 5px");
            emclickJudgeWlf = true;
        }
})
// 展开、收起按钮
var btnclickJudgeWlf = true;
var buttonHeight = $(".service-button-wlf button").height();//存展开按钮的高度
var listPaddingHeight = parseInt($(".service-list-wlf").css("paddingTop"))+parseInt($(".service-list-wlf").css("paddingBottom"));//筛选部分内容区的上下padding
$(".service-button-wlf button").click(
    function() {
        if($(".service-choice-wlf").is(":animated")) {
            return;
        }//判断当前点击事件中的动画是否在执行，如果有，则跳出函数
        var listHeight = $(".service-list-wlf").height();//筛选部分内容区的高度
        // console.log(listHeight)
        if(btnclickJudgeWlf) {
            $(".service-choice-wlf").stop(true, true, true).animate({
                "height": buttonHeight/2 + "px"
            }, 600);
            $(".service-button-wlf button").html("展开分类");
            btnclickJudgeWlf = false;           
        } else {
            $(".service-choice-wlf").stop(true, true, true).animate({
                "height": listHeight+listPaddingHeight + "px"
            }, 600);
            $(".service-button-wlf button").html("收起分类");

            btnclickJudgeWlf = true;
        }
});
//默认选择的筛选条件为按发布时间
$(".title-right-wlf span:first-child").css({
    "color": "#ffa751",
    "text-decoration": "underline"
})
// 图片动画 
// 新想的效果
function picConWlf() {
	$("#pic-con-box dl").hover(
		function() {
		    $(this).children("dd").css({"display" : "block"}).stop(true).animate({
		        "opacity" : 100,
		        "top" : "10px",
		        "left" : "10px"
		    },300).parents().siblings().children("dd").stop(true).animate({
		        "top" : 0,
		        "left" : 0,
		        "opacity" : 0
		    },300);
		}, function() {
		    $(this).children("dd").stop(true).animate({
		        "top" : 0,
		        "left" : 0,
		        "opacity" : 0
		    },300);
		}
	);
	$("#pic-con-box dl dd").click(function() {
		var xhr = new XMLHttpRequest();
		xhr.open("get", "supervision-case-details.php", true);
		xhr.send(null);
		xhr.onload = function() {
			window.location.href="../cn/supervision-case-details.php";
		}
	});
}

// 监理案例页效果 结束

// 表单页面 登录页面的效果 开始
(function() {
 // 聚焦失焦
    $(".login-border-sf input").focus(function() {
        $(this).parent().css({
            "borderColor" : "#ffa751"
        }).siblings().css({
            "borderColor" : "#fff"
        });
    })
    $(".sure-sf input").blur(function() {
        $(this).parent().css({
            "borderColor" : "#fff"
        }).parent().siblings().css({
            "borderColor" : "#fff"
        })
    })
    $(".sure-sf input").focus(function() {
        $(this).parent().css({
            "borderColor" : "#ffa751"
        }).parent().siblings().css({
            "borderColor" : "#fff"
        })
    })
    // 记住密码
    var clickTure = true;
    $(".remember-sf em").click(function() {
        if(clickTure == true) {
            $(this).css({
                "background-position" : "1px 1px"
            });
            clickTure = false;
        } else {
            $(this).css({
                "background-position" : "50px 50px"
            });
            clickTure = true;
        }
    });
    // 正则验算手机号码
    var regSfs = /^1[34578]\d{9}$/;
    $(".telephone-sf input").blur(function() {
        if(regSfs.test($(this).prop("value")) == false) {
            $(".telephone-error-sf").css({
                "display" : "block"
            })
        }
        if($(this).prop("value") == "") {
            $(".telephone-error-sf").css({
                "display" : "block"
            }).html("手机号码不能为空");
        }
    });
    $(".telephone-sf input").focus(function() {
        $(".telephone-error-sf").css({
                "display" : "none"
        });
    })
    // 正则验算密码,数字字母，特殊符号都可以，6到18位组成。
    $(".pass-sf input").blur(function() {
         var reg1 = /^[\x21-\x7e]{6,18}$/g;
         if(reg1.test($(this).prop("value")) != false) {
            $(".pass-error-sf").css({
                "display" : "none"
            });
         } else {
            $(".pass-error-sf").css({
                "display" : "block"
            });
         };
         if($(this).prop("value") == "") {
            $(".pass-error-sf").css({
                "display" : "block"
            }).html("请输入密码");
        }
    });
    $(".pass-sf input").focus(function() {
        $(".pass-error-sf").css({
                "display" : "none"
            });
    });
    // 验证码匹配
    $(".sure-number strong, .active-number").click(function() {
        function differentRandom(len, x, y) {
            var arr = [];
            var num;
            for(var i = 0; i < len; i++) {
                num = Math.floor(Math.random() * x + y);
                for (var j = 0; j < arr.length; j++) {
                    if (num == arr[j]) {
                        num = Math.floor(Math.random() * x + y);
                        j = -1;
                    }
                }
                arr.push(num);
            }
            return arr;
        }
        var arrA = differentRandom(4, 10, 0);
        $(".sure-number strong").html(arrA);
        $(".active-number").html(arrA);
    });
    $(".sure-sf input").blur(function() {
    	// console.log($(this).prop("value") == $(".sure-number strong").html());
        if($(this).prop("value") == $(".sure-number strong").html()) {
            $(".sure-error-sf").css({
                "display" : "none"
            })
        } else {
            $(".sure-error-sf").css({
                "display" : "block"
            })
        }
        if($(this).prop("value") == "") {
             $(".sure-error-sf").html("验证码不能为空");
        }
    });
    // 点击登录成功跳转到个人用户链接
    $("#btnSf").click(function() {
    	var reg1 = /^1[34578]\d{9}$/;
        var reg2 = /^[\x21-\x7e]{6,18}$/;
        var telephone = $(".telephone-sf input").val();
        var pass = $(".pass-sf input").prop("value");
        var sure = $(".sure-sf input").prop("value");
        $.post("login_ajax.php", $("form").serializeArray(), function(response) {
            if(!response.state){
                $(".telephone-error-sf").css({
                	"display" : "block"
                }).html("请输入正确用户名和密码");
            } else {
                if(sure == $(".sure-number strong").html()) {
               		window.location.href = "personal-center.php";
                } else {
                    $(".telephone-error-sf").css({
                        "display" : "block"
                    }).html("请输入正确用户名和密码");
                }  
            }
        });
    });
})();
// 表单页面 登录页面的效果 结束


// 表单页面 个人中心页的效果 开始
(function() {
   // 点击切换页面到我的工地，我的评论，账号设置
   $(".right-nav-sf span").click(function() {
       $(this).addClass("right-show-sf").siblings("span").removeClass("right-show-sf").parent().siblings().children().eq($(this).index()).css({
           "display" : "block"
       }).siblings().css({
           "display" : "none"
       });
   });
   $(".content-left-sf h3").click(function() {
       $(".right-account-sf").css({
           "display" : "block"
       }).siblings().css({
           "display" : "none"
       });
       $(".right-nav-sf").children().eq(2).addClass("right-show-sf").siblings("span").removeClass("right-show-sf");
   });
   // 账号设置
   // 人物信息设置
   var startSure = true;
   $(".people-text-sf ul .replace-sf").click(function() {
       if(startSure == true) {    
           $(this).html("保存").css({
               "fontWeight" : "bold"
           }).siblings("div").css({
               "display" : "none"
           }).siblings("input").css({
               "display" : "block"
           });
           startSure = false;
       } else {
           if($(this).siblings("input").prop("value") == "") {
               $(this).siblings("em").css({
                    "display" : "block"
               });
           } else {
               $(this).html("修改").css({
                   "fontWeight" : "lighter"
               }).siblings("input").css({
                   "display" : "none"
               }).siblings("em").css({
                    "display" : "none"
               });
               
               var con = $(this).siblings("input").prop("value");
               // console.log(con);
               $(this).siblings("div").css({
                   "display" : "block"
               }).html(con);
               $(".sex-choice-sf").css({
                   "display" : "none"
               }); 
               startSure = true;
           }  
       }
   });
   $(".set-sex-sf input").focus(function() {
       $(".sex-choice-sf").css({
           "display" : "block"
       });
   })
       $(".sex-choice-sf li").click(function() {
           var com = $(this).html();
           // console.log(com);
           $(".set-sex-sf input").val(com);
       });
     // 上传头像
    $(".set-people-sf").click(function() {
    	$(".head-picture-sf").css({
    		"display" : "block"
    	});
    });
    $(".cancel-pic-sf").click(function() {
    	$(".head-picture-sf").css({
    		"display" : "none"
    	});
    });
    // 插入日历
    $("#day").focus(function() {
		$(this).datetimepicker();
	});
   // 安全设置等级动画
   var timer = null;
   $(".right-nav-sf span, .content-left-sf h3").click(function() { 
       var count = 0; 
       $(".safety-lev-sf em i").animate({
       width : 135
       }, 2000); 
       timer = setInterval(function() {
           count++;
           if(count >= 80) {
               count = 80;
               clearInterval(timer);
           }
           $(".safety-count-sf span").html(count);
       }, 24);
   })
   // 点击修改，跳出修改选项
   $(".account-login-sf em").click(function() {
       $(this).css({
           "display": "none"
       }).parent().siblings().children().fadeIn(500);
   })
   // 点击取消恢复修改前
   $(".account-left-sf").click(function() {
       $(this).parent().parent().fadeOut(1000)
       $(".account-login-pass-sf em, .account-mail-sf em, .account-telephone-sf em").css({
           "display": "block"
       });
       $(".account-sure-sf em, .mail-new-sf em").css({
            "display": "none"
        });    
   });
   // 聚焦失焦事件
   $(".account-form-sf input, .mail-form-sf input, .telephone-form-sf input").focus(function() {
       $(this).parent().css({
           "borderColor" : "#ffa851"
       }).siblings().css({
           "borderColor" : "#e1e1e1"
       });
   })
   // 正则判断
   $(".account-form-sf .account-right-sf").click(function() {
       var reg = /^[\x21-\x7e]{6,12}$/;
       var agoSf = $(".account-ago-sf input").prop("value");
       var newSf = $(".account-form-sf .account-new-sf input").prop("value");
       var sureSf = $(".account-form-sf .account-sure-sf input").prop("value");
       if((reg.test(agoSf) == true) && (reg.test(newSf) == true) && (reg.test(sureSf) == true) && (newSf == sureSf)) {
           $(".account-sure-sf em").css({
                "display": "block"
            }).html("恭喜设置成功").fadeOut(1000);  
            $(".account-form-sf form").fadeOut(1000); 	
           $(".account-login-pass-sf em, .account-mail-sf em, .account-telephone-sf em").css({
               "display": "block"
           });
       } else {
       		$(".account-sure-sf em").css({
       			"display": "block"
       		});
       };
       $(".account-form-sf input").focus(function() {
            $(".account-sure-sf em").css({
                "display": "none"
            });
       });
   });
   // 判断邮箱
       $(".mail-form-sf .account-right-sf").click(function() {
           var reg5 =/^\d{5,10}\@\w{2,3}\.\w{2,3}$/;
           var reg6 =/^\d{5,10}\@\w{2,3}\.\w{2,3}$/;
           var agoMail = $(".mail-ago-sf input").prop("value");
           var newMail = $(".mail-new-sf input").prop("value");
           if(reg6.test(newMail) == true) {
           		$(".mail-new-sf em").css({
                    "display": "block"
                }).html("恭喜设置成功").fadeOut(1000);
                $(".mail-form-sf form").fadeOut(1000);
                $(".account-login-pass-sf em, .account-mail-sf em, .account-telephone-sf em").css({
                   "display": "block"
                });
           } else {
           		$(".mail-new-sf em").css({
           			"display": "block"
           		});
           };
           $(".mail-new-sf input").focus(function() {
                $(".mail-new-sf em").css({
                    "display": "none"
                });
           });
       });    	
})();
// 查看更多评论
function personalMore() {
   	var con = document.getElementById('comment-content-hyq');
   	$(".comment-more-hyq p").click(function() {
   		$(this).css({"display" : "none"}).siblings("span").css({"display" : "block"}).siblings(".comment-loading").fadeIn(0).delay(1000).fadeOut(0, function() {
   			$(this).siblings("span").css({"display" : "none"});
   			// 插入JS方法
   			// json插入结构
  
   			// 创建一个新的AJAX对象
   			var xhr = new XMLHttpRequest();
   			//确定要加载的网址和方式
   			xhr.open("get", "../cn/article-list-add.json", true);
   			// 开始异步加载
   			xhr.send(null);
   			xhr.onload = function() {
   				var data = JSON.parse(xhr.responseText);
   				for(var i = 0; i < 4; i++) {
   					con.innerHTML += data.structurePersonal;				
   				}
   			}
   			$(".comment-more-hyq p").css({"display" : "block"});
   		});		
   	});
}        
// 表单页面 个人中心页的效果 结束

// 表单页面 注册页面的效果 开始
(function() {
	// 聚焦失焦
   $(".register-border-sf input").focus(function() {
       $(this).parent().css({
           "borderColor" : "#ffa751"
       }).siblings().css({
           "borderColor" : "#fff"
       });
       $(".alert-error").css({
            "display" : "none"
       });
   });
   $(".active-sf input").blur(function() {
       $(this).parent().css({
           "borderColor" : "#fff"
       }).parent().siblings().css({
           "borderColor" : "#fff"
       });

   })
   $(".active-sf input").focus(function() {
       $(this).parent().css({
           "borderColor" : "#ffa751"
       }).parent().siblings().children("div").css({
           "borderColor" : "#fff"
       });
       $(".alert-error").css({
            "display" : "none"
       });
   });
   // 点击阅读选中
   var readTrue = true;
   $(".read-sf em").click(function() {
       if(readTrue == true) {
           $(this).css({
               "background-position" : "50px 50px"
           });
           readTrue = false;
       } else {
           $(this).css({
               "background-position" : "1px 1px"
           });
           readTrue = true;
       }
   })
   // 正则验算手机号码
   $(".register-telephone-sf input").blur(function() {
       var regSf = /^1[34578]\d{9}$/;
       if(regSf.test($(this).prop("value")) == true) {
           $(".register-telephone-sf span").css({
               "display" : "block",
               "background-position" : "-114px -317px"
           }).html("");
       } else {
           $(".register-telephone-sf em").css({
               "display" : "block",
               "background-position" : "0px 0px"
           }).html("x");
           
       }
       if($(this).prop("value") == "") {
           $(".register-telephone-sf span, .register-telephone-sf em").css({
               "display" : "none"
           });
       };
   });
   $(".register-telephone-sf input").focus(function() {
       $(".register-telephone-sf em").css({
               "background-position" : "50px 50px",
               "display" : "none"
           }).html("");
   });
   // 正则验算密码,数字字母，特殊符号都可以，6到18位组成。
   $(".register-pass-sf input").blur(function() {
       var reg1 = /^[\x21-\x7e]{6,18}$/;
       if(reg1.test($(this).prop("value")) == true) {
           $(".register-pass-sf span").css({
               "display" : "block",
               "backgroundPosition" : "-114px -317px"
           }).html("");
       } else {
           $(".register-pass-sf em").css({
               "display" : "block",
               "background-position" : "0px 0px"
           }).html("x");        
       };
       if($(this).prop("value") == "") {
           $(".register-pass-sf span, .register-pass-sf em").css({
               "display" : "none"
           });
       };
   });
   $(".register-pass-sf input").focus(function() {
       $(".register-pass-sf em").css({
               "background-position" : "50px 50px",
               "display" : "none"
           }).html("");
   });
   // 确认密码
   $(".sure-pass-sf input").blur(function() {
       var registerPass = $(".register-pass-sf input").prop("value");
       if(($(this).prop("value")) == registerPass) {
           $(".sure-pass-sf span").css({
               "display" : "block",
               "backgroundPosition" : "-114px -317px"
           }).html("");
       } else {
           $(".sure-pass-sf em").css({
               "display" : "block",
               "background-position" : "0px 0px"
           }).html("x");        
       };
       if($(this).prop("value") == "") {
           $(".sure-pass-sf span, .sure-pass-sf em").css({
               "display" : "none"
           });
       };
   });
   $(".sure-pass-sf input").focus(function() {
       $(".sure-pass-sf span").css({
               "background-position" : "50px 50px",
               "display" : "none"
           }).html("");
   });

   $(".sure-pass-sf input").focus(function() {
       $(".sure-pass-sf em").css({
               "background-position" : "50px 50px",
               "display" : "none"
           }).html("");
   });
   // 提交数据/点击跳转到用用户链接
   // 注册数据库
   $("#btn").click(function() {
       var regSf = /^1[34578]\d{9}$/;
       var reg1 = /^[\x21-\x7e]{6,18}$/;
       var phone = $(".register-telephone-sf input").prop("value");
       var pass = $(".register-pass-sf input").prop("value");
       var sure = $(".sure-pass-sf input").prop("value");
       var activeSf = $("#sure").prop("value");
       $.post("register_ajax.php", $("form").serializeArray(), function(response){
           if(!response.state){
                $(".alert-error").css({
                        "display" : "block"
                });
           } else {
   
               if((regSf.test(phone) == true) && (reg1.test(pass) == true) && (pass == sure) &&(activeSf == $(".active-number").html())) {
                   $(".alert-error").css({
                        "display" : "block"
                    }).html("注册成功");
                   window.location.href = "login.php"; 
               } else {
               	   $(".alert-error").css({
               	   		"display" : "block"
               	   });
               };    
           };
       });
   });
   $(".register-alert-sf span").click(function() {
   		$(this).parent().css({
   			"display" : "none"
   		}); 
   });
})();
// 表单页面 注册页面的效果 结束

// 表单忘记密码页效果 开始
(function() {
	// 聚焦有边框，头像变色
	$(".forget-telephone-sf input").focus(function() {
	    $(".forget-telephone-sf").css({
	        "borderColor" : "#ffa851"
	    }).children("span").css({
	        "background-position" : "-51px -317px"
	    });
        $(".forget-sure-sf em").css({
            "display" : "none"
        });
	});
	// 失焦头像变暗，边框消失
	$(".forget-telephone-sf input").blur(function() {
	    $(".forget-telephone-sf").css({
	        "borderColor" : "#fff"
	    }).children("span").css({
	        "background-position" : "-75px -317px"
	    })
	})
    $(".forget-sure-sf input").focus(function() {
        $(".forget-sure-sf em, .forget-outer-sf em").css({
            "display" : "none"
        });
        // $(".forget-outer-sf em").css({
        //         "display" : "block"
        //     });
    })
	// 验证码匹配
	$(".forget-sure-sf").click(function() {
	    // 聚焦有边框，头像变色
	    $(".forget-sure-sf").css({
	        "borderColor" : "#ffa851"
	    }).children("span").css({
	        "background-position" : "-3px -316px"
	    });
	    // 失焦头像变暗，边框消失
	    $(".forget-sure-sf input").blur(function() {
	        $(".forget-sure-sf").css({
	            "borderColor" : "#fff"
	        }).children("span").css({
	            "background-position" : "-27px -316px"
	        });
	    });
	});
	$(".forget-sure-number").click(function() {
	    // 点击，随机生成0-9四个数字为验证码
	    var arrA = differentRandom(4, 10, 0);
	    function differentRandom(len, x, y) {
	        var arr = [];
	        var num;
	        for(var i = 0; i < len; i++) {
	            num = Math.floor(Math.random() * x + y);
	            for (var j = 0; j < arr.length; j++) {
	                if (num == arr[j]) {
	                    num = Math.floor(Math.random() * x + y);
	                    j = -1;
	                }
	            }
	            arr.push(num);
	        }
	        return arr;
	    }
	    $(".forget-sure-number").html(arrA);
	    
	})
	// 手机号和验证码都匹配成功进入下一步输入手机验证码
	$(".forget-next-sf input").click(function() {
	    // 手机号码验证
	    var reg = /^1[34578]\d{9}$/;
	    var phone = $(".forget-telephone-sf input").prop("value");
	    var sure = $(".forget-sure-sf input").prop("value");
	    // 正则添加分隔符“-”
	    var reg1= /(?=(?!\b)(\d{4})+$)/g;
	    // 判断手机号和验证码都正确进入下一步
	    if((reg.test(phone) == true) && (sure == $(".forget-sure-number").html())) {
	        $(".forget-inner-sf h1").children().eq(1).css({
	            "color" : "#fea851"
	        });
	        $(".forget-second-sf .forget-sure-number").html("获取激活码");
	        $(".forget-second-sf .forget-telephone-sf input").val(phone.replace(reg1, "-"));
	        $(".forget-first-sf").css({
	            "display" : "none"
	        });
	        $(".forget-second-sf").css({
	            "display" : "block"
	        });
	    } else {
	        $(".forget-sure-sf em").css({
	            "display" : "block"
	        });
	    };
	});
	// 手机号码验证验证
	$(".forget-second-sf .forget-next-sf input").click(function() {
	    var number = $(".forget-second-sf .forget-sure-sf input").prop("value");
	    var activeNum = $(".forget-sure-number").html();
	    // 判断手机验证码是否正确，正确进入最后一步设置密码
	    if(number == activeNum) {
	        $(".forget-third-sf").css({
	            "display" : "block"
	        }).siblings(".forget-second-sf").css({
	            "display" : "none"
	        });
	        $(".forget-inner-sf h1").children().eq(2).css({
	            "color" : "#fea851"
	        });
	        $(".forget-alert-sf").css({
	        	"display" : "none"
	        })
	    } else {
	        $(".forget-outer-sf em").css({
	            "display" : "block"
	        });
	    };
	});
	// 第三步输入验证码
	// 聚焦有边框，头像变色
	$(".forget-telephone-third-sf input, .forget-sure-third-sf input").focus(function() {           
	    $(this).parent().css({
	        "borderColor" : "#ffa851"
	    }).children("span").css({
	        "background-position" : "-3px -316px"
	    });
        $(".forget-sure-third-sf em").css({
            "display" : "none"
        });
	})
	// 失焦头像变暗，边框消失
	$(".forget-telephone-third-sf input, .forget-sure-third-sf input").blur(function() {
	    $(this).parent().css({
	        "borderColor" : "#fff"
	    }).children("span").css({
	        "background-position" : "-27px -316px"
	    });
	});
	// 判断设置新密码是否成功
	$(".forget-third-sf .forget-next-sf input").click(function() {
	    var reg1 = /^[\x21-\x7e]{6,18}$/;
	    var newPass = $(".forget-telephone-third-sf input").prop("value");
	    var newSure = $(".forget-sure-third-sf input").prop("value");
	    if((newPass == newSure) && (reg1.test(newPass) == true)) {
	        $(".forget-sure-third-sf em").css({
	            "display" : "block"
	        }).html("设置成功").fadeOut(1000);
            window.location.href = "login.php";
	                     
	    } else {
	        $(".forget-sure-third-sf em").css({
	            "display" : "block"
	        });
	    };
	});
})();
// 表单忘记密码页效果 结束


// APP下载页效果 开始
$(".appiphone").hover(
	function() {
		$(this).css({"background" : "#f9a754"}).children("dd").css({"color" : "#fff"}).siblings("dt").children("img").prop({"src" : "../images/demo/apple_white.png"})
	},
	function() {
		$(this).css({"background" : "none"}).children("dd").css({"color" : "#f9a754"}).siblings("dt").children("img").prop({"src" : "../images/demo/apple.png"})
	});
$(".appandroid").hover(
	function() {
		$(this).css({"background" : "#f9a754"}).children("dd").css({"color" : "#fff"}).siblings("dt").children("img").prop({"src" : "../images/demo/android_white.png"})
	},
	function() {
		$(this).css({"background" : "none"}).children("dd").css({"color" : "#f9a754"}).siblings("dt").children("img").prop({"src" : "../images/demo/android.png"})
	});
// APP下载页效果 结束

// 图片弹窗效果 开始
// 本页弹窗
$(".main-LG strong").hover(function() {
	if($(this).css("backgroundPosition") == "-315px 0px") {
		$(this).css({"cursor" : "pointer"});
	}		
});
$(".main-LG strong").click(function() {
	if($(this).css("backgroundPosition") == "-315px 0px") {
		photosPop();
		document.documentElement.style.overflowY='hidden';
	}
});
$(".pic-more-hyq").click(function() {
	photosPop();
});
$(".mind-sj span").click(function() {
	$(".mind-sj").css({"display" :"none"}).siblings(".up-sj").slideUp(1000).next().slideUp(1000);
	$(".something-sj-wrap").stop().fadeOut(800);
	document.documentElement.style.overflowY = '';
});
// 点击左
$(".left-sj").click(function() {
	$(".con-sj").css({left : function(index, value) {
		if (parseFloat(value) == -7800) {
			return 0;
		} else{
			return parseFloat(value) -600;
		}
		}});
	var iNum_sj = $(".mind-sj em i").text();
	// console.log(iNum_sj);
	if (iNum_sj == 1) {
		$(".mind-sj em i").text(14);
	} else {
		$(".mind-sj em i").text(iNum_sj - 1);
	}
});
// 点击右
$(".right-sj").click(function() {
	$(".con-sj").css({left : function(index, value) {
		if (parseFloat(value) == 0) {
			return -7800;
		} else{
			return parseFloat(value) + 600;
		}
		}});
	var iNum_sj = $(".mind-sj em i").text();
	if (iNum_sj == 14) {
		$(".mind-sj em i").text(1);
	} else {
		$(".mind-sj em i").text(iNum_sj - 0 + 1);
	}
});

function photosPop() {
	// $('body,html').stop(true).animate({"scrollTop" : $('body,html').innerHeight() * 0.25},0);
	var ceiSroHyq = ($(window).scrollTop() / $("body").innerHeight())*100;
	$(".down-sj").css({
		"height" : ceiSroHyq + 5 + "%",
		"bottom" : (95 - ceiSroHyq) + "%"
	})
	$(".up-sj").css({
		"height" : (95 - ceiSroHyq) + "%",
		"top" : ceiSroHyq + 5 + "%"
	})
	$(".mind-sj").css({"top" : ceiSroHyq + "%"})
		$(".something-sj-wrap").css({"display":"block"});
		$(".up-sj").slideDown(1000).next().slideDown(1000, function() {
			$(".mind-sj").css({"display" :"block"}).next().css({"display" : "block"});
		})

}
// 图片弹窗效果 结束
