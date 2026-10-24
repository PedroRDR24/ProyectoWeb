document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formContacto");

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault(); // Detener envío para validar

        let esValido = true;

        // Control 1: Nombre (Texto)
        const nombre = document.getElementById("nombre");
        const errorNombre = document.getElementById("errorNombre");
        if (nombre.value.trim() === "") {
            errorNombre.textContent = "El nombre es obligatorio.";
            esValido = false;
        } else {
            errorNombre.textContent = "";
        }

        // Control 2: Correo electrónico (Email)
        const correo = document.getElementById("correo");
        const errorCorreo = document.getElementById("errorCorreo");
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(correo.value.trim())) {
            errorCorreo.textContent = "Ingresa un correo electrónico válido.";
            esValido = false;
        } else {
            errorCorreo.textContent = "";
        }

        // Control 3: Selección de categoría (Select)
        const motivo = document.getElementById("motivo");
        const errorMotivo = document.getElementById("errorMotivo");
        if (motivo.value === "") {
            errorMotivo.textContent = "Por favor selecciona un motivo.";
            esValido = false;
        } else {
            errorMotivo.textContent = "";
        }

        // Control 4: Área de texto (Textarea)
        const mensaje = document.getElementById("mensaje");
        const errorMensaje = document.getElementById("errorMensaje");
        if (mensaje.value.trim().length < 10) {
            errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres.";
            esValido = false;
        } else {
            errorMensaje.textContent = "";
        }

        // Control 5: Casilla de verificación (Checkbox)
        const terminos = document.getElementById("terminos");
        const errorTerminos = document.getElementById("errorTerminos");
        if (!terminos.checked) {
            errorTerminos.textContent = "Debes aceptar los términos y condiciones.";
            esValido = false;
        } else {
            errorTerminos.textContent = "";
        }

        if (esValido) {
            alert("¡Formulario validado y enviado con éxito!");
            formulario.reset();
        }
    });
});