/**
 * ==========================================================================
 * SCRIPTS DE INTERACCIÓN INTEGRAL - MBS & POULTRY SCIENCE
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inicialización de la librería de íconos vectoriales Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Control Dinámico del Navbar al Hacer Scroll (Efecto Blur de Apple)
    const navbar = document.getElementById('navbar');
    
    const handleScrollNavbar = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    };

    window.addEventListener('scroll', handleScrollNavbar);


    // 3. Sistema Desplegable del Menú Móvil (Responsive Design)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Cerrar el menú automáticamente al seleccionar cualquier sección del mapa web
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }


    // 4. Algoritmo de Animación Asíncrona en Scroll (Scroll Reveal)
    const revealSections = () => {
        const reveals = document.querySelectorAll(".reveal");
        const windowHeight = window.innerHeight;
        const elementVisibleThreshold = 100; // Pixeles de anticipación

        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisibleThreshold) {
                element.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealSections);
    
    // Ejecución inicial por si el usuario actualiza el navegador en secciones intermedias
    revealSections();


    // 5. Manejo Limpio del Formulario de Contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Mensaje recibido con éxito. El equipo técnico de MBS se comunicará con usted de forma prioritaria.');
            contactForm.reset();
        });
    }
});