console.log('[OCWCandy] No bullshit, just for the sake of my mental health.');

(function(){
    $(document).ready(function() {
        document.getElementById("on").addEventListener('click', toggleon, false);

        function toggleon () {
            chrome.tabs.query({currentWindow: true, active: true},
                function (tabs) {
                    chrome.tabs.executeScript(tabs[0].id, {
                        code: `$("body").css({"margin":"3px"});
                        $("#wrapper").css({
                            "max-width":"100%",
                            "width":"100%",
                            "border":"none",
                            "padding":"0px"
                        });
                        $(".dokuwiki").find(".left_page").css({
                            "cssText":"width: 100% !important; padding: 0px;"
                        })
                        $(".dokuwiki").find(".level2").css({"margin-left":"0px"});
                        $(".dokuwiki").find(".level3").css({"margin-left":"0px"});
                        $(".dokuwiki").find(".level4").css({"margin-left":"0px"});`
                    });
                })   
        }

        document.getElementById("off").addEventListener('click', toggleoff, false);

        function toggleoff () {
            chrome.tabs.query({currentWindow: true, active: true},
                function (tabs) {
                    chrome.tabs.executeScript(tabs[0].id, {
                        code: `location.reload();`
                    });
                })  
        }
    });
})(jQuery);