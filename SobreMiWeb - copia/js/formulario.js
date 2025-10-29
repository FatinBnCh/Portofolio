// Validación de formulario
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simular envío (reemplaza con tu lógica real)
    setTimeout(() => {
        document.getElementById('form-success').style.display = 'flex';
        this.reset();
        
        // Ocultar mensaje después de 3 segundos
        setTimeout(() => {
            document.getElementById('form-success').style.display = 'none';
        }, 3000);
    }, 1000);
});