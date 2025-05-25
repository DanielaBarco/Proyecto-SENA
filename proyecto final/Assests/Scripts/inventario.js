function volverAlPanel() {
    window.location.href = "admin.html";
  }
  
  function mostrarFormulario() {
    const accion = document.getElementById('accion').value;
    const formulario = document.getElementById('formularioAccion');
  
    const agregar = document.getElementById('formAgregar');
    const editar = document.getElementById('formEditar');
    const eliminar = document.getElementById('formEliminar');
    const camposEdicion = document.getElementById('editarCampos');
  
    formulario.classList.add('form-hidden');
    agregar.classList.add('form-hidden');
    editar.classList.add('form-hidden');
    eliminar.classList.add('form-hidden');
    camposEdicion.classList.add('form-hidden');
  
    if (accion === "agregar" || accion === "editar" || accion === "eliminar") {
      formulario.classList.remove('form-hidden');
    }
  
    if (accion === "agregar") {
      agregar.classList.remove('form-hidden');
    } else if (accion === "editar") {
      editar.classList.remove('form-hidden');
    } else if (accion === "eliminar") {
      eliminar.classList.remove('form-hidden');
    }
  }
  
  function mostrarCamposEdicion() {
    const codigo = document.getElementById('codigoEditar').value.trim();
    const campos = document.getElementById('editarCampos');
    const validacion = document.getElementById('validacion');
  
    if (codigo !== "") {
      campos.classList.remove('form-hidden');
      validacion.innerHTML = "";
    } else {
      validacion.innerHTML = "Por favor, ingresa un código válido.";
    }
  }
  