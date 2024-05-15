document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            tabLinks.forEach(function(tabLink) {
                tabLink.classList.remove('active');
            });
            link.classList.add('active');

            tabContents.forEach(function(content) {
                content.classList.remove('active');
            });
            document.getElementById(targetId).classList.add('active');
        });
    });
});
