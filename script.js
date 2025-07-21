   document.addEventListener('DOMContentLoaded', () => {
            const navbarToggler = document.getElementById('navbarToggler');
            const navbarResponsive = document.getElementById('navbarResponsive');
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
            const faqQuestions = document.querySelectorAll('.faq-question');

            // Toggle mobile navigation
            // Alterna la navegación móvil
            navbarToggler.addEventListener('click', () => {
                navbarResponsive.classList.toggle('active');
            });

            // Close mobile nav when a link is clicked
            // Cierra la navegación móvil cuando se hace clic en un enlace
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                if (navbarResponsive.classList.contains('active')) {
                    navbarResponsive.classList.remove('active');
                }
                });
            });

            // Smooth scrolling for navigation links
            // Desplazamiento suave para los enlaces de navegación
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // FAQ Accordion functionality
            // Funcionalidad de acordeón para Preguntas Frecuentes
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    const isActive = question.classList.contains('active');

                    // Close all other open answers
                    // Cierra todas las demás respuestas abiertas
                    faqQuestions.forEach(q => {
                        if (q !== question && q.classList.contains('active')) {
                            q.classList.remove('active');
                            q.nextElementSibling.style.display = 'none';
                        }
                    });

                    // Toggle current answer
                    // Alterna la respuesta actual
                    if (isActive) {
                        question.classList.remove('active');
                        answer.style.display = 'none';
                    } else {
                        question.classList.add('active');
                        answer.style.display = 'block';
                    }
                });
            });
        });
