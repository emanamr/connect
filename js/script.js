//but active class

$(document).ready(function () {
  'use strick'
  $('.navbar-nav .nav-item').click(function () {
    if ($(this) === $('.navbar-nav.show')) {
      $('.navbar-nav .nav-item').removeClass("active");
      $(this).addClass("active");
    }

    else {
      $('.navbar-nav .nav-item').removeClass("active");
      $(this).addClass("active");
    }

  });
});