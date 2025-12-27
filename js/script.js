// Script básico para funcionalidad del sitio
document.addEventListener('DOMContentLoaded', function() {
    // Toggle menú móvil
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Smooth scroll para navegación
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const offsetTop = targetSection.offsetTop - 70; // Ajuste por navbar fija

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Cerrar menú móvil después de click
            navMenu.classList.remove('active');
        });
    });

    // Placeholder para búsqueda (puede expandirse)
    const searchButton = document.querySelector('.search-box button');
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Funcionalidad de búsqueda próximamente disponible.');
    });

    // Formulario de contacto con Netlify
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        // Mostrar mensaje de éxito (Netlify manejará el envío)
        alert('Mensaje enviado. Gracias por contactar.');
        // Netlify reseteará el form después del envío
    });
});
