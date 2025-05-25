let usuarios = [];
let editingUser = null;

document.getElementById("usuario-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const id = document.getElementById("idUsuario").value;
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const rol = document.getElementById("rol").value;
  const estado = document.getElementById("estado").value;

  // Validar si el usuario ya existe, asegurando que no haya duplicados
  if (usuarios.some(user => (user.id === id || user.correo === correo) && user !== editingUser)) {
    alert("¡Este ID o correo ya están en uso!");
    return;
  }

  if (editingUser) {
    editingUser.id = id;
    editingUser.nombre = nombre;
    editingUser.correo = correo;
    editingUser.rol = rol;
    editingUser.estado = estado;
    editingUser = null;  // Limpiar la variable de edición
    document.getElementById("usuario-form").querySelector("button").innerText = "Agregar Usuario";  // Restaurar el texto del botón
    document.getElementById("cancel-edit").style.display = "none";  // Ocultar el botón de cancelación
  } else {
    usuarios.push({ id, nombre, correo, rol, estado });
  }

  renderTable();
  document.getElementById("usuario-form").reset();
});

function renderTable() {
  const tbody = document.getElementById("tabla-usuarios").getElementsByTagName("tbody")[0];
  tbody.innerHTML = '';

  usuarios.forEach((usuario, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${usuario.id}</td>
      <td>${usuario.nombre}</td>
      <td>${usuario.correo}</td>
      <td>${usuario.rol}</td>
      <td class="${usuario.estado === 'Activo' ? 'estado-activo' : 'estado-inactivo'}">${usuario.estado}</td>
      <td>
        <button onclick="editUser(${index})">Editar</button>
        <button onclick="deleteUser(${index})">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function editUser(index) {
  const usuario = usuarios[index];
  document.getElementById("idUsuario").value = usuario.id;
  document.getElementById("nombre").value = usuario.nombre;
  document.getElementById("correo").value = usuario.correo;
  document.getElementById("rol").value = usuario.rol;
  document.getElementById("estado").value = usuario.estado;

  editingUser = usuario;  // Marca el usuario como editado
  document.getElementById("usuario-form").querySelector("button").innerText = "Guardar Cambios";  // Cambiar el texto del botón
  document.getElementById("cancel-edit").style.display = "inline-block";  // Mostrar el botón de cancelación
}

function deleteUser(index) {
  if (confirm("¿Estás seguro de eliminar este usuario?")) {
    usuarios.splice(index, 1);
    renderTable();
  }
}

function cancelEdit() {
  editingUser = null;
  document.getElementById("usuario-form").reset();
  document.getElementById("usuario-form").querySelector("button").innerText = "Agregar Usuario";  // Restaurar el texto del botón
  document.getElementById("cancel-edit").style.display = "none";  // Ocultar el botón de cancelación
}

function searchUser() {
  const query = document.getElementById("search").value.toLowerCase();
  const filteredUsuarios = usuarios.filter(user => 
    user.nombre.toLowerCase().includes(query) ||
    user.correo.toLowerCase().includes(query)
  );
  renderFilteredTable(filteredUsuarios);
}

function renderFilteredTable(filteredUsuarios) {
  const tbody = document.getElementById("tabla-usuarios").getElementsByTagName("tbody")[0];
  tbody.innerHTML = '';

  filteredUsuarios.forEach((usuario, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${usuario.id}</td>
      <td>${usuario.nombre}</td>
      <td>${usuario.correo}</td>
      <td>${usuario.rol}</td>
      <td class="${usuario.estado === 'Activo' ? 'estado-activo' : 'estado-inactivo'}">${usuario.estado}</td>
      <td>
        <button onclick="editUser(${index})">Editar</button>
        <button onclick="deleteUser(${index})">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Cargar datos iniciales
renderTable();
