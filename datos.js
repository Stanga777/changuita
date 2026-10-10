// 1. Estructura con los perfiles iniciales
const perfilesIniciales = [
  {
    id: 1,
    nombre: "Juan Pérez",
    profesion: "Plomero y Gasista Matriculado",
    rubro: "Oficios",
    contacto: "1123456789",
    enlaceCv: "https://linkedin.com",
    descripcion: "Hago arreglos de agua, destapes, pérdidas en cocinas/baños y mantenimiento de estufas. Cubro Zona Sur y CABA."
  },
  {
    id: 2,
    nombre: "María Gómez",
    profesion: "Diseñadora Web & UI",
    rubro: "Diseño",
    contacto: "1198765432",
    enlaceCv: "https://behance.net",
    descripcion: "Hago páginas web para negocios, logos y la imagen para tu emprendimiento. Laburo 100% remoto."
  },
  {
    id: 3,
    nombre: "Carlos Rodríguez",
    profesion: "Electricista Domiciliario",
    rubro: "Oficios",
    contacto: "1155443322",
    enlaceCv: "https://drive.google.com",
    descripcion: "Instalaciones eléctricas completas, arreglo de cortocircuitos, armado de tableros y cambio de térmicas."
  }
];

// 2. Cargamos la lista (si ya hay guardados los usa, si no, usa los iniciales)
let perfiles = JSON.parse(localStorage.getItem("perfiles_changuita")) || perfilesIniciales;

// Guardar el estado actual en localStorage
function guardarEnAlmacenamiento() {
  localStorage.setItem("perfiles_changuita", JSON.stringify(perfiles));
}

// 3. Función para agregar una nueva persona
function agregarNuevoPerfil(nombre, profesion, rubro, contacto, enlaceCv, descripcion) {
  let nuevoPerfil = {
    id: Date.now(),
    nombre: nombre,
    profesion: profesion,
    rubro: rubro,
    contacto: contacto,
    enlaceCv: enlaceCv,
    descripcion: descripcion
  };

  perfiles.push(nuevoPerfil);
  guardarEnAlmacenamiento();
  console.log("¡Persona agregada con éxito!");
}