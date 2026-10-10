const botonContraste = document.getElementById('boton-contraste');
const botonAumentarFuente = document.getElementById('boton-aumentar-fuente');
const botonDisminuirFuente = document.getElementById('boton-disminuir-fuente');

// Modo Alto Contraste
botonContraste.addEventListener('click', () => {
  document.body.classList.toggle('alto-contraste');
});

// Cambiar tamaño de letra dinámicamente
let tamanoLetra = 16;

botonAumentarFuente.addEventListener('click', () => {
  if (tamanoLetra < 22) {
    tamanoLetra += 2;
    document.documentElement.style.setProperty('--tamano-fuente-base', `${tamanoLetra}px`);
  }
});

botonDisminuirFuente.addEventListener('click', () => {
  if (tamanoLetra > 12) {
    tamanoLetra -= 2;
    document.documentElement.style.setProperty('--tamano-fuente-base', `${tamanoLetra}px`);
  }
});