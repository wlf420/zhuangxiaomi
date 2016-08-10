/* 
* @Author: anchen
* @Date:   2016-05-31 08:40:29
* @Last Modified by:   anchen
* @Last Modified time: 2016-06-14 11:25:44
*/
// 依屏幕大小设置大图高度
var bigpicHeight = $(window).height();
$(".banner-wlf").height(bigpicHeight);
// 大图渐变
var index = 0;
var bannerTimer = null;
function timerBanner() {
    $(".banner-list-wlf li").eq(index).stop(true).fadeIn(1000).siblings().stop(true).fadeOut(1000);
    $(".banner-wlf ol li").eq(index).addClass("active-wlf").siblings().removeClass("active-wlf");
    index++;
    if(index >= $(".banner-list-wlf li").length) {
        index = 0;
    }   
    bannerTimer = setTimeout(timerBanner, 2500);
}
timerBanner();
$(".banner-wlf ol li").click(function() {
    clearInterval(bannerTimer);
    $(this).addClass("active-wlf").siblings().removeClass("active-wlf").parents().siblings("ul").children().eq($(this).index()).stop(true).fadeIn(1000).siblings().stop(true).fadeOut(1000);
    index = $(this).index();
    bannerTimer = setTimeout(timerBanner, 0);
});
// 监理数据支持滑动
// mouseover/mouseout 有细微的卡顿
$(".data-slide-wlf dl").hover(
    function() {
    $(this).children("dd").stop().animate({
        "top" : "0"
    }, 200).children("div").stop().animate({
        "top" : "32%"
    }, 200);
},function() {
    $(this).children("dd").stop().animate({
        "top" : "262px"
    }, 200).children("div").stop().animate({
        "top" : "5%"
    }, 200);
});
// 监理案例展示——手风琴
var windowWidth = $(window).width();
if(windowWidth <= 1250) {
    $(".accor-wlf dl").css({
        "width" : (1250/6)
    })
} else {
    $(".accor-wlf dl").css({
        "width" :  (windowWidth/6)
    });   
}
$(window).resize(function() {
   var winResizeWidth = $(window).width();
   if(winResizeWidth <= 1250) {
        $(".accor-wlf dl").css({
            "width" : (1250/6)
         });
   } else {
        $(".accor-wlf dl").css({
            "width" : (winResizeWidth/6)
        });   
   }
});
    // console.log(winWidthHyq)
$(".accor-wlf dl").hover(
    function() {
        var winWidthHyq = $(".accor-wlf").outerWidth();
        // console.log($(this).outerWidth())
        if($(window).width() > 1250) {
            $(".accor-wlf dl dt img").css({"width" : (winWidthHyq/3) });     
            $(this).stop(true).animate({
                "width" : (winWidthHyq/3)
            }).siblings().stop(true).animate({
                "width" : ((winWidthHyq - (winWidthHyq/3))/5)
            });      
        } else {
            $(".accor-wlf dl dt img").css({"width" : "474px" });              
            $(this).stop(true).animate({
                "width" : "474px"
            }).siblings().stop(true).animate({
                "width" : ((1250 - 474)/5)
            }); 
        }
        $(this).children("dd").stop(true).animate({
            "bottom" : "0"
        }).parents().siblings().children("dd").stop(true).animate({
            "bottom" : "-82px"
        })
    },function() {
        var winWidthHyq = $(".accor-wlf").outerWidth();
        $(".accor-wlf dl").stop(true).animate({
            "width" : Math.ceil(winWidthHyq / 6)
        });
        $(this).children("dd").stop(true).animate({
            "bottom" : "-82px"
        });
    });

