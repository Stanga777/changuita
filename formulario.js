const formularioPerfil = document.getElementById('formulario-perfil');

formularioPerfil.addEventListener('submit', (e) => {
  e.preventDefault();

  document.querySelectorAll('.mensaje-error').forEach(span => span.textContent = '');
  const mensajeExito = document.getElementById('mensaje-exito-formulario');
  mensajeExito.textContent = '';

  const nombre = document.getElementById('nombre').value.trim();
  const profesion = document.getElementById('profesion').value.trim();
  const rubro = document.getElementById('rubro').value;
  const contacto = document.getElementById('contacto').value.trim();
  const enlaceCv = document.getElementById('enlace-cv').value.trim();
  const descripcion = document.getElementById('descripcion').value.trim();

  let estaOk = true;

  if (!nombre) {
    document.getElementById('error-nombre').textContent = "Poné tu nombre y apellido para seguir.";
    estaOk = false;
  }

  if (!profesion) {
    document.getElementById('error-profesion').textContent = "Ingresá tu oficio o lo que sabés hacer.";
    estaOk = false;
  }

  if (!rubro) {
    document.getElementById('error-rubro').textContent = "Elegí un rubro de la lista.";
    estaOk = false;
  }

  if (!contacto || contacto.length < 8) {
    document.getElementById('error-contacto').textContent = "Ingresá un número de WhatsApp o teléfono válido (mínimo 8 números).";
    estaOk = false;
  }

  if (!enlaceCv || (!enlaceCv.startsWith("http://") && !enlaceCv.startsWith("https://"))) {
    document.getElementById('error-enlace-cv').textContent = "Poné un link válido a tu CV o portfolio (arrancá con http:// o https://).";
    estaOk = false;
  }

  if (!descripcion || descripcion.length < 15) {
    document.getElementById('error-descripcion').textContent = "Explicá un poquito más lo que hacés (al menos 15 caracteres).";
    estaOk = false;
  }

  // Si todo está OK, guardamos el perfil
  if (estaOk) {
    agregarNuevoPerfil(nombre, profesion, rubro, contacto, enlaceCv, descripcion);
    renderizarPerfiles(perfiles);

    mensajeExito.textContent = "¡Listo! Ya se publicó tu perfil en Changuita.";
    formularioPerfil.reset();

    setTimeout(() => {
      cambiarVista('catalogo');
      mensajeExito.textContent = '';
    }, 1500);
  }
});