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

  // Function to show the loader
  function showLoader() {
    document.getElementById('loader').style.display = 'flex';
  }

  // Function to hide the loader
  function hideLoader() {
    document.getElementById('loader').style.display = 'none';
  }

  // Add an event listener to the window to show the loader when navigating
  window.addEventListener('beforeunload', showLoader);

  // If your navigation is done using AJAX or a single-page application framework,
  // you may need to use appropriate events for navigation start and end.
  // For example, if using jQuery for AJAX:
  // $(document).ajaxStart(showLoader);
  // $(document).ajaxStop(hideLoader);

  // Example: simulate a delay to see the loader
  document.addEventListener('DOMContentLoaded', function() {
    // Simulate a delay (you can remove this in a real scenario)
    showLoader();

    // Simulate a longer delay for demonstration purposes
    setTimeout(function() {
      hideLoader();
    }, 2000); // Adjust the timeout duration here
  });


// loader js closed
