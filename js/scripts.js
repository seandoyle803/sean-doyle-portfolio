// Scroll-aware navigation
(function () {
    const header = document.getElementById('site-header');
    if (!header) return;

    function onScroll() {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();
