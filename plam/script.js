document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el envío del formulario

    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');

    // Aquí podrías añadir lógica para enviar los datos a un servidor si fuera necesario.
});