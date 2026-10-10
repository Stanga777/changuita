const contenedorPerfiles = document.getElementById('contenedor-perfiles');
const campoBusqueda = document.getElementById('campo-busqueda');
const filtroRubro = document.getElementById('filtro-rubro');

// Modal de contacto
const modalContacto = document.getElementById('modal-contacto');
const botonCerrarModal = document.getElementById('boton-cerrar-modal');
const formularioContacto = document.getElementById('formulario-contacto');
const nombreTrabajadorModal = document.getElementById('nombre-trabajador-modal');
const profesionTrabajadorModal = document.getElementById('profesion-trabajador-modal');
const mensajeModal = document.getElementById('mensaje-modal');

function renderizarPerfiles(lista) {
  contenedorPerfiles.innerHTML = "";

  if (lista.length === 0) {
    contenedorPerfiles.innerHTML = "<p>No encontramos a nadie con ese nombre o rubro. ¡Probá buscando de otra forma!</p>";
    return;
  }

  lista.forEach(perfil => {
    const tarjeta = document.createElement('article');
    tarjeta.classList.add('tarjeta-perfil');

    tarjeta.innerHTML = `
      <h3>${perfil.nombre}</h3>
      <p><strong>Oficio/Profesión:</strong> ${perfil.profesion}</p>
      <p><strong>Rubro:</strong> ${perfil.rubro}</p>
      <p>${perfil.descripcion}</p>
      <p><a href="${perfil.enlaceCv}" target="_blank" rel="noopener noreferrer">📄 Ver CV / Trabajos realizados</a></p>
      <button class="boton-principal boton-contactar" data-id="${perfil.id}">💬 Contactar / Pedir Presupuesto</button>
    `;

    contenedorPerfiles.appendChild(tarjeta);
  });

  document.querySelectorAll('.boton-contactar').forEach(boton => {
    boton.addEventListener('click', (e) => {
      const id = parseInt(e.target.getAttribute('data-id'));
      abrirModalContacto(id);
    });
  });
}

function filtrarPerfiles() {
  const texto = campoBusqueda.value.toLowerCase().trim();
  const rubroElegido = filtroRubro.value;

  const filtrados = perfiles.filter(perfil => {
    const coincideTexto = perfil.nombre.toLowerCase().includes(texto) || 
                          perfil.profesion.toLowerCase().includes(texto);
    const coincideRubro = rubroElegido === 'todos' || perfil.rubro === rubroElegido;

    return coincideTexto && coincideRubro;
  });

  renderizarPerfiles(filtrados);
}

campoBusqueda.addEventListener('input', filtrarPerfiles);
filtroRubro.addEventListener('change', filtrarPerfiles);

// Abrir/Cerrar Modal de Contacto
function abrirModalContacto(idPerfil) {
  const laburante = perfiles.find(p => p.id === idPerfil);
  if (!laburante) return;

  document.getElementById('id-trabajador').value = laburante.id;
  nombreTrabajadorModal.textContent = `Hablar con ${laburante.nombre}`;
  profesionTrabajadorModal.textContent = `Especialidad: ${laburante.profesion} | Wpp: ${laburante.contacto}`;
  mensajeModal.textContent = '';
  formularioContacto.reset();

  modalContacto.showModal();
}

botonCerrarModal.addEventListener('click', () => {
  modalContacto.close();
});

formularioContacto.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombreCliente = document.getElementById('nombre-cliente').value.trim();
  const mensajeCliente = document.getElementById('mensaje-cliente').value.trim();

  if (!nombreCliente || !mensajeCliente) {
    mensajeModal.textContent = "Completá tu nombre y la consulta antes de enviar, porfa.";
    mensajeModal.style.color = "var(--color-error)";
    return;
  }

  mensajeModal.style.color = "var(--color-exito)";
  mensajeModal.textContent = "¡Consulta enviada! En breve se van a estar contactando con vos.";

  setTimeout(() => {
    modalContacto.close();
  }, 2000);
});

// Carga inicial al arrancar la página
guardarEnAlmacenamiento();
renderizarPerfiles(perfiles);