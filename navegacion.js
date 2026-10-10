const botonAbrirMenuLateral = document.getElementById('boton-abrir-menu-lateral');
const botonCerrarMenuLateral = document.getElementById('boton-cerrar-menu-lateral');
const menuLateral = document.getElementById('menu-lateral');
const capaOscuraLateral = document.getElementById('capa-oscura-lateral');

const botonMarca = document.getElementById('boton-marca');
const botonNavegacionInicio = document.getElementById('boton-navegacion-inicio');
const botonNavegacionCatalogo = document.getElementById('boton-navegacion-catalogo');
const botonNavegacionFormulario = document.getElementById('boton-navegacion-formulario');

const botonInicioBuscar = document.getElementById('boton-inicio-buscar');
const botonInicioPublicar = document.getElementById('boton-inicio-publicar');

const seccionInicio = document.getElementById('seccion-inicio');
const seccionCatalogo = document.getElementById('seccion-catalogo');
const seccionFormulario = document.getElementById('seccion-formulario');

function abrirMenuLateral() {
  menuLateral.classList.add('activo');
  capaOscuraLateral.classList.add('activo');
}

function cerrarMenuLateral() {
  menuLateral.classList.remove('activo');
  capaOscuraLateral.classList.remove('activo');
}

botonAbrirMenuLateral.addEventListener('click', abrirMenuLateral);
botonCerrarMenuLateral.addEventListener('click', cerrarMenuLateral);
capaOscuraLateral.addEventListener('click', cerrarMenuLateral);

function cambiarVista(vistaAMostrar) {
  seccionInicio.classList.add('vista-oculta');
  seccionInicio.classList.remove('vista-activa');
  
  seccionCatalogo.classList.add('vista-oculta');
  seccionCatalogo.classList.remove('vista-activa');
  
  seccionFormulario.classList.add('vista-oculta');
  seccionFormulario.classList.remove('vista-activa');

  botonNavegacionInicio.classList.remove('activo');
  botonNavegacionCatalogo.classList.remove('activo');
  botonNavegacionFormulario.classList.remove('activo');

  if (vistaAMostrar === 'inicio') {
    seccionInicio.classList.remove('vista-oculta');
    seccionInicio.classList.add('vista-activa');
    botonNavegacionInicio.classList.add('activo');
  } else if (vistaAMostrar === 'catalogo') {
    seccionCatalogo.classList.remove('vista-oculta');
    seccionCatalogo.classList.add('vista-activa');
    botonNavegacionCatalogo.classList.add('activo');
  } else if (vistaAMostrar === 'formulario') {
    seccionFormulario.classList.remove('vista-oculta');
    seccionFormulario.classList.add('vista-activa');
    botonNavegacionFormulario.classList.add('activo');
  }

  cerrarMenuLateral();
}

// Eventos de botones
botonNavegacionInicio.addEventListener('click', () => cambiarVista('inicio'));
botonNavegacionCatalogo.addEventListener('click', () => cambiarVista('catalogo'));
botonNavegacionFormulario.addEventListener('click', () => cambiarVista('formulario'));

botonMarca.addEventListener('click', () => cambiarVista('inicio'));

botonInicioBuscar.addEventListener('click', () => cambiarVista('catalogo'));
botonInicioPublicar.addEventListener('click', () => cambiarVista('formulario'));