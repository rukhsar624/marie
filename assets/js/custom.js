var animateHTML = function() {
    var elems;
    var windowHeight;
    function init() {
        elems = document.querySelectorAll('.block_anim');
        windowHeight = window.innerHeight;
        addEventHandlers();
        checkPosition();
    };
    function addEventHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
    };
    function checkPosition() {
        for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                elems[i].className = elems[i].className.replace(
                'block_anim',
                'fadeInLeftBig'
                );
            }
        }
    }
    return {
        init: init
    };
   };
   animateHTML().init();