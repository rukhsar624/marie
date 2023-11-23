new WOW({
    offset: 200
  }).init();
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
//    loader js open
  // function showLoader() {
  //   document.getElementById('loader').style.display = 'flex';
  // }
  // function hideLoader() {
  //   document.getElementById('loader').style.display = 'none';
  // }
  // window.addEventListener('beforeunload', showLoader);
  // document.addEventListener('DOMContentLoaded', function() {
  //   showLoader();
  //   setTimeout(function() {
  //     hideLoader();
  //   }, 2000);
  // });
// loader js closed
// text animation
const t1 = gsap.timeline();
        const staggeredFlipInText = new SplitText(".staggered-flip-in", {
            type: "chars"
        });
        const staggeredFlipInChars = staggeredFlipInText.chars;
        t1.set(staggeredFlipInChars, {
            transformOrigin: "center center 40px",
            backfaceVisibility: "hidden"
        });
        t1.from(staggeredFlipInChars, {
            opacity: 1,
            rotateY: -120,
            duration: 1,
            stagger: 0.04,
            ease: "cubic-bezier(0.425, 0.005, 0.0, 1.0)"
        });
// text animation
// primary num

// primary num

