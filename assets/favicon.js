/* Favicon tipográfico: la pestaña deletrea la marca, letra a letra. */
(() => {
  'use strict';

  const LETRAS = [...'PRIMEANDGOLF'];
  const MS = 920;
  const LADO = 64;

  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = LADO;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.append(link);
  }

  const FUENTE = "Antonio, Oswald, 'Arial Narrow', Impact, sans-serif";

  function tinta(letra, tam) {
    ctx.font = `700 ${tam}px ${FUENTE}`;
    const m = ctx.measureText(letra);
    return {
      alto: m.actualBoundingBoxAscent + m.actualBoundingBoxDescent,
      ancho: m.actualBoundingBoxLeft + m.actualBoundingBoxRight,
      ascenso: m.actualBoundingBoxAscent,
      descenso: m.actualBoundingBoxDescent
    };
  }

  // Sin tarjeta de fondo: el icono se recorta sobre la barra de pestanas y se
  // integra con ella. Pero un negro fijo desaparece sobre una barra oscura, que
  // es la mitad de los navegadores, asi que la tinta sigue al tema del sistema.
  const oscuro = matchMedia('(prefers-color-scheme: dark)');
  const TINTA = () => oscuro.matches ? '#FFFFFF' : '#1A1A1A';

  function fotograma(letra) {
    ctx.clearRect(0, 0, LADO, LADO);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';

    // La letra se mide a un tamaño de referencia y se escala hasta llenar el icono:
    // a sangre en vertical, y limitada por el ancho cuando el glifo es ancho (M, W).
    const base = tinta(letra, 100);
    const escala = Math.min(LADO / base.alto, LADO / base.ancho);
    const tam = 100 * escala;
    const m = tinta(letra, tam);

    ctx.font = `700 ${tam}px ${FUENTE}`;
    ctx.fillStyle = TINTA();
    ctx.fillText(letra, LADO / 2, (LADO + m.ascenso - m.descenso) / 2);
    return canvas.toDataURL('image/png');
  }

  function arrancar() {
    // Se rasterizan las doce letras y se vuelven a rasterizar si cambia el tema
    // del sistema: la tinta es distinta y las imagenes ya generadas no valen.
    let frames = LETRAS.map(fotograma);
    let i = 0;
    link.type = 'image/png';
    link.href = frames[0];

    const repintar = () => {
      frames = LETRAS.map(fotograma);
      link.href = frames[i % frames.length];
    };
    if (oscuro.addEventListener) oscuro.addEventListener('change', repintar);
    else if (oscuro.addListener) oscuro.addListener(repintar);   // Safari antiguo

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Sin fin: la pestaña sigue deletreando la marca mientras la página viva.
    // El modulo hace que al llegar a la F vuelva a la P sin corte.
    setInterval(() => {
      i += 1;
      link.href = frames[i % frames.length];
    }, MS);
  }

  // Sin esperar a la fuente, el primer fotograma saldría en la tipografía del sistema.
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(arrancar);
  else arrancar();
})();
