$(document).ready(function () {
  const $burger = $(".header-container .menu");
  const $mobile = $(".mobile-menu");

  if (!$burger.length || !$mobile.length) return;

  function toggleMenu(open) {
    $burger
      .toggleClass("open", open)
      .html(
        open ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>'
      );
    $("body").toggleClass("body-locked", open);
  }

  // toggle burger
  $burger.on("click", function (e) {
    e.preventDefault();
    const isOpen = !$burger.hasClass("open");
    toggleMenu(isOpen);
    isOpen
      ? $mobile.stop(true, true).slideDown(300)
      : $mobile.stop(true, true).slideUp(300);
  });

  // scroll to section
  $mobile.on("click", "a[data-target]", function (e) {
    e.preventDefault();
    const id = $(this).data("target");
    const $target = $("#" + id);
    if ($target.length) {
      $("html, body").animate({ scrollTop: $target.offset().top - 70 }, 600);
    }
  });
});
