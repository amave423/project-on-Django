function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var list = document.getElementById('list');
    var expanded = sidebar.classList.toggle('sidebar-expanded');

    list.setAttribute('aria-hidden', !expanded);

    var links = document.querySelectorAll('.menu-link');
    links.forEach(function (link) {
        if (expanded) {
            link.setAttribute('href', link.getAttribute('data-href'));
        } else {
            link.setAttribute('data-href', link.getAttribute('href'));
            link.removeAttribute('href');
        }
    });
}

function preventLink(event) {
    event.preventDefault();
}

document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.menu-link');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            if (document.getElementById('sidebar').classList.contains('sidebar-expanded')) {
                return true;
            } else {
                event.preventDefault();
            }
        });
    });
});
