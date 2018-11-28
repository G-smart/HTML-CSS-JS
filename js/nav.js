(function() {

	var hamburger = {
	  navToggle: document.querySelector('.nav-toggle'),
	  nav: document.querySelector('nav'),
  
	  doToggle: function(e) {
		
		this.navToggle.classList.toggle('expanded');
		this.nav.classList.toggle('expanded');
	  }
	};
  
	hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
	hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
  
  }());

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });