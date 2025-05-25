// Evento que se activa al enviar el formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const tipoUsuario = document.getElementById("tipoUsuario").value;
  const nombreUsuario = document.getElementById("nombreUsuario").value.trim();
  const contrasena = document.getElementById("contrasena").value;

  const datos = new FormData();
  datos.append("tipoUsuario", tipoUsuario);
  datos.append("nombreUsuario", nombreUsuario);
  datos.append("contrasena", contrasena);

  fetch("login.php", {
    method: "POST",
    body: datos
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === "ok") {
      alert(data.mensaje);
      // Puedes redirigir si lo deseas:
      // window.location.href = "dashboard.html";
    } else {
      alert(data.mensaje);
    }
  })
  .catch(error => {
    console.error("Error al iniciar sesión:", error);
    alert("Error en el servidor.");
  });
});

// Mostrar mensaje informativo al hacer clic en "Registrarse"
function mostrarCrearCuenta() {
  document.getElementById('mensajeContacto').style.display = 'block';
}