// tab切换
$(".tab-titlecon-wlf li").hover(
    function() {
        $(this).css({
            "background-color" : "#ffa751"
        }).siblings().css({
            "background-color" : "#2c2c2c"
        });
        $(this).parents().parents().siblings(".tab-con-wlf").children().eq($(this).index()).stop().fadeIn(200).css({
            "display" : "block"
        }).siblings().stop().fadeOut(200).css({
            "display" : "none"
        });
});
// tab切换——权威报道图片切换
(function() {
    var startLeft = $(".tab-con22-wlf").scrollLeft();
    $('.right-btn-wlf').click(function() {
        // 判断当前动画是否执行，若有则跳出函数
        if($(".tab-con22-wlf").is(":animated")) {
            return;
        }
        var liWidth = $(".tab-con22-wlf li").width() + parseInt($(".tab-con22-wlf li").css("marginRight"));
        var conWidth = liWidth * $(".tab-con22-wlf li").length;
        startLeft += liWidth;
        if(startLeft >= conWidth - $(".tab-con22-wlf").width() - parseInt($(".tab-con22-wlf li").css("marginRight"))) {
            startLeft = conWidth - $(".tab-con22-wlf").width() - parseInt($(".tab-con22-wlf li").css("marginRight"));
        }
        $(".tab-con22-wlf").stop(true).animate({
            "scrollLeft" : startLeft
        }, 2000);
    });
    $('.left-btn-wlf').click(function() {
        if($(".tab-con22-wlf").is(":animated")) {
                return;
            }
       var liWidth = $(".tab-con22-wlf li").width() + parseInt($(".tab-con22-wlf li").css("marginRight"));        
       startLeft -= liWidth;
       if(startLeft <= parseInt($(".tab-con22-wlf li").css("marginRight"))) {
           startLeft = 0;
       }
        $(".tab-con22-wlf").stop(true).animate({
            "scrollLeft" : startLeft
        }, 2000);
    }); 
})();
// 友情链接部分
var linkTimer = null;
var linkView = 0;
// $(".link-view-wlf ul").html($(".link-view-wlf ul").html());
var linkHeight = $(".link-view-wlf ul").height();
var viewHeight = $(".link-view-wlf").height();

function linkMove() {
    linkTimer = setInterval(linkScroll, 50);    
}linkMove();
function linkScroll() {
    linkView += 1;
    if(linkView >= linkHeight - viewHeight) {
        linkView = 0;
    }
    $(".link-view-wlf").scrollTop(linkView);
    if(linkView % viewHeight == 0) {
        clearInterval(linkTimer);
        linkTimer = setTimeout(linkMove, 1500);
    }
}
$(".link-down-wlf").click(
    function() {
        clearInterval(linkTimer);
        linkMove();
});
$(".link-view-wlf").mouseover(
    function() {
        clearInterval(linkTimer);
    });
$(".link-view-wlf").mouseout(
    function() {
        linkTimer = setTimeout(linkMove, 100);
    });

// 姓名手机号正则匹配
$(".tab-form-wlf ul li").eq(0).children("input").blur(function() {
    var regname = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]{2,10}$/;
    var name = $("#username").prop("value");
    if(name != "") {        
        if(regname.test(name) == false) {
            $("#username").siblings("h3").css({"display" : "block"});
            $(".form-button-wlf button a").prop({"href" : "#"});
        } else {
            $("#username").siblings("h3").css({"display" : "none"});
            $(".form-button-wlf button a").prop({"href" : "cn/register.php"});
        }
    } else {
        $("#username").siblings("h3").css({"display" : "none"});
    }
});
$(".tab-form-wlf ul li").eq(1).children("input").blur(function() {
    var regphone = /^1[34578]\d{9}$/;
    var phone = $("#userphone").prop("value");
    if(phone != ""){        
        if(regphone.test(phone) == false) {
            $("#userphone").siblings("h3").css({"display" : "block"});
            $(".form-button-wlf button a").prop({"href" : "#"});
        } else {
           $("#userphone").siblings("h3").css({"display" : "none"});
            $(".form-button-wlf button a").prop({"href" : "cn/register.php"});
        }
    } else {
         $("#userphone").siblings("h3").css({"display" : "none"});
    }
});