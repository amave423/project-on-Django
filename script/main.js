document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector('.button');
    var menu = document.querySelector('.menu');
    var menuLinks = document.querySelectorAll('.menu-link');

    function toggleMenu() {
        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            button.setAttribute('aria-expanded', 'true');
            menu.setAttribute('aria-hidden', 'false');
            menuLinks.forEach(link => link.setAttribute('tabindex', '0'));
        } else {
            button.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-hidden', 'true');
            menuLinks.forEach(link => link.setAttribute('tabindex', '-1'));
        }
    }

    button.addEventListener('click', toggleMenu);
});
