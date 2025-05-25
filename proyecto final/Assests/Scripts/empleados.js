document.addEventListener("DOMContentLoaded", () => {
    const acciones = document.querySelector(".inventory-actions");
    const botonesModificar = acciones.querySelectorAll("input, select, button");

    // Simulamos que el rol es "empleado"
    const rolUsuario = "empleado"; // Esto normalmente se valida desde PHP con sesiones

    if (rolUsuario === "empleado") {
        // Deshabilitar campos para edición
        botonesModificar.forEach(elem => {
            elem.disabled = true;
        });

        // Mostrar mensaje de solo lectura
        const msg = document.createElement("p");
        msg.textContent = "🔒 Modo
