document.addEventListener('DOMContentLoaded', () => {

    feather.replace();

    const scrollLinks = document.querySelectorAll('.nav-links a[href^="#"], .hero-buttons a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - (window.innerHeight / 2) + (targetElement.clientHeight / 2);

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});