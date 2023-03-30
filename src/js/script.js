// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Navbar change color on scroll
$(function () {
    $(document).scroll(function () {
      var $nav = $("nav");
      var $navLinks = $(".navlink",  $(this).scrollTop() > $nav.height());
      $nav.toggleClass('scrolled bg-purple-700', $(this).scrollTop() > $nav.height());
      $navLinks.toggleClass('text-white');
      console.log($nav.height());
    });
  });
  