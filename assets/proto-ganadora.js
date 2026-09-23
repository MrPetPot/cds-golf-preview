/* ═══════════════════════════════════════════════════════════════════════
   PROTOTIPO · LA GANADORA
   Monta la pieza del primer puesto delante de la lista y saca su tarjeta
   de la rejilla. No modifica el motor: lee PROMOS —que ya viene ordenado
   y puntuado— y se limita a componer. Si cambia un dato de la matriz,
   cambia esta pieza sola.
   Solo lo carga ranking-ganadora.html.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  const destino = document.getElementById('ganadora');
  if (!destino || typeof PROMOS === 'undefined' || !PROMOS.length) return;

  const top = PROMOS.filter(p => p.top10);
  const p = top[0], segunda = top[1];
  const c = p.cercano;
  const dosCifras = n => String(n).padStart(2, '0');
  const pct = (v, max) => Math.round(v / max * 100);
  const lista = xs => xs.length === 1 ? xs[0] : xs.slice(0, -1).join(', ') + ' y ' + xs[xs.length - 1];
  const estrellas = n =>
    `<span class="star">${'★'.repeat(n)}</span>` +
    (n < 4 ? `<span class="star-off"><span class="star">${'★'.repeat(4 - n)}</span></span>` : '');

  /* ── Por qué gana ───────────────────────────────────────────────────
     Lo interesante de esta edición es que la ganadora no lidera el bloque
     de golf: lidera el de proyecto. Eso es justo lo que justifica tener
     dos bloques, así que la frase se construye desde los datos y no se
     escribe a mano —si mañana cambia el líder, cambia el texto con él. */
  const topA = top.slice().sort((a, b) => b.A - a.A)[0];
  const mejorB = Math.max(...top.map(x => x.B));
  const empatadasB = top.filter(x => x.B === mejorB && x !== p).map(x => x.name);
  const ventaja = p.total - segunda.total;
  const LETRA = ['cero', 'un', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce'];
  const puntos = n => n === 1 ? 'un punto' : (LETRA[n] || n) + ' puntos';

  let razon;
  if (topA !== p && p.B === mejorB) {
    razon = `<strong>No gana por el golf.</strong> ${topA.name} la supera en entorno —${topA.A} de 60 frente a ${p.A}—, ` +
      `pero ${p.name} firma la mejor nota de proyecto del ranking: <strong>${p.B} de 40</strong>` +
      (empatadasB.length ? `, empatada con ${lista(empatadasB)}` : '') + '. ' +
      `Ahí están los ${puntos(ventaja)} que la separan de la segunda.`;
  } else if (p.A === Math.max(...top.map(x => x.A)) && p.B === mejorB) {
    razon = `<strong>Gana los dos bloques.</strong> ${p.A} de 60 en entorno de golf y ${p.B} de 40 en proyecto: ` +
      `nadie más encabeza las dos mitades de la matriz. ${puntos(ventaja).replace(/^u/, 'U')} sobre la segunda.`;
  } else {
    razon = `<strong>${p.A} de 60 en entorno de golf y ${p.B} de 40 en proyecto.</strong> ` +
      `${puntos(ventaja).replace(/^u/, 'U')} sobre ${segunda.name}, que es la segunda.`;
  }

  /* ── Gráfica 1 · de dónde sale la nota ──────────────────────────────
     Descompone el total en sus dos mitades y, al ir las dos barras sobre
     el mismo ancho, enseña algo que las cifras sueltas esconden: cuál de
     los dos bloques está rindiendo más en proporción. */
  const mitades = `
    <figure class="gfx">
      <figcaption class="gana-rot">De dónde salen los ${p.total}</figcaption>
      <div class="gfx-mitades">
        <div class="gfx-fila">
          <span class="gfx-lbl">Entorno de golf</span>
          <span class="gfx-cifra">${p.A}<small>/60</small></span>
          <span class="gfx-track"><span class="gfx-fill gfx-golf" style="width:${pct(p.A, 60)}%"></span></span>
        </div>
        <div class="gfx-fila">
          <span class="gfx-lbl">El proyecto</span>
          <span class="gfx-cifra">${p.B}<small>/40</small></span>
          <span class="gfx-track"><span class="gfx-fill gfx-proy" style="width:${pct(p.B, 40)}%"></span></span>
        </div>
      </div>
      <p class="gfx-pie">Sobre su propio máximo, el proyecto rinde al ${pct(p.B, 40)} % y el golf al ${pct(p.A, 60)} %.</p>
    </figure>`;

  /* ── La ficha en corto ──────────────────────────────────────────────
     Deja de ser una línea de datos seguidos: cada dato con su etiqueta,
     en la misma rejilla que ya usa la ficha del proyecto. */
  const dato = (t, v, sub) => v ? `<div><dt>${t}</dt><dd>${v}${sub ? `<small>${sub}</small>` : ''}</dd></div>` : '';
  const tecnica = [
    dato('Promotor', p.promotor),
    dato('Arquitectura', p.estudio),
    dato('Tipología', p.tipologia),
    dato('Unidades', p.unidades, 'desarrollo completo'),
    dato('Estado', p.estado, p.entrega ? 'entrega ' + p.entrega : ''),
    dato('Desde', p.precioDesde, p.precio),
    dato('Posicionamiento', '€' + p.eurM2.toLocaleString('es-ES'), 'por m²'),
    dato('Campo de referencia', estrellas(c.stars),
      `${c.name} · ${c.min === 0 ? 'in-resort' : 'a ' + c.min + '′'}`)
  ].join('');

  const foto = (typeof FOTOS_PROMO !== 'undefined' && FOTOS_PROMO[p.id] && FOTOS_PROMO[p.id][0]) || null;
  const src = foto ? foto.src : p.image;

  destino.innerHTML = `
    <div class="gana">
      <figure class="gana-banda">
        <img src="${src}" alt="${p.name} — ${p.municipio}" loading="eager"/>
        <figcaption class="gana-cuerpo">
          <div>
            <span class="gana-lbl">La ganadora · Edición #01</span>
            <h3 class="gana-nombre"><span class="gana-puesto">#${dosCifras(p.rank)}</span> ${p.name}</h3>
            <span class="gana-loc">${p.municipio}${p.zona ? ' · ' + p.zona : ''}</span>
          </div>
          <div class="gana-marcador">${p.total}<small>sobre 100</small></div>
        </figcaption>
      </figure>

      <div class="gana-intro">
        <div class="gana-texto">
          <span class="gana-rot">La presentación</span>
          <p class="gana-razon">${p.rationale}</p>
          <p class="gana-razon gana-razon-cuenta">${razon}</p>
        </div>
        ${mitades}
      </div>


      <div class="gana-proyecto">
        <span class="gana-rot">La ficha en corto</span>
        <dl class="project-data">${tecnica}</dl>
      </div>

      <div class="gana-acciones">
        <a class="gana-cta" href="#f/${p.id}" data-abrir-ganadora="${p.id}">
          <b>Ver la ficha completa</b>
          <span>Los diez criterios, uno a uno →</span>
        </a>
      </div>
    </div>`;

  /* La tarjeta del 01 sale de la lista pero se queda en el DOM: abierta
     sigue siendo la capa a pantalla completa que ya existe. */
  const tarjeta = document.getElementById('ficha-' + p.id);
  if (tarjeta) tarjeta.classList.add('gana-fuera');

  destino.addEventListener('click', e => {
    const a = e.target.closest('[data-abrir-ganadora]');
    if (!a || !tarjeta) return;
    e.preventDefault();
    tarjeta.open = true;   // el motor se encarga del resto desde su 'toggle'
  });

  /* El titular de la lista ya no puede decir "el top 10 en orden": empieza
     en el 02. Se reescribe aquí para no tocar la plantilla. */
  const t = document.getElementById('tituloRanking');
  const l = document.getElementById('ledeRanking');
  if (t) t.innerHTML = `Y detrás, <em>las otras ${top.length - 1}</em>.`;
  if (l) l.textContent = `Del puesto ${dosCifras(segunda.rank)} al ${dosCifras(top[top.length - 1].rank)}, en orden. Abre cada una para ver su desglose criterio a criterio.`;
  const ey = document.querySelector('#fichas .sec-eyebrow');
  if (ey) ey.textContent = 'El resto del top 10';
})();
