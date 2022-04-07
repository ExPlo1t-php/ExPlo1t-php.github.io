// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Navbar change color on scroll
$(function () {
    $(document).scroll(function () {
      var $nav = $("nav");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  