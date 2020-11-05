console.log('[OCWCandy] No %c, no shit, just for the sake of my mental health.');

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';    

document.getElementsByTagName('head')[0].appendChild(script);


(function(){
    $(document).ready(function() {
        $("body").css({"margin":"3px"});
        $("#wrapper").css({
            "max-width":"100%",
            "border":"none",
            "padding":"none"
        });
        $(".left_page").css({
            "width":"100% !important",
            "padding":"none"
        })
        $(".level2").css({"margin-left":"none"});
        $(".level3").css({"margin-left":"none"});
        $(".level4").css({"margin-left":"none"});
    });
})(jQuery);