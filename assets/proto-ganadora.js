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
  const estrellas = n =>
    `<span class="star">${'★'.repeat(n)}</span>` +
    (n < 4 ? `<span class="star-off"><span class="star">${'★'.repeat(4 - n)}</span></span>` : '');

  /* ── El porqué ──────────────────────────────────────────────────────
     Lo interesante de esta edicion es que la ganadora no lidera el bloque
     de golf: lidera el de proyecto. Eso es justo lo que justifica tener
     dos bloques, asi que la frase se construye desde los datos y no se
     escribe a mano —si manana el lider cambia, el texto cambia con el. */
  const topA = top.slice().sort((a, b) => b.A - a.A)[0];
  const mejorB = Math.max(...top.map(x => x.B));
  const empatadasB = top.filter(x => x.B === mejorB && x !== p).map(x => x.name);
  const ventaja = p.total - segunda.total;
  const LETRA = ['cero','un','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez'];
  const puntos = n => n === 1 ? 'un punto' : (LETRA[n] || n) + ' puntos';

  let razon;
  if (topA !== p && p.B === mejorB) {
    razon = `<strong>No gana por el golf.</strong> ${topA.name} la supera en entorno —${topA.A} de 60 frente a ${p.A}—, ` +
      `pero ${p.name} firma la mejor nota de proyecto del ranking: <strong>${p.B} de 40</strong>` +
      (empatadasB.length ? `, empatada con ${empatadasB.join(' y ')}` : '') + '. ' +
      `Ahi estan los ${puntos(ventaja)} que la separan de la segunda.`;
  } else if (p.A === Math.max(...top.map(x => x.A)) && p.B === mejorB) {
    razon = `<strong>Gana los dos bloques.</strong> ${p.A} de 60 en entorno de golf y ${p.B} de 40 en proyecto: ` +
      `nadie mas encabeza las dos mitades de la matriz. ${puntos(ventaja).replace(/^u/, 'U')} sobre la segunda.`;
  } else {
    razon = `<strong>${p.A} de 60 en entorno de golf y ${p.B} de 40 en proyecto.</strong> ` +
      `${puntos(ventaja).replace(/^u/, 'U')} sobre ${segunda.name}, que es la segunda.`;
  }
  razon = razon.replace(/Ahi estan/, 'Ahí están').replace(/nadie mas/, 'nadie más');

  const tecnica = [p.promotor, p.estudio, p.tipologia, p.unidades + ' unidades',
    p.estado + (p.entrega ? ' · entrega ' + p.entrega : '')].filter(Boolean).join(' · ');

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

      <div class="gana-pie">
        <div>
          <p class="gana-razon">${razon}</p>
          <p class="gana-razon">${p.why.a5}</p>
        </div>
        <dl class="gana-datos">
          <div class="gana-dato"><dt>Entorno de golf</dt><dd>${p.A}<small>de 60 puntos</small></dd></div>
          <div class="gana-dato"><dt>El proyecto</dt><dd>${p.B}<small>de 40 puntos</small></dd></div>
          <div class="gana-dato"><dt>Campo de referencia</dt>
            <dd>${estrellas(c.stars)}<small>${c.name} · ${c.min === 0 ? 'in-resort' : 'a ' + c.min + '′'}</small></dd></div>
          <div class="gana-dato"><dt>Desde</dt>
            <dd>${p.precioDesde}<small>${p.precio}</small></dd></div>
        </dl>
      </div>

      <p class="gana-ficha-tecnica">${tecnica}</p>

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
     en el 02. Se reescribe aqui para no tocar la plantilla. */
  const t = document.getElementById('tituloRanking');
  const l = document.getElementById('ledeRanking');
  if (t) t.innerHTML = `Y detrás, <em>las otras ${top.length - 1}</em>.`;
  if (l) l.textContent = `Del puesto ${dosCifras(segunda.rank)} al ${dosCifras(top[top.length - 1].rank)}, en orden. Abre cada una para ver su desglose criterio a criterio.`;
  const ey = document.querySelector('#fichas .sec-eyebrow');
  if (ey) ey.textContent = 'El resto del top 10';
})();
