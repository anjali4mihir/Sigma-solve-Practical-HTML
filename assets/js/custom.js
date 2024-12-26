
document.getElementById('notification-btn').addEventListener('click', () => {
    document.getElementById('notification-dropdown').classList.toggle('hidden');
});

document.getElementById('profile-btn').addEventListener('click', () => {
    document.getElementById('profile-dropdown').classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('selectAllCheckbox').addEventListener('change', function () {
        let checkboxes = document.querySelectorAll('.checkboxes');
        
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = this.checked;
        }, this);
    });

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    // Toggle mobile menu on click
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('menu-active');
        mobileMenu.classList.toggle('hidden'); // Keep hidden class for initial state
    });
});


function showTab(tabIndex) {
    document.querySelectorAll('.tab-content').forEach((content) => {
      content.classList.add('hidden');
    });
    document.querySelectorAll('.tab-button').forEach((button) => {
      button.classList.remove('text-blue-500', 'border-blue-500');
      button.classList.add('text-gray-500');
    });
    document.getElementById(`content${tabIndex}`).classList.remove('hidden');
    document.getElementById(`tab${tabIndex}`).classList.add('text-blue-500', 'border-blue-500');
}

//For animation content
jQuery(document).ready(function () {
    if (jQuery(window).width() >= 767) {
        var $animation_elements = jQuery('.animation-element');
        var $window = jQuery(window);
        
        function check_if_in_view() {
          var window_height = $window.height();
          var window_top_position = $window.scrollTop();
          var window_bottom_position = (window_top_position + window_height);
        
          jQuery.each($animation_elements, function() {
            var $element = jQuery(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
        
            // Check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
              $element.addClass('in-view');
            }
          });
        }
        
        // Bind the function to scroll and resize events
        $window.on('scroll resize', check_if_in_view);
        // Initial check on page load
        $window.trigger('scroll');
      
        var $animation_story = $('.show-on-scroll');
        function story_if_in_view() {
          var window_height = $window.height() / 2;
          var window_heighthalf = window_height / 2;
          var window_top_position = $window.scrollTop();
          var window_bottom_position = (window_top_position + window_heighthalf);
        
          $.each($animation_story, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
        
            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
              $element.addClass('is-visible');
            }// else{
            //   $element.removeClass('is-visible');
            //  }
          });
        }
        $window.on('scroll resize', story_if_in_view);
        $window.trigger('scroll');
    }
});


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('selectAllCheckbox').addEventListener('change', function () {
      let checkboxes = document.querySelectorAll('.checkboxes');
      
      checkboxes.forEach(function (checkbox) {
          checkbox.checked = this.checked;
      }, this);
  });

  // mobile menu js
  const menuIcon = document.getElementById('menu-icon');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileMenu = document.getElementById('mobile-menu');

  menuIcon.addEventListener('click', () => {
      mobileMenu.classList.add('menu-active');
      mobileMenu.classList.remove('hidden');
      
      hamburgerIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
  });

  closeIcon.addEventListener('click', () => {
      mobileMenu.classList.remove('menu-active');
      mobileMenu.classList.add('hidden');
      
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
  });


});

