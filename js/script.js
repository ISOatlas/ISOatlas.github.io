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

    // Formulario de contacto con Formspree y almacenamiento local
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        // No prevenir envío a Formspree, pero almacenar localmente
        const formData = new FormData(this);
        const notification = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
            timestamp: new Date().toISOString()
        };

        // Almacenar en localStorage
        const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
        notifications.push(notification);
        localStorage.setItem('notifications', JSON.stringify(notifications));

        // Mostrar mensaje de éxito (Formspree manejará el envío por email)
        alert('Mensaje enviado. Gracias por contactar.');
        this.reset();
    });
});
