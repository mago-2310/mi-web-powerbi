document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contacto form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de inmediato

        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert("Mensaje enviado con éxito!");
                form.reset(); // Limpia el formulario
            } else {
                alert("Error al enviar el mensaje. Inténtalo de nuevo.");
            }
        })
        .catch(error => {
            alert("Error al enviar el mensaje. Inténtalo de nuevo.");
        });
    });
});
