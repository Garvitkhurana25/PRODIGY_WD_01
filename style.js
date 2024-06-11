document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    const links = document.querySelectorAll('.nav h4 a');
    if (!nav) {
        console.error("No element found with class 'nav'");
        return;
    }
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
