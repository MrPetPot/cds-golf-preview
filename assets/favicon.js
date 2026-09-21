/* Favicon tipográfico: la pestaña deletrea la marca, letra a letra. */
(() => {
  'use strict';

  const LETRAS = [...'PRIME&GOLF'];
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

  function fotograma(letra) {
    ctx.fillStyle = '#1A1A1A';
    ctx.fillRect(0, 0, LADO, LADO);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = "700 54px Antonio, Oswald, 'Arial Narrow', Impact, sans-serif";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(letra, LADO / 2, LADO / 2 + 2);
    return canvas.toDataURL('image/png');
  }

  function arrancar() {
    // Se rasterizan las diez letras una sola vez; después solo se cambia el href.
    const frames = LETRAS.map(fotograma);
    link.type = 'image/png';
    link.href = frames[0];
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let i = 0;
    setInterval(() => {
      i = (i + 1) % frames.length;
      link.href = frames[i];
    }, MS);
  }

  // Sin esperar a la fuente, el primer fotograma saldría en la tipografía del sistema.
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(arrancar);
  else arrancar();
})();
