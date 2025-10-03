document.addEventListener('DOMContentLoaded', () => {

    // 1. INICIALIZA OS ÍCONES (só precisa chamar uma vez)
    // ======================================================
    feather.replace();


    // 2. LÓGICA DO CARROSSEL DA EQUIPE/ORIENTADORES
    // ======================================================
    const toggleButton = document.getElementById('toggle-team-button');
    const slider = document.querySelector('.team-slider-container');
    const teamTitle = document.getElementById('team-title');
    const mentorsNote = document.getElementById('mentors-note');

    if (toggleButton && slider) {
        toggleButton.addEventListener('click', () => {
            slider.classList.toggle('show-mentors');

            if (slider.classList.contains('show-mentors')) {
                teamTitle.textContent = 'Nossos Orientadores';
                toggleButton.textContent = 'Ver a Equipe';
                mentorsNote.textContent = 'Clique para retornar aos desenvolvedores do projeto.';
            } else {
                teamTitle.textContent = 'Conheça a Equipe';
                toggleButton.textContent = 'Orientadores';
                mentorsNote.textContent = 'Clique em "Orientadores" para ver orientador e co-orientadora.';
            }
        });
    }


    // 3. LÓGICA DA ROLAGEM SUAVE PERSONALIZADA
    // ======================================================
    const scrollLinks = document.querySelectorAll('.nav-links a[href^="#"], .hero-buttons a[href^="#"], .cta-button[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Cálculo para centralizar a seção na tela
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
