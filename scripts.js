console.log('[OCWCandy] No %c, no shit, just for the sake of my mental health.');


// source: https://stackoverflow.com/a/46961218
load_script = function(src) {
    // Initialize scripts queue
    if( load_script.scripts === undefined ) {
        load_script.scripts = [];
        load_script.index = -1;
        load_script.loading = false;
        load_script.next = function() {
            if( load_script.loading ) return;

            // Load the next queue item
            load_script.loading = true;
            var item = load_script.scripts[++load_script.index];
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = item.src;
            // When complete, start next item in queue and resolve this item's promise
            script.onload = () => {
                load_script.loading = false;
                if( load_script.index < load_script.scripts.length - 1 ) load_script.next();
                item.resolve();
            };
            head.appendChild(script);
        };
    };

    // Adding a script to the queue
    if( src ) {
        // Check if already added
        for(var i=0; i < load_script.scripts.length; i++) {
            if( load_script.scripts[i].src == src ) return load_script.scripts[i].promise;
        }
        // Add to the queue
        var item = { src: src };
        item.promise = new Promise(resolve => {item.resolve = resolve;});
        load_script.scripts.push(item);
        load_script.next();
    }

    // Return the promise of the last queue item
    return load_script.scripts[ load_script.scripts.length - 1 ].promise;
};

load_script("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js")
.then(function() {
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