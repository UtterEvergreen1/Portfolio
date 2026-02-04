window.addEventListener('navbarLoaded', () => {
    const $nav = $("#mainNav");

    $(window).scroll(() => {
        $nav.toggleClass("scrolled", $(this).scrollTop() > 0);
    });

    $nav.mouseenter(() => {
        $nav.removeClass("scrolled");
    });

    $nav.mouseleave(() => {
        if ($(this).scrollTop() !== 0) {
            $nav.addClass("scrolled");
        }
    });
});