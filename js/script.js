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

    // Formulario de contacto con Netlify y almacenamiento local
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        // Almacenar localmente antes del envío a Netlify
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

        // Mostrar mensaje de éxito (Netlify manejará el envío)
        alert('Mensaje enviado. Gracias por contactar.');
        // No resetear el form aquí, Netlify lo hará después del envío
    });
});
