// Nifty slidey subnav mojo ripped from bootstrap examples
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  $(function(){


    // fix sub nav on scroll
    var $win = $(window)
      , $nav = $('.subnav')
      , navTop = $('.subnav').length && $('.subnav').offset().top - 40
      , isFixed = 0

    processScroll()

    $win.on('scroll', processScroll)

    function processScroll() {
      var i, scrollTop = $win.scrollTop()
      if (scrollTop >= navTop && !isFixed) {
        isFixed = 1
        $nav.addClass('subnav-fixed')
      } else if (scrollTop <= navTop && isFixed) {
        isFixed = 0
        $nav.removeClass('subnav-fixed')
      }
    }

  })

}(window.jQuery)

// FitText.js text resize magic
$("#content-title").fitText(1.2);
$("#documentDescription").fitText(4.0);
// examples
//$("#fittext3").fitText(1.1, { minFontSize: 50, maxFontSize: '75px' });
//$("#fittext3").fitText(1.1, { minFontSize: '1em', maxFontSize: '3em' });
//$("#fittext3").fitText(1.1, { minFontSize: 50, maxFontSize: '75px' });
