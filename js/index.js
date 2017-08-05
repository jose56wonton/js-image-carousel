$(document).ready(function(){

    var imagelist = $(".slider li");
    var buttonlist = $(".buttons li");
    var interval, current;
    
    console.log(imagelist.length);
    function the_loop(i){
        if(i == 'next'){            
            i = (current < imagelist.length - 1) ? current+1 : 0
        }
        if(i == 'prev'){
            i = (current == 0) ? imagelist.length-1 :current-1
        }
        imagelist.fadeOut(500);
        imagelist.eq(i).fadeIn(500);
        buttonlist.removeClass("active").eq(i).addClass("active");
        current = i;
        clearTimeout(interval);
        interval = setTimeout(function(){the_loop('next');},3000);
    }

    $(".slider").hover(function(){
        $(".prev").fadeIn(300);
        $(".next").fadeIn(300);
    },function(){
        $(".prev").fadeOut(300);
        $(".next").fadeOut(300);
    });

    $(".prev").click(function(){
        the_loop('prev');
    });
    $(".next").click(function(){
        the_loop('next');
    });

    $(".buttons li").click(function(){
        var i = $(".buttons li").index(this);        
        the_loop(i);
    })



    the_loop('next');
});