/**
 * Created by Administrator on 2017/10/10 0010.
 */
//01 新闻滚动
$(function(){
    var $this = $(".roll_text");
    var scrollTimer;
    $this.hover(function(){
        clearInterval(scrollTimer);
    },function(){
        scrollTimer = setInterval(function(){
            scrollNews( $this );
        }, 3000 );
    }).trigger("mouseleave");
});

function scrollNews(obj){
    var $self = obj.find("ul:first");
    var lineHeight = $self.find("li:first").height(); //获取行高
    $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
        $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo能直接移动元素
    })
}

//02 模块展开和折叠
$(function(){
    $(".downUp").toggle(function(){
        var $self = $(this);
        $self.parent().next().slideToggle(600,function(){
            $("img",$self).attr("src","img/down.jpg");
        });
    },function(){
        var $self = $(this);
        $self.parent().next().slideToggle(600,function(){
            $("img",$self).attr("src","img/up.jpg");
        });
    })
});


