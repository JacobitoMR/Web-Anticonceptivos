document.addEventListener("DOMContentLoaded", function() {
    // Elementos interactivos
    const sections = document.querySelectorAll('.section');
    const scrollTopButton = document.querySelector('.scroll-top');
    
    // Animación de entrada para las secciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.content-fade').forEach(element => {
        observer.observe(element);
    });

    // Efecto hover en las secciones
    sections.forEach(section => {
        section.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });

    // Botón de scroll to top
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Precarga de imágenes
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const loadImage = new Image();
        loadImage.src = img.src;
        loadImage.onload = () => {
            img.classList.add('loaded');
        };
    });

    console.log("La página está completamente cargada y las interacciones están inicializadas.");
});