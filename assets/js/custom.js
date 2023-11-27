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

// Set initial position outside the viewport on the right side
t1.set(staggeredFlipInChars, {
    x: "100%",
    transformOrigin: "center center 40px",
    backfaceVisibility: "hidden",
    
});

t1.from(staggeredFlipInChars, {
    opacity: 1,
    x: -0, // Final position
    rotateX: -120, // Rotate in the opposite direction
    duration: 1,
    stagger: 0.04,
    ease: "cubic-bezier(0.425, 0.005, 0.0, 1.0)"
});

// text animation
// code pen js open
window.addEventListener("load", function () {
  let splitWords = function (selector) {
    var elements = document.querySelectorAll(selector);

    elements.forEach(function (el) {
      el.dataset.splitText = el.textContent;
      el.innerHTML = el.textContent
        .split(/\s/)
        .map(function (word) {
          return word
            .split("-")
            .map(function (word) {
              return '<span class="word">' + word + "</span>";
            })
            .join('<span class="hyphen">-</span>');
        })
        .join('<span class="whitespace"> </span>');
    });
  };

  let splitLines = function (selector) {
    var elements = document.querySelectorAll(selector);

    splitWords(selector);

    elements.forEach(function (el) {
      var lines = getLines(el);

      var wrappedLines = "";
      lines.forEach(function (wordsArr) {
        wrappedLines += '<span class="line"><span class="words">';
        wordsArr.forEach(function (word) {
          wrappedLines += word.outerHTML;
        });
        wrappedLines += "</span></span>";
      });
      el.innerHTML = wrappedLines;
    });
  };

  let getLines = function (el) {
    var lines = [];
    var line;
    var words = el.querySelectorAll("span");
    var lastTop;
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (word.offsetTop != lastTop) {
        // Don't start with whitespace
        if (!word.classList.contains("whitespace")) {
          lastTop = word.offsetTop;

          line = [];
          lines.push(line);
        }
      }
      line.push(word);
    }
    return lines;
  };

  splitLines(".reveal-text");

  let revealText = document.querySelectorAll(".reveal-text");

  gsap.registerPlugin(ScrollTrigger);
  let revealLines = revealText.forEach((element) => {
    const lines = element.querySelectorAll(".words");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        toggleActions: "restart none none reset"
      }
    });
    tl.set(element, { autoAlpha: 1 });
    tl.from(lines, 1, {
      xPercent: 100, // Use xPercent instead of yPercent
      ease: Power3.out,
      stagger: 0.25,
      delay: 0.2
    });
  });
});


// code pen js closed



