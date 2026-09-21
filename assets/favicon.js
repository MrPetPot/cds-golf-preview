/* Favicon tipográfico: la pestaña deletrea la marca, letra a letra. */
(() => {
  'use strict';

  const LETRAS = [...'PRIME&GOLF'];
  const MS = 920;
  const VUELTAS = 2;
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

  function fotograma(letra) {
    ctx.fillStyle = '#1A1A1A';
    ctx.fillRect(0, 0, LADO, LADO);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';

    // La letra se mide a un tamaño de referencia y se escala hasta llenar el icono:
    // a sangre en vertical, y limitada por el ancho cuando el glifo es ancho (M, &).
    const base = tinta(letra, 100);
    const escala = Math.min(LADO / base.alto, LADO / base.ancho);
    const tam = 100 * escala;
    const m = tinta(letra, tam);

    ctx.font = `700 ${tam}px ${FUENTE}`;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(letra, LADO / 2, (LADO + m.ascenso - m.descenso) / 2);
    return canvas.toDataURL('image/png');
  }

  function arrancar() {
    // Se rasterizan las diez letras una sola vez; después solo se cambia el href.
    const frames = LETRAS.map(fotograma);
    link.type = 'image/png';
    link.href = frames[0];
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Dos vueltas y se detiene en la P: el último paso cae otra vez en frames[0].
    const pasos = frames.length * VUELTAS;
    let i = 0;
    const reloj = setInterval(() => {
      i += 1;
      link.href = frames[i % frames.length];
      if (i >= pasos) clearInterval(reloj);
    }, MS);
  }

  // Sin esperar a la fuente, el primer fotograma saldría en la tipografía del sistema.
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(arrancar);
  else arrancar();
})();
