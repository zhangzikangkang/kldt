/**
 * Created by Administrator on 2017/10/10 0010.
 */
//01 ���Ź���
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
    var lineHeight = $self.find("li:first").height(); //��ȡ�и�
    $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
        $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo��ֱ���ƶ�Ԫ��
    })
}

//02 ģ��չ�����۵�
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


